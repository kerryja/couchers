from concurrent import futures
from contextlib import contextmanager
from unittest.mock import patch

import grpc
import pytest
from couchers.config import config
from couchers.servicers.bugs import Bugs
from google.protobuf import empty_pb2, wrappers_pb2
from pb import bugs_pb2, bugs_pb2_grpc

from tests.test_fixtures import api_session, db, generate_user, make_friends


@contextmanager
def bugs_session():
    bugs_server = grpc.server(futures.ThreadPoolExecutor(1))
    port = bugs_server.add_insecure_port("localhost:0")
    bugs_pb2_grpc.add_BugsServicer_to_server(Bugs(), bugs_server)
    bugs_server.start()

    with grpc.insecure_channel(f"localhost:{port}") as channel:
        yield bugs_pb2_grpc.BugsStub(channel)

    bugs_server.stop(None)

def test_bug_tool_disabled():
    with bugs_session() as bugs, pytest.raises(grpc.RpcError) as e:
        bugs.ReportBug(bugs_pb2.ReportBugReq(
            subject="subject",
            description="description",
            steps="steps",
            results="results",
            frontend_version="frontend_version",
            user_agent="user_agent",
            page="page",
            user_id=99,
        ))
    assert e.value.code() == grpc.StatusCode.UNAVAILABLE

def test_bug_tool():
    with bugs_session() as bugs:
        def dud_post(url, auth, json):
            assert url == "https://api.github.com/repos/user/repo/issues"
            assert auth == ("user", "token")
            assert json == {
                "title": "subject",
                "body": "Subject: subject\nDescription:\ndescription\n\nSteps:\nsteps\n\nResults:\nresults\n\nBackend version: unknown\nFrontend version: frontend_version\nUser Agent: user_agent\nPage: page\nUser ID: 99",
                "labels": ["bug-tool"]
            }
            return type("_PostReturn", (), {"status_code": 201, "json": lambda: {"number": 11}})

        new_config = config.copy()
        new_config["BUG_TOOL_ENABLED"] = True

        with patch("couchers.servicers.bugs.config", new_config):
            with patch("couchers.servicers.bugs.requests.post", dud_post):
                res = bugs.ReportBug(bugs_pb2.ReportBugReq(
                    subject="subject",
                    description="description",
                    steps="steps",
                    results="results",
                    frontend_version="frontend_version",
                    user_agent="user_agent",
                    page="page",
                    user_id=99,
                ))

    assert res.report_identifier == "#11"

def test_bug_tool_fails_on_network_error():
    with bugs_session() as bugs:
        def dud_post(url, auth, json):
            return type("_PostReturn", (), {"status_code": 400, "json": lambda: {"number": 11}})

        new_config = config.copy()
        new_config["BUG_TOOL_ENABLED"] = True

        with patch("couchers.servicers.bugs.config", new_config):
            with patch("couchers.servicers.bugs.requests.post", dud_post):
                with pytest.raises(grpc.RpcError) as e:
                    res = bugs.ReportBug(bugs_pb2.ReportBugReq(
                        subject="subject",
                        description="description",
                        steps="steps",
                        results="results",
                        frontend_version="frontend_version",
                        user_agent="user_agent",
                        page="page",
                        user_id=99,
                    ))
                assert e.value.code() == grpc.StatusCode.INTERNAL
