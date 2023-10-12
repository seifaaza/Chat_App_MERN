import { create } from "zustand";

const mainStore = create((set) => ({
  loginInterface: true,
  chatInterface: false,

  switchLoginInterface: () => {
    const { loginInterface } = mainStore.getState();
    set({ loginInterface: !loginInterface });
  },
  switchChatInterface: () => {
    set({ chatInterface: true });
  },
}));

export default mainStore;
