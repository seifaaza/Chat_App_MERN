import { create } from "zustand";

const mainStore = create((set) => ({
  loginInterface: true,
  switchLoginInterface: () => {
    const { loginInterface } = mainStore.getState();
    set({ loginInterface: !loginInterface });
  },

  chatInterface: true,
  switchChatInterface: () => {
    set({ chatInterface: true });
  },

  addFriend: false,
  switchAddFriend: () => {
    const { addFriend } = mainStore.getState();
    set({ addFriend: !addFriend });
  },

  showPassword: false,
  handleClickShowPassword: () => {
    const { showPassword } = mainStore.getState();
    set({ showPassword: !showPassword });
  },
}));

export default mainStore;
