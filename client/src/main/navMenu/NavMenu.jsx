import NavButtonItem from "./NavButtonItem";
import { NavData } from "./NavData";
import NavLinkItem from "./NavLinkItem";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useState } from "react";

export default function NavMenu() {
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
      </ul>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4
                bg-mainLight p-16 rounded-xl"
        >
          {modal}
        </Box>
      </Modal>
    </ul>
  );
}
