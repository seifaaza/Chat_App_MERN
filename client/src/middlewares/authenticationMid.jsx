import { useEffect } from "react";
import Progress from "../Progress";
import Main from "../main/Main";
import Connection from "../connection/Connection";
import authenticationStore from "../store/authenticationStore";

function RequireAuth(props) {
  const userAuthenticationStore = authenticationStore();

  useEffect(() => {
    if (userAuthenticationStore.loggedIn === null) {
      userAuthenticationStore.checkAuth();
    }
  }, []);

  if (userAuthenticationStore.loggedIn === true) {
    return <Main />;
  }

  if (userAuthenticationStore.loggedIn === null) {
    return <Progress />;
  }

  if (userAuthenticationStore.loggedIn === false) {
    return <Connection />;
  }

  return <div>{props.children}</div>;
}

export default RequireAuth;
