import FriendItem from "./FriendItem";
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import { useState } from "react";

export default function FriendItems() {
  const people = [
    {
      username: "jaafar",
      imageUrl: "https://picsum.photos/200/300",
      role: "Co-Founder / CEO",
      message: "lorem ipsum dolor sit amet, consectetur",
      lastMessageTime: "3h",
    },
    {
      username: "jaafar",
      imageUrl: "https://picsum.photos/200/300",
      role: "Co-Founder / CEO",
      message: "lorem ipsum dolor sit amet, consectetur",
      lastMessageTime: "3h",
    },
    {
      username: "jaafar",
      imageUrl: "https://picsum.photos/200/300",
      role: "Co-Founder / CEO",
      message: "lorem ipsum dolor sit amet, consectetur",
      lastMessageTime: "3h",
    },
    {
      username: "jaafar",
      imageUrl: "https://picsum.photos/200/300",
      role: "Co-Founder / CEO",
      message: "lorem ipsum dolor sit amet, consectetur",
      lastMessageTime: "3h",
    },
    {
      username: "jaafar",
      imageUrl: "https://picsum.photos/200/300",
      role: "Co-Founder / CEO",
      message: "lorem ipsum dolor sit amet, consectetur",
      lastMessageTime: "3h",
    },
    {
      username: "jaafar",
      imageUrl: "https://picsum.photos/200/300",
      role: "Co-Founder / CEO",
      message: "lorem ipsum dolor sit amet, consectetur",
      lastMessageTime: "3h",
    },
    {
      username: "jaafar",
      imageUrl: "https://picsum.photos/200/300",
      role: "Co-Founder / CEO",
      message: "lorem ipsum dolor sit amet, consectetur",
      lastMessageTime: "3h",
    },
    {
      username: "jaafar",
      imageUrl: "https://picsum.photos/200/300",
      role: "Co-Founder / CEO",
      message: "lorem ipsum dolor sit amet, consectetur",
      lastMessageTime: "3h",
    },
    {
      username: "jaafar",
      imageUrl: "https://picsum.photos/200/300",
      role: "Co-Founder / CEO",
      message: "lorem ipsum dolor sit amet, consectetur",
      lastMessageTime: "3h",
    },
    {
      username: "jaafar",
      imageUrl: "https://picsum.photos/200/300",
      role: "Co-Founder / CEO",
      message: "lorem ipsum dolor sit amet, consectetur",
      lastMessageTime: "3h",
    },
  ];

  const usernameCapitalize = (username) =>
    username.charAt(0).toUpperCase() + username.slice(1);

  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState();

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  return (
    <ul role="list" className="w-full divide-y divide-gray-100">
      {people.map((person, index) => (
        <>
          <FriendItem
            key={index}
            imageUrl={person.imageUrl}
            username={usernameCapitalize(person.username)}
            message={person.message}
            lastMessageTime={person.lastMessageTime}
            iconClick={handleClick("bottom-end")}
          />
          <hr className="line" />
        </>
      ))}
      <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <p>Settings</p>
          </Fade>
        )}
      </Popper>
    </ul>
  );
}
