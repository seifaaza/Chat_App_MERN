import { create } from "zustand";

const userStore = create((set) => ({
  emptyConversation: true,
  emptyChat: true,
  emptyFriend: true,
  emptyNotification: false,
}));

export default userStore;
