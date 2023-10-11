import FriendItems from "./FriendItems";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import IconButton from "@mui/material/IconButton";
import PersonAddAlt1RoundedIcon from "@mui/icons-material/PersonAddAlt1Rounded";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import AddFriend from "./AddFriend";

export default function MyFriends() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between p-2">
        <span className="flex gap-2  items-center text-sec ">
          <PeopleRoundedIcon />
          <h1 className="text-lg font-light">Your Friends</h1>
        </span>

        <IconButton onClick={handleOpen}>
          <PersonAddAlt1RoundedIcon className="text-white" />
        </IconButton>
      </div>
      <FriendItems />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4
         bg-mainLight p-16 rounded-xl"
        >
          <AddFriend />
        </Box>
      </Modal>
    </div>
  );
}
