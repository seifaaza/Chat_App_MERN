import PropTypes from "prop-types";
import Tooltip from "@mui/material/Tooltip";
import Badge from "@mui/material/Badge";

const NavButtonItem = (props) => {
  return (
    <Tooltip title={props.title}>
      <Badge
        color="secondary"
        badgeContent={1}
        max={10}
        invisible={props.title !== "Notifications"}
        className="nav-button-item text-white hover:text-sec opacity-50 hover:opacity-100 cursor-pointer"
        onClick={props.click}
      >
        {props.icon}
      </Badge>
    </Tooltip>
  );
};

NavButtonItem.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.object,
  click: PropTypes.func,
};

export default NavButtonItem;
