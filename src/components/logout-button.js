import React, { useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "semantic-ui-react";
import { TodoContext } from "../context";
import { useSaveTodoList } from "./hooks"
const LogoutButton = () => {
  const { logout } = useAuth0();
  const state = useContext(TodoContext)
  const { todoList } = state
  const { saveUserTodoList } = useSaveTodoList(todoList)
  const logoutUser = () => {
    saveUserTodoList();
    localStorage.setItem("todoList", JSON.stringify([]));
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
