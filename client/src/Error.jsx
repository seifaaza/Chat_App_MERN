import Button from "@mui/material/Button";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="w-full h-screen bg-mainDark text-white flex flex-col gap-16 justify-center items-center">
      <img src="/images/error.svg" className="w-2/4" alt="Error image" />
      <div className="flex flex-col items-center gap-8 ">
        <h1 className="text-2xl text-sec">Maybe you are Lost!</h1>
        <Button
          component={Link}
          to="/"
          size="large"
          className="btn"
          variant="contained"
          startIcon={<ArrowBackRoundedIcon />}
        >
          Back To Home
        </Button>
      </div>
    </div>
  );
};

export default Error;
