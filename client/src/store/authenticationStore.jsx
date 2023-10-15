import create from "zustand";
import axios from "axios";

const authenticationStore = create((set) => ({
  signupForm: {
    username: sessionStorage.username ? sessionStorage.username : "",
    email: sessionStorage.email ? sessionStorage.email : "",
    password: sessionStorage.password ? sessionStorage.password : "",
  },
  updateSignupForm: (e) => {
    const { name, value } = e.target;
    sessionStorage.setItem(name, value);
    set((state) => {
      return {
        signupForm: {
          ...state.signupForm,
          [name]: value,
        },
      };
    });
  },

  emailError: false,
  signup: async () => {
    try {
      const { signupForm } = authenticationStore.getState();
      const res = await axios.post("http://localhost:8080/signup", signupForm, {
        withCredentials: true,
      });
      set({
        signupForm: {
          username: "",
          email: "",
          password: "",
        },
        emailError: false,
      });
    } catch (error) {
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500
        ? set({ emailError: true })
        : set({ emailError: false });
    }
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("password");
  },
}));

export default authenticationStore;
