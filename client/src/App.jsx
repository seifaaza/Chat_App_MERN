import Home from "./home/Home";
import Main from "./main/Main";
import Chat from "./main/chat/Chat";
import Friends from "./main/friends/Friends";
import "./style/App.css";
import { Route, Routes } from "react-router-dom";
import Profile from "./main/profile/Profile";
import Connection from "./connection/Connection";
import Error from "./Error";
import RequireAuth from "./middlewares/authenticationMid";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/connection" element={<Connection />} />
      <Route
        path="home/"
        element={
          <RequireAuth>
            <Main />
          </RequireAuth>
        }
      >
        <Route path="chat" element={<Chat />} />
        <Route path="friends" element={<Friends />} />
        <Route path="profile" element={<Profile />} />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
