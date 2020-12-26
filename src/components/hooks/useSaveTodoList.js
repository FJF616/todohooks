import { useState,  useContext } from "react";
// import { Button } from "semantic-ui-react";
// import { Highlight } from "../components";
// import { useAuth0 } from "@auth0/auth0-react";
import { MetadataContext } from '../../context';
import axios from 'axios'

export const  useSaveTodoList = (currentTodoList) => {
  const { useAuth0 } = useContext(MetadataContext)
  // const userMetadata = context.todoList
  const [savedMetadata, setSavedMetadata] = useState("")
  const { user, getAccessTokenSilently } = useAuth0();
 
  const updateLocalStorage = () => {
    localStorage.removeItem("todoList");
    localStorage.setItem("todoList", JSON.stringify(currentTodoList))
  }
  const saveUserTodoList = async () => {
    const accessToken = await getAccessTokenSilently({
      audience: `https://everybodyleave.auth0.com/api/v2/`,
      scope: "read:current_user update:current_user_metadata",
      });
    const auth0Id = await user.sub;
    const config = {
      method: 'patch',
      url: `https://everybodyleave.auth0.com/api/v2/users/${auth0Id}`,
      headers: {
      "Authorization": `Bearer ${accessToken}`,
      "Content-Type": "application/json"
    },
    data: JSON.stringify({
      "user_metadata": {
        "todoList": currentTodoList,
        "isSaved": true
      }
    })
}
    try { 
      const updateMetadata = await axios(config)
      const response = await updateMetadata.data;
      updateLocalStorage();
      setSavedMetadata(response);
      console.log("successfully updated metadata", response)
      return await response
    } catch(err) {
        console.log("error updating metadata", err)
        // throw new Error(err);
        }
    updateLocalStorage()
  }
  // useEffect(() => {
  //   saveUserTodoList()
  // }, [])
  
  return { 
    saveUserTodoList,
    savedMetadata,
    updateLocalStorage
  }
}
export default useSaveTodoList;
