import React, { useState, useContext } from "react";
// import { useAuth0 } from "@auth0/auth0-react";
import { Button, Popup, Confirm } from "semantic-ui-react";
import { TodoContext, MetadataContext } from "../context";
import { useSaveTodoList } from "./hooks"
const LogoutButton = () => {
  const { userTodoList, hasSaved, useAuth0 } = useContext(MetadataContext);
  const { logout } = useAuth0();
  const { saveUserTodoList } = useSaveTodoList(userTodoList)
  const [checkOpen, setCheckOpen] = useState(false);
  const open = () => setCheckOpen(true);
  const close = () => setCheckOpen(false);

  const logoutUser = () => {
    saveUserTodoList();
    localStorage.removeItem("todoList");
    logout({ returnTo: window.location.origin });
  }
  const CheckforPopup = () =>{
    return (
      hasSaved 
      ? (<Popup content="Don't forget to save your todos" 
        trigger={
          <Button
          onClick={() => logoutUser()}
          variant="danger"
          className="btn-margin"
        >
          Log Out
        </Button>
        }
        /> )
        :<Button
          onClick={() => logoutUser()}
          variant="danger"
          className="btn-margin"
        >
          Log Out
        </Button>
    ) 
  }
  return (
  <CheckforPopup/>    
  )
}
   

export default LogoutButton;
