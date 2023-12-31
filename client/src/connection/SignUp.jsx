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
import SyncLockRoundedIcon from "@mui/icons-material/SyncLockRounded";
import Tooltip from "@mui/material/Tooltip";
import ReCAPTCHA from "react-google-recaptcha";
import mainStore from "../store/mainStore";
import authenticationStore from "../store/authenticationStore";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const store = mainStore();
  const userAuthenticationStore = authenticationStore();

  const navigate = useNavigate();
  const handleSignUp = async (e) => {
    e.preventDefault();
    await userAuthenticationStore.signup();
    navigate("/home/chat");
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
          error={!userAuthenticationStore.usernameValidation.state}
          value={userAuthenticationStore.signupForm.signupUsername}
          onChange={userAuthenticationStore.updateSignupForm}
          name="signupUsername"
          id="outlined-basic"
          label={`${
            !userAuthenticationStore.usernameValidation.state
              ? userAuthenticationStore.usernameValidation.message
              : "Username"
          }`}
          placeholder="Your Username"
          variant="outlined"
          className={`w-full ${
            userAuthenticationStore.signupForm.signupUsername != "" &&
            !userAuthenticationStore.usernameValidation.state
              ? "error"
              : ""
          } `}
          required
          autoFocus
        />
        <TextField
          error={
            !userAuthenticationStore.emailValidation.state ||
            userAuthenticationStore.emailError
          }
          helperText={
            userAuthenticationStore.emailError
              ? "This Email is already exists"
              : ""
          }
          value={userAuthenticationStore.signupForm.signupEmail}
          onChange={userAuthenticationStore.updateSignupForm}
          name="signupEmail"
          type="text"
          id="outlined-basic"
          label={`${
            userAuthenticationStore.emailError
              ? userAuthenticationStore.emailValidation.message
              : "Email"
          }`}
          placeholder="Your Email"
          variant="outlined"
          className={`w-full ${
            (userAuthenticationStore.signupForm.signupEmail != "" &&
              !userAuthenticationStore.emailValidation.state) ||
            userAuthenticationStore.emailError
              ? "error"
              : ""
          } `}
          required
        />
        <FormControl variant="outlined">
          <InputLabel
            htmlFor="outlined-adornment-password"
            error={!userAuthenticationStore.passwordValidation.state}
            required
          >
            <span
              className={`${
                userAuthenticationStore.signupForm.signupPassword != "" &&
                !userAuthenticationStore.passwordValidation.state
                  ? "text-error"
                  : ""
              }`}
            >
              {!userAuthenticationStore.passwordValidation.state
                ? userAuthenticationStore.passwordValidation.message
                : "Password"}
            </span>
          </InputLabel>
          <OutlinedInput
            value={userAuthenticationStore.signupForm.signupPassword}
            onChange={userAuthenticationStore.updateSignupForm}
            name="signupPassword"
            id="outlined-adornment-password"
            label={`${
              !userAuthenticationStore.passwordValidation.state
                ? userAuthenticationStore.passwordValidation.message
                : "Password"
            }`}
            placeholder="Your Password"
            type={store.showPassword ? "text" : "password"}
            className={`w-full ${
              userAuthenticationStore.signupForm.signupPassword != "" &&
              !userAuthenticationStore.passwordValidation.state
                ? "error"
                : ""
            } relative `}
            style={{ paddingRight: "65px" }}
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
            required
          />
          <Tooltip title="Generate Password">
            <div
              style={{ borderRadius: "0 4px 4px 0" }}
              className="h-full w-12 bg-sec absolute right-0 flex justify-center items-center
            hover:opacity-80 cursor-pointer transition"
              onClick={userAuthenticationStore.generatePassword}
            >
              <SyncLockRoundedIcon />
            </div>
          </Tooltip>
        </FormControl>
        <ReCAPTCHA
          style={{ width: "100%" }}
          className="w-full bg-white rounded-lg"
          sitekey={import.meta.env.VITE_SOME_KEY}
          // onChange={userAuthenticationStore.captchaChange}
        />
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
          disabled={!userAuthenticationStore.signupFormValidation}
          type="submit"
          className={`btn w-full ${
            !userAuthenticationStore.signupFormValidation ? "opacity-50" : ""
          }`}
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
