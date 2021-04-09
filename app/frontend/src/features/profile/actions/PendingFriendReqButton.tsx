import Button from "components/Button";
import IconButton from "components/IconButton";
import { CheckIcon, CloseIcon, PersonAddIcon } from "components/Icons";
import Menu, { MenuItem } from "components/Menu";
import { PENDING } from "features/connections/constants";
import { SetMutationError } from "features/connections/friends";
import useRespondToFriendRequest from "features/connections/friends/useRespondToFriendRequest";
import {
  ACCEPT_FRIEND_ACTION,
  ACCEPT_FRIEND_LABEL,
  DECLINE_FRIEND_ACTION,
  DECLINE_FRIEND_LABEL,
} from "features/profile/constants";
import React, { useRef, useState } from "react";

interface PendingFriendReqButtonProps {
  friendRequestId: number;
  setMutationError: SetMutationError;
}

export const RESPOND_TO_FRIEND_REQUEST_MENU_ID =
  "respond-to-friend-request-actions-menu";

function PendingFriendReqButton({
  friendRequestId,
  setMutationError,
}: PendingFriendReqButtonProps) {
  const [isOpen, setIsOpen] = useState({
    accepted: false,
    rejected: false,
    menu: false,
  });

  const { respondToFriendRequest } = useRespondToFriendRequest();

  const menuAnchor = useRef<HTMLButtonElement>(null);

  const handleClick = (item: keyof typeof isOpen) => () => {
    //close the menu if a menu item was selected
    if (item !== "menu") {
      setIsOpen((prevState) => ({ ...prevState, menu: false }));
    } else {
      setIsOpen((prevState) => ({ ...prevState, menu: true }));
    }
  };

  const handleClose = (item: keyof typeof isOpen) => () => {
    setIsOpen((prevState) => ({ ...prevState, [item]: false }));
  };

  return (
    <>
      <Button
        startIcon={<PersonAddIcon />}
        innerRef={menuAnchor}
        onClick={handleClick("menu")}
        aria-controls={RESPOND_TO_FRIEND_REQUEST_MENU_ID}
      >
        {PENDING}
      </Button>
      <Menu
        anchorEl={menuAnchor.current}
        id={RESPOND_TO_FRIEND_REQUEST_MENU_ID}
        onClose={handleClose("menu")}
        open={isOpen.menu}
      >
        <MenuItem onClick={handleClick("accepted")}>
          <IconButton
            aria-label={ACCEPT_FRIEND_LABEL}
            onClick={() => {
              respondToFriendRequest({
                accept: true,
                friendRequestId,
                setMutationError,
              });
            }}
          >
            <CheckIcon /> {ACCEPT_FRIEND_ACTION}
          </IconButton>
        </MenuItem>
        <MenuItem onClick={handleClick("rejected")}>
          <IconButton
            aria-label={DECLINE_FRIEND_LABEL}
            onClick={() => {
              respondToFriendRequest({
                accept: false,
                friendRequestId,
                setMutationError,
              });
            }}
          >
            <CloseIcon /> {DECLINE_FRIEND_ACTION}
          </IconButton>
        </MenuItem>
      </Menu>
    </>
  );
}

export default PendingFriendReqButton;
