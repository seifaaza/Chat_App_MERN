import MainModal from "../../modals/MainModal";
import NavButtonItem from "./NavButtonItem";
import { NavData } from "./NavData";
import NavLinkItem from "./NavLinkItem";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import authenticationStore from "../../store/authenticationStore";
import { useNavigate } from "react-router-dom";

export default function NavMenu() {
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const handleClose = () => setOpen(false);

  const userAuthenticationStore = authenticationStore();
  const navigate = useNavigate();
  const handleLogout = async () => {
    await userAuthenticationStore.logout();
    navigate("/connection");
  };

  return (
    <ul className="flex m-1 md:m-2 rounded-xl flex-col justify-between bg-mainLight px-4 py-8  text-white">
      <ul className="flex flex-col justify-center items-center gap-8">
        <img
          src="/chat_flow_logo_2.svg"
          alt="Chat Flow logo"
          className=" w-7"
        />
        <hr className="rounded-xl opacity-25" />
        {NavData.map((item, index) =>
          item.url ? (
            <NavLinkItem
              key={index}
              url={item.url}
              title={item.title}
              icon={item.icon}
            />
          ) : (
            <NavButtonItem
              key={index}
              title={item.title}
              icon={item.icon}
              click={() => {
                setOpen(true);
                setModal(item.modal);
              }}
            />
          )
        )}
        <IconButton aria-label="logout" onClick={handleLogout}>
          <LogoutRoundedIcon />
        </IconButton>
      </ul>
      <MainModal modal={modal} open={open} close={handleClose} />
    </ul>
  );
}
