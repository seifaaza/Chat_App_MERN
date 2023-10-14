import { create } from "zustand";
import Avatar from "@mui/material/Avatar";

const userData = create((set) => ({
  username: "Seif",
  image: "https://picsum.photos/200/300",
  profileIcon: <Avatar alt="username" image="image" />,
  emptyConversation: true,
  emptyChat: true,
  emptyFriend: true,
  emptyNotification: true,
}));

export default userData;
