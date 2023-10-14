import { create } from "zustand";

const mainStore = create((set) => ({
  loginInterface: true,
  chatInterface: true,
  addFriend: false,

  switchLoginInterface: () => {
    const { loginInterface } = mainStore.getState();
    set({ loginInterface: !loginInterface });
  },
  switchChatInterface: () => {
    set({ chatInterface: true });
  },
  switchAddFriend: () => {
    const { addFriend } = mainStore.getState();
    set({ addFriend: !addFriend });
  },
}));

export default mainStore;
