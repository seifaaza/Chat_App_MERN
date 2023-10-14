import ForumRoundedIcon from "@mui/icons-material/ForumRounded";
import GroupRoundedIcon from "@mui/icons-material/GroupRounded";
import NotificationsIcon from "@mui/icons-material/Notifications";
import FriendsModal from "../friends/FriendsModal";
import NotificationModal from "../notifications/NotificationsModal";

export const NavData = [
  {
    title: "Chats",
    url: "/chat",
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
    title: "Profile",
    url: "/profile",
  },
];
