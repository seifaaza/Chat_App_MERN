import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Tooltip from "@mui/material/Tooltip";
import Badge from "@mui/material/Badge";

import secStore from "../../store/userStore";

export default function NavLinkItem(props) {
  const userStore = secStore();
  return (
    <Tooltip title={props.title}>
      <Link
        to={`/home${props.url}`}
        className="nav-link-item text-white hover:text-sec opacity-50 hover:opacity-100"
      >
        <Badge
          color="secondary"
          badgeContent={1}
          max={999}
          invisible={props.title !== "Chats"}
        >
          {props.url === "/profile" ? userStore.profileIcon : props.icon}
        </Badge>
      </Link>
    </Tooltip>
  );
}

NavLinkItem.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.object,
};
