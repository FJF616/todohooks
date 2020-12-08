import React, { useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "semantic-ui-react";
import { TodoContext, MetadataContext } from "../context";
import { useSaveTodoList } from "./hooks"
const LogoutButton = () => {
  const { logout } = useAuth0();
  const { userTodoList } = useContext(MetadataContext);
  const { saveUserTodoList } = useSaveTodoList(userTodoList)
  const logoutUser = () => {
    saveUserTodoList();
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
