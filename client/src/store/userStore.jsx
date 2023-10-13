import { create } from "zustand";
import Avatar from "@mui/material/Avatar";

const userStore = create((set) => ({
  username: "Seif",
  image: "https://picsum.photos/200/300",
  profileIcon: <Avatar alt={"username"} image={"image"} />,

  emptyConversation: false,
  emptyChat: false,
  emptyFriend: false,
  emptyNotification: false,
}));

export { userStore };
