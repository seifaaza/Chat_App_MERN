import { Route, Routes } from "react-router-dom";
import AllChat from "../main/chat/AllChat";
import Friends from "../main/friends/Friends";
import Settings from "../main/settings/Settings";
import Profile from "../main/profile/Profile";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/chats" element={<AllChat />} />
      <Route path="/friends" element={<Friends />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default AppRoutes;
