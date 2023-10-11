import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import PersonAddAlt1RoundedIcon from "@mui/icons-material/PersonAddAlt1Rounded";
import mainStore from "../../store/mainStore";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

export default function AddFriend() {
  const store = mainStore();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <form action="#" method="POST" className="flex flex-col gap-4">
      <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
        Sign Up Here!
      </h1>
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 mt-8">
        <TextField
          id="outlined-basic"
          label="Username"
          placeholder="Your Username"
          variant="outlined"
          className="w-full"
        />
        <TextField
          id="outlined-basic"
          label="Email"
          placeholder="Your Email"
          variant="outlined"
          className="w-full"
        />
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
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
