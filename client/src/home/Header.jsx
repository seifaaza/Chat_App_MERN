import Button from "@mui/material/Button";
import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";
import { Link } from "react-router-dom";
import mainStore from "../store/mainStore";

export default function Header() {
  const store = mainStore();

  return (
    <div className="pl-8 sm:max-w-lg flex flex-col gap-4">
      <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
        Your Chat, Your Rules.
      </h1>
      <p className="mb-5 text-xl font-light text-slate-300">
        Stay connected with friends and loved ones, share moments, and make
        memories through seamless, secure, and fun chat experiences.
      </p>
      <Button
        component={Link}
        to="/connection"
        // to="/home/chats"
        className="btn w-fit"
        size="large"
        variant="contained"
        endIcon={<RocketLaunchRoundedIcon />}
      >
        Get Started !
      </Button>
    </div>
  );
}
