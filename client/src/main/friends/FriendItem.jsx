import PropTypes from "prop-types";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";

export default function FriendItem(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState();

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };
  return (
    <li
      key={props.key}
      className="flex justify-between gap-x-6 py-5 hover:brightness-150 duration-300
       cursor-pointer w-72"
    >
      <span className="flex items-center gap-5">
        <img
          className="h-12 w-12 flex-none rounded-full bg-gray-50"
          src={props.imageUrl}
          alt=""
        />
        <p className="text-lg font-semibold leading-6 text-white">
          {props.username}
        </p>
      </span>
      <IconButton onClick={props.iconClick}>
        <MoreVertRoundedIcon className="text-white" />
      </IconButton>
    </li>
  );
}
FriendItem.propTypes = {
  key: PropTypes.string,
  imageUrl: PropTypes.string,
  username: PropTypes.string,
  message: PropTypes.string,
  lastMessageTime: PropTypes.string,
  iconClick: PropTypes.string,
};
