import ForumRoundedIcon from "@mui/icons-material/ForumRounded";
import GroupRoundedIcon from "@mui/icons-material/GroupRounded";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import Avatar from "@mui/material/Avatar";
import FriendsModal from "../friends/FriendsModal";
import NotificationModal from "../notifications/NotificationModal";

export const NavData = [
  {
    title: "Chats",
    url: "/chats",
    icon: <ForumRoundedIcon />,
  },
  {
    title: "Friends",
    modal: <FriendsModal />,
    icon: <GroupRoundedIcon />,
  },
  {
    title: "Notifications",
    modal: <NotificationModal />,
    icon: <NotificationsIcon />,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: <SettingsIcon />,
  },
  {
    title: "Profile",
    url: "/profile",
    icon: <Avatar />,
  },
];
