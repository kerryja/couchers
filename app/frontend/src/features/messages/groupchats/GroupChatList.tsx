import { Box, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { GroupChat } from "../../../pb/conversations_pb";
import { useAppDispatch, useTypedSelector } from "../../../store";
import GroupChatListItem from "./GroupChatListItem";
import { setGroupChat } from ".";

const useStyles = makeStyles({ root: {} });

export default function GroupChatList() {
  const { groupChats } = useTypedSelector((state) => state.groupChats);
  const dispatch = useAppDispatch();
  const dispatchSetGroupChat = (groupChat: GroupChat.AsObject | null) =>
    dispatch(setGroupChat(groupChat));

  const classes = useStyles();
  return (
    <>
      <Box className={classes.root}>
        {groupChats.map((groupChat) => (
          <Link
            key={groupChat.groupChatId}
            onClick={() => dispatchSetGroupChat(groupChat)}
          >
            <GroupChatListItem groupChat={groupChat} />
          </Link>
        ))}
      </Box>
    </>
  );
}