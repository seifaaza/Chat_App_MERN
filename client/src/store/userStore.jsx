import { create } from "zustand";

const userStore = create((set) => ({
  conversation: false,
}));

export default userStore;
