import { create } from "zustand";

const mainStore = create((set) => ({
  loginInterface: true,

  switchLoginInterface: () => {
    const { loginInterface } = mainStore.getState();
    set({ loginInterface: !loginInterface });
  },
}));

export default mainStore;
