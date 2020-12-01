import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "semantic-ui-react";

const LogoutButton = () => {
  const { logout } = useAuth0();
  const logoutUser = () => {
    localStorage.removeItem("todoList");
    logout({ returnTo: window.location.origin });
  }
  return (
    <Button
      onClick={() => logoutUser()}
      variant="danger"
      className="btn-margin"
    >
      Log Out
    </Button>
  );
};

export default LogoutButton;
