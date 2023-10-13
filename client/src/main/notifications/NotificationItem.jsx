import Tooltip from "@mui/material/Tooltip";
import PropTypes from "prop-types";
import IconButton from "@mui/material/IconButton";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";

export default function NotificationItem(props) {
  return (
    <li
      key={props.key}
      className="flex justify-between items-center gap-5 py-5 duration-300"
    >
      <span className="flex gap-6 items-center">
        <img
          className="h-16 w-16 flex-none rounded-full bg-gray-50"
          src={props.imageUrl}
          alt=""
        />
        <span className="flex flex-col gap-2">
          <h1 className="text-sm font-semibold leading-6 text-white">
            {`You have a new friend request from ${props.username}`}
          </h1>
          <p className="text-slate-300">{props.time}</p>
        </span>
      </span>

      <div className="flex items-center">
        <Tooltip title="Confirm">
          <IconButton aria-label="Confirm">
            <CheckRoundedIcon className="text-green-600" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Cancel">
          <IconButton aria-label="Cancel">
            <ClearRoundedIcon className="text-red-600" />
          </IconButton>
        </Tooltip>
      </div>
    </li>
  );
}
NotificationItem.propTypes = {
  key: PropTypes.string,
  imageUrl: PropTypes.string,
  username: PropTypes.string,
  time: PropTypes.string,
  iconClick: PropTypes.func,
};
