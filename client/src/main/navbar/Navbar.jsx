import { NavData } from "./NavData";
import NavItem from "./NavItem";
import SettingsIcon from "@mui/icons-material/Settings";
import Avatar from "@mui/material/Avatar";

const Navbar = () => {
  return (
    <ul className="flex flex-col justify-between bg-main px-4 py-8 h-full text-white">
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

export default Navbar;
