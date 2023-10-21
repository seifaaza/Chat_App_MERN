import { create } from "zustand";
import Avatar from "@mui/material/Avatar";

const userStore = create((set) => ({
  username: "Seif",
  image: "https://picsum.photos/200/300",
  profileIcon: <Avatar alt="username" image="image" />,
  emptyConversation: true,
  emptyChat: true,
  emptyFriend: true,
  emptyNotification: true,

  EditProfileModal: false,
  openEditModal: () => {
    set({ EditProfileModal: true });
  },
  closeEditModal: () => {
    set({ EditProfileModal: false });
  },
}));

export default userStore;
