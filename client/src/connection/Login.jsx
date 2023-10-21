import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import PersonAddAlt1RoundedIcon from "@mui/icons-material/PersonAddAlt1Rounded";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import mainStore from "../store/mainStore";
import authenticationStore from "../store/authenticationStore";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const store = mainStore();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const userAuthenticationStore = authenticationStore();

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    await userAuthenticationStore.login();
    navigate("/home/chat");
  };

  return (
    <form
      onSubmit={handleLogin}
      className="sm:pl-8 sm:max-w-md flex flex-col gap-4"
    >
      <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
        Welcome Back!
      </h1>
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 mt-8">
        <TextField
          value={userAuthenticationStore.loginForm.loginEmail}
          onChange={userAuthenticationStore.updateLoginForm}
          name="loginEmail"
          id="outlined-basic"
          label="Email"
          placeholder="Your Email Address"
          variant="outlined"
          className="w-full"
        />
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            value={userAuthenticationStore.loginForm.loginPassword}
            onChange={userAuthenticationStore.updateLoginForm}
            name="loginPassword"
            id="outlined-adornment-password"
            label="Password"
            placeholder="Your Password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
          <p
            className={`text-red-500 mt-3 ${
              userAuthenticationStore.loginError ? "block" : "hidden"
            } `}
          >
            The email or password is incorrect. Please retry...
          </p>
        </FormControl>
      </div>
      <div className="mt-8 flex justify-center gap-5">
        <Button
          onClick={store.switchLoginInterface}
          className="btn-outlined w-full"
          size="large"
          variant="outlined"
          endIcon={<PersonAddAlt1RoundedIcon />}
        >
          Sign up
        </Button>
        <Button
          disabled={!userAuthenticationStore.loginFormValidation}
          type="submit"
          className={`btn w-full ${
            !userAuthenticationStore.loginFormValidation ? "opacity-50" : ""
          }`}
          size="large"
          variant="contained"
          endIcon={<LoginRoundedIcon />}
        >
          Login
        </Button>
      </div>
    </form>
  );
}
