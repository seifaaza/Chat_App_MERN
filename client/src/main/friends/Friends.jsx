import FriendItems from "./FriendItems";
import IconButton from "@mui/material/IconButton";
import PersonAddAlt1RoundedIcon from "@mui/icons-material/PersonAddAlt1Rounded";
import PropTypes from "prop-types";

export default function Friends(props) {
  return (
    <div className="flex flex-col gap-3 px-8 py-4 ">
      <div className="flex justify-between items-center">
        <h1 className="text-lg text-sec font-light">Your Friends</h1>
        <IconButton
          sx={{ color: "white" }}
          aria-label="back"
          className="text-white hover:text-sec w-fit"
          onClick={props.click}
        >
          <PersonAddAlt1RoundedIcon />
        </IconButton>
      </div>
      <FriendItems />
    </div>
  );
}

Friends.propTypes = {
  click: PropTypes.func,
};
