import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import Tooltip from "@mui/material/Tooltip";
import AddPhotoAlternateRoundedIcon from "@mui/icons-material/AddPhotoAlternateRounded";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import MainModal from "../../modals/MainModal";
import { useState } from "react";
import EditProfileModal from "./EditProfileModal";
import userStore from "../../store/userStore";
import authenticationStore from "../../store/authenticationStore";

export default function Profile() {
  const store = userStore();
  const userAuthenticationStore = authenticationStore();

  return (
    <div className="w-2/4 h-screen mx-auto py-16 flex flex-col pt-28 gap-12">
      <div className="flex justify-between">
        <div className="flex gap-16 items-center">
          <Avatar alt="username" image="image" className="profile-image" />
          <span>
            <h1 className="text-4xl text-white">Username</h1>
            <h2 className="text-xl text-slate-300 mt-2">Email</h2>
            <h3 className="text-lg text-white mt-5">
              Lorem ipsum dolor sit amet, consectetur.
            </h3>
          </span>
        </div>
        <Tooltip
          title="Edit"
          className="profile-button-item self-start"
          onClick={store.openEditModal}
        >
          <IconButton aria-label="Edit">
            <EditRoundedIcon />
          </IconButton>
        </Tooltip>
      </div>
      <div className="flex justify-center gap-8">
        {/* <Button
          variant="contained"
          className="btn"
          size="large"
          endIcon={<LogoutRoundedIcon />}
          onClick={userAuthenticationStore.logout}
        >
          Log out
        </Button> */}
        <Button
          variant="contained"
          className="btn-red"
          size="large"
          endIcon={<DeleteIcon />}
        >
          Delete
        </Button>
      </div>
      <MainModal
        modal={<EditProfileModal />}
        open={store.EditProfileModal}
        close={store.closeEditModal}
      />
    </div>
  );
}
