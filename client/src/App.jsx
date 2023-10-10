import Settings from "@mui/icons-material/Settings";
import Interface from "./Interface";
import Main from "./main/Main";
import Chat from "./main/chat/Chat";
import Friends from "./main/friends/Friends";
import Navbar from "./main/navbar/Navbar";
import "./style/App.css";
import { Route, Routes } from "react-router-dom";
import Profile from "./main/profile/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Interface />} />
      <Route path="home/" element={<Main />}>
        <Route path="chats" element={<Chat />} />
        <Route path="friends" element={<Friends />} />
        <Route path="settings" element={<Settings />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
  // return <Main />;
}

export default App;
