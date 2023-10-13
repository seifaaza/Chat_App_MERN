import Avatar from "@mui/material/Avatar";
import PropTypes from "prop-types";

export default function UserBar(props) {
  return (
    <div className="flex items-center gap-4 w-full py-4 px-6 bg-mainDark rounded-t-lg">
      <Avatar alt={props.username} src={props.img} />
      <h1 className="text-2xl text-white">{props.username}</h1>
    </div>
  );
}

UserBar.propTypes = {
  username: PropTypes.string,
  img: PropTypes.string,
};
