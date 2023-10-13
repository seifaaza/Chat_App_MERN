import { Route, Routes } from "react-router-dom";
import Chat from "../main/chat/Chat";
import Friends from "../main/friends/Friends";
import Profile from "../main/profile/Profile";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/chat" element={<Chat />} />
      <Route path="/friends" element={<Friends />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default AppRoutes;
