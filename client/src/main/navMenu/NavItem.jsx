import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Tooltip from "@mui/material/Tooltip";
import Badge from "@mui/material/Badge";

const NavItem = (props) => {
  return (
    <Tooltip title={props.title}>
      <Link
        to={`/home${props.url}`}
        className={` ${
          props.url
            ? " text-white hover:text-sec opacity-50 hover:opacity-100"
            : "cursor-default "
        }`}
      >
        <Badge
          color="secondary"
          badgeContent={1}
          max={999}
          invisible={props.title !== "Chats"}
        >
          {props.icon}
        </Badge>
      </Link>
    </Tooltip>
  );
};

NavItem.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.string,
};

export default NavItem;
