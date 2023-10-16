import { create } from "zustand";
import axios from "axios";

const authenticationStore = create((set) => ({
  signupForm: {
    username: sessionStorage.username ? sessionStorage.username : "",
    email: sessionStorage.email ? sessionStorage.email : "",
    password: sessionStorage.password ? sessionStorage.password : "",
  },

  // Form validation
  FormValidation: false,
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
    const passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;
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
    const {
      usernameValidation: { state: usernameState },
      emailValidation: { state: emailState },
      passwordValidation: { state: passwordState },
      signupForm: { username, email, password },
    } = authenticationStore.getState();
    set({
      FormValidation:
        usernameState &&
        emailState &&
        passwordState &&
        username != "" &&
        email != "" &&
        password != "",
    });
  },

  storeSignUpForm: (name, value) => {
    sessionStorage.setItem(name, value);
  },
  emailError: false,
  updateSignupForm: (e) => {
    const { validation, storeSignUpForm } = authenticationStore.getState();
    const { name, value } = e.target;
    storeSignUpForm(name, value);
    set((state) => {
      return {
        signupForm: {
          ...state.signupForm,
          [name]: value,
        },
      };
    });
    set({
      emailError: false,
    });
    validation(name, value);
  },

  generatePassword: async () => {
    const passwordGeneratorUrl = "https://www.dinopass.com/password/strong";
    const res = await fetch(passwordGeneratorUrl);
    const generatedPassword = await res.text();
    const {
      signupForm: { username, email },
      storeSignUpForm,
      validation,
    } = authenticationStore.getState();
    set({
      signupForm: {
        username,
        email,
        password: generatedPassword,
      },
    });
    validation("password", generatedPassword);
    storeSignUpForm("password", generatedPassword);
  },

  signup: async () => {
    try {
      const { signupForm } = authenticationStore.getState();
      const res = await axios.post("/signup", signupForm, {
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
