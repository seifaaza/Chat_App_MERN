import { NavData } from "./NavData";
import NavItem from "./NavItem";
import SettingsIcon from "@mui/icons-material/Settings";
import Avatar from "@mui/material/Avatar";

const NavMenu = () => {
  return (
    <ul className="flex m-1 md:m-2 rounded-xl flex-col justify-between bg-mainLight px-4 py-8  text-white">
      <ul className="flex flex-col justify-center items-center gap-8">
        <img
          src="/chat_flow_logo_2.svg"
          alt="Chat Flow logo"
          className=" w-7"
        />
        <hr className="rounded-xl opacity-25" />
        {NavData.map((item, index) => (
          <NavItem
            key={index}
            url={item.url}
            title={item.title}
            icon={item.icon}
          />
        ))}
      </ul>
      <ul className="flex flex-col justify-center items-center gap-8">
        <NavItem url={"/settings"} title={"Settings"} icon={<SettingsIcon />} />
        <NavItem
          url={"/profile"}
          title={"Profile"}
          icon={<Avatar alt="Remy Sharp" src="https://picsum.photos/200/300" />}
        />
      </ul>
    </ul>
  );
};

export default NavMenu;
