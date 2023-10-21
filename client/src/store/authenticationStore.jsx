import { create } from "zustand";
import axios from "axios";

const authenticationStore = create((set) => ({
  userId: null,
  //  user: null,
  //  userId: null

  // ***************************** Check auth ************************************
  loggedIn: null,
  checkAuth: async () => {
    try {
      const res = await axios("/check-auth", { withCredentials: true });
      set({
        loggedIn: true,
        //  user: res.data.user,
        //  userId: res.data.user._id
      });
      console.log(res);
    } catch (err) {
      set({ loggedIn: false });
    }
  },

  // ***************************** Sign Up ************************************
  signupForm: {
    signupUsername: sessionStorage.signupUsername
      ? sessionStorage.signupUsername
      : "",
    signupEmail: sessionStorage.signupEmail ? sessionStorage.signupEmail : "",
    signupPassword: sessionStorage.signupPassword
      ? sessionStorage.signupPassword
      : "",
  },
  // Form validation
  signupFormValidation: false,
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
  emailError: false,

  validation: (name, value) => {
    const usernameRegex = /^(?=.*[a-zA-Z])(?=.*\d).{6,}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;
    switch (name) {
      case "signupUsername":
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
      case "signupEmail":
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
      case "signupPassword":
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

  storeSignUpForm: (name, value) => {
    sessionStorage.setItem(name, value);
  },

  checkSignupFormErrors: () => {
    const {
      usernameValidation: { state: usernameState },
      emailValidation: { state: emailState },
      passwordValidation: { state: passwordState },
      signupForm: { signupUsername, signupEmail, signupPassword },
      // captchaValidation,
    } = authenticationStore.getState();
    set({
      signupFormValidation:
        usernameState &&
        emailState &&
        passwordState &&
        signupUsername != "" &&
        signupEmail != "" &&
        signupPassword != "",
      // && captchaValidation,
    });
  },

  updateSignupForm: (e) => {
    const { storeSignUpForm, validation, checkSignupFormErrors } =
      authenticationStore.getState();
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
    checkSignupFormErrors();
  },

  generatePassword: async () => {
    const passwordGeneratorUrl = "https://www.dinopass.com/password/strong";
    const res = await fetch(passwordGeneratorUrl);
    const generatedPassword = await res.text();
    const {
      signupForm: { signupUsername, signupEmail },
      storeSignUpForm,
      validation,
      checkSignupFormErrors,
    } = authenticationStore.getState();
    set({
      signupForm: {
        signupUsername,
        signupEmail,
        signupPassword: generatedPassword,
      },
    });
    validation("signupPassword", generatedPassword);
    storeSignUpForm("signupPassword", generatedPassword);
    checkSignupFormErrors();
  },

  signup: async () => {
    try {
      const {
        signupForm: { signupUsername, signupEmail, signupPassword },
      } = authenticationStore.getState();
      const signupData = {
        username: signupUsername,
        email: signupEmail,
        password: signupPassword,
      };
      const res = await axios.post("/signup", signupData, {
        withCredentials: true,
      });
      console.log(res);
      set({
        signupForm: {
          signupUsername: "",
          signupEmail: "",
          signupPassword: "",
        },
        loggedIn: true,
        emailError: false,
      });
    } catch (error) {
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500
        ? set({ emailError: true })
        : set({ emailError: false });
    }
    sessionStorage.removeItem("signupUsername");
    sessionStorage.removeItem("signupEmail");
    sessionStorage.removeItem("signupPassword");
  },

  // ******************************* Login ************************************
  loginForm: {
    loginEmail: sessionStorage.loginEmail ? sessionStorage.loginEmail : "",
    loginPassword: sessionStorage.loginPassword
      ? sessionStorage.loginPassword
      : "",
  },
  // Form validation
  loginFormValidation: false,
  loginError: false,

  storeLoginForm: (name, value) => {
    sessionStorage.setItem(name, value);
  },

  checkLoginFormErrors: () => {
    const {
      loginForm: { loginEmail, loginPassword },
      // captchaValidation,
    } = authenticationStore.getState();
    set({
      loginFormValidation: loginEmail != "" && loginPassword != "",
      // && captchaValidation,
    });
  },

  updateLoginForm: (e) => {
    const { storeLoginForm, checkLoginFormErrors } =
      authenticationStore.getState();
    const { name, value } = e.target;
    storeLoginForm(name, value);
    set((state) => {
      return {
        loginForm: {
          ...state.loginForm,
          [name]: value,
        },
      };
    });
    set({
      loginError: false,
    });
    checkLoginFormErrors();
  },

  login: async () => {
    try {
      const {
        loginForm: { loginEmail, loginPassword },
      } = authenticationStore.getState();
      const loginData = {
        email: loginEmail,
        password: loginPassword,
      };
      const res = await axios.post("/login", loginData, {
        withCredentials: true,
      });
      console.log(res);
      set({
        loginForm: {
          loginEmail: "",
          loginPassword: "",
        },
        loggedIn: true,
        loginError: false,
      });
    } catch (error) {
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500
        ? set({ loginError: true })
        : set({ loginError: false });
    }
    sessionStorage.removeItem("loginEmail");
    sessionStorage.removeItem("loginPassword");
  },

  // ******************************* Logout ************************************
  logout: async () => {
    try {
      await axios.get("/logout", { withCredentials: true });
      set({ loggedIn: false });
    } catch (error) {
      console.log(error);
    }
  },
}));

export default authenticationStore;
