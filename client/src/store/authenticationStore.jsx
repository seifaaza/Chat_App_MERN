import { create } from "zustand";
import axios from "axios";

const authenticationStore = create((set) => ({
  signupForm: {
    username: sessionStorage.username ? sessionStorage.username : "",
    email: sessionStorage.email ? sessionStorage.email : "",
    password: sessionStorage.password ? sessionStorage.password : "",
  },

  // Form validation
  validationError: true,
  usernameValidation: {
    state: true,
    message: "",
  },
  emailValidation: {
    state: true,
    message: "",
  },
  passwordValidation: {
    state: true,
    message: "",
  },

  validation: (name, value) => {
    const usernameRegex = /^(?=.*[a-zA-Z])(?=.*\d).{6,}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex =
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;
    switch (name) {
      case "username":
        usernameRegex.test(value)
          ? set({
              usernameValidation: {
                state: true,
                message: "",
              },
            })
          : set({
              usernameValidation: {
                state: false,
                message: "Your username must contain at least 6 characters.",
              },
            });
        break;
      case "email":
        emailRegex.test(value)
          ? set({
              emailValidation: {
                state: true,
                message: "",
              },
            })
          : set({
              emailValidation: {
                state: false,
                message: "Your email is invalid.",
              },
            });
        break;
      case "password":
        passwordRegex.test(value)
          ? set({
              passwordValidation: {
                state: true,
                message: "",
              },
            })
          : set({
              passwordValidation: {
                state: false,
                message: "your password is not strong enough",
              },
            });
        break;
    }
  },

  updateSignupForm: (e) => {
    const { validation } = authenticationStore.getState();
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
    validation(name, value);
  },

  generatePassword: async () => {
    const passwordGeneratorUrl =
      "https://www.psswrd.net/api/v1/password/?length=10&lower=1&upper=1&int=1";
    const res = await axios.get(passwordGeneratorUrl);
    const generatedPassword = res.data.password;
    const {
      signupForm: { username, email },
    } = authenticationStore.getState();
    set({
      signupForm: {
        username,
        email,
        password: generatedPassword,
      },
    });
  },

  emailError: false,
  signup: async () => {
    try {
      const { signupForm } = authenticationStore.getState();
      const res = await axios.post("http://localhost:8080/signup", signupForm, {
        withCredentials: true,
      });
      console.log(res);
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
