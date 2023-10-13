import { create } from "zustand";

const userStore = create((set) => ({
  emptyConversation: true,
  emptyNotification: true,
}));

export default userStore;
