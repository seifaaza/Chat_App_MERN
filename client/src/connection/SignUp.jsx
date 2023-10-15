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

import mainStore from "../store/mainStore";
import authenticationStore from "../store/authenticationStore";

export default function SignUp() {
  const store = mainStore();
  const userAuthenticationStore = authenticationStore();

  const handleSignUp = async (e) => {
    e.preventDefault();
    await userAuthenticationStore.signup();
  };

  return (
    <form
      onSubmit={handleSignUp}
      className="sm:pl-8 sm:max-w-md flex flex-col gap-4"
    >
      <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
        Sign Up Here!
      </h1>
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 mt-8">
        <TextField
          value={userAuthenticationStore.signupForm.username}
          onChange={userAuthenticationStore.updateSignupForm}
          name="username"
          id="outlined-basic"
          label="Username"
          placeholder="Your Username"
          variant="outlined"
          className="w-full"
          required
        />
        <TextField
          error={userAuthenticationStore.emailError}
          helperText={
            userAuthenticationStore.emailError ? "Email already exists" : ""
          }
          value={userAuthenticationStore.signupForm.email}
          onChange={userAuthenticationStore.updateSignupForm}
          name="email"
          type="email"
          id="outlined-basic"
          label="Email"
          placeholder="Your Email"
          variant="outlined"
          className={`w-full ${
            userAuthenticationStore.emailError ? "error" : ""
          }`}
          required
        />
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            value={userAuthenticationStore.signupForm.password}
            onChange={userAuthenticationStore.updateSignupForm}
            name="password"
            id="outlined-adornment-password"
            label="Password"
            placeholder="Your Password"
            type={store.showPassword ? "text" : "password"}
            required
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={store.handleClickShowPassword}
                  edge="end"
                >
                  {store.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </div>

      <div className="mt-8 flex justify-center gap-5">
        <Button
          onClick={store.switchLoginInterface}
          className="btn-outlined w-full"
          size="large"
          variant="outlined"
          endIcon={<LoginRoundedIcon />}
        >
          Login
        </Button>
        <Button
          type="submit"
          className="btn w-full"
          size="large"
          variant="contained"
          endIcon={<PersonAddAlt1RoundedIcon />}
        >
          Sign up
        </Button>
      </div>
    </form>
  );
}
