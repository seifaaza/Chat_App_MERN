import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SendIcon from "@mui/icons-material/Send";
import PropTypes from "prop-types";

export default function AddFriend(props) {
  return (
    <form
      action="#"
      method="POST"
      className="flex flex-col gap-3 px-8 py-4 h-full"
    >
      <IconButton
        sx={{ color: "white" }}
        aria-label="back"
        className="text-white hover:text-sec w-fit"
        onClick={props.click}
      >
        <ArrowBackIcon />
      </IconButton>
      <div className="flex flex-col gap-7 justify-center flex-grow mb-28">
        <h1 className="text-2xl text-center font-bold tracking-tight text-white mb-2">
          Add Friend
        </h1>
        <TextField
          id="outlined-basic"
          label="Username"
          placeholder="Enter Username"
          variant="outlined"
          className="w-full"
        />
        <Button
          className="btn w-full"
          size="large"
          variant="contained"
          endIcon={<SendIcon />}
        >
          Send request
        </Button>
      </div>
    </form>
  );
}

AddFriend.propTypes = {
  click: PropTypes.func,
};
