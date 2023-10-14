import { Route, Routes } from "react-router-dom";
import Chat from "../main/chat/Chat";
import Friends from "../main/friends/Friends";
import Profile from "../main/profile/Profile";
import Error from "../Error";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/chat" element={<Chat />} />
      <Route path="/friends" element={<Friends />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/home" element={<Error />} />
    </Routes>
  );
};

export default AppRoutes;
