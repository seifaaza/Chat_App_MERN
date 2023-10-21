import Avatar from "@mui/material/Avatar";
import AddPhotoAlternateRoundedIcon from "@mui/icons-material/AddPhotoAlternateRounded";
import Button from "@mui/material/Button";
import userStore from "../../store/userStore";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import TextField from "@mui/material/TextField";
import EditRoundedIcon from "@mui/icons-material/EditRounded";

export default function EditProfileModal() {
  const store = userStore();
  return (
    <div
      style={{ height: "75vh" }}
      className="flex flex-col justify-between items-center p-8"
    >
      <div className="relative rounded-full overflow-hidden w-fit hover:opacity-80">
        <Avatar alt="username" image="image" className="profile-image" />
        <span className="edit-profile flex justify-center items-center"></span>
        <AddPhotoAlternateRoundedIcon className="edit-image-icon text-white absolute" />
      </div>
      <TextField
        name="username"
        id="outlined-basic"
        label="Username"
        value="username"
        placeholder="Your username"
        variant="outlined"
        className="w-full"
      />
      <TextField
        name="email"
        id="outlined-basic"
        label="Email"
        value="email"
        placeholder="Your email"
        variant="outlined"
        className="w-full"
      />
      <TextField
        name="bio"
        id="outlined-basic"
        label="Bio"
        value="bio"
        placeholder="Your bio"
        variant="outlined"
        className="w-full"
      />

      <Button
        variant="contained"
        className="btn"
        size="large"
        endIcon={<CheckRoundedIcon />}
      >
        Submit
      </Button>
    </div>
  );
}
