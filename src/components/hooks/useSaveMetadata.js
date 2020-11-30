import React, { useState, useEffect } from "react";
import { Button } from "semantic-ui-react";
// import { Highlight } from "../components";
import { useAuth0 } from "@auth0/auth0-react";
// import TodoContext from '../context/todoContext';
import axios from 'axios'
export const  useSaveMetadata = async(metaData) => {
  // const context = useContext(TodoContext)
  // const userMetadata = context.todoList
  const [savedMetadata, setSavedMetadata] = useState(metaData)
  const { user, getAccessTokenSilently } = useAuth0();
  const accessToken = await getAccessTokenSilently({
          audience: `https://everybodyleave.auth0.com/api/v2`,
          scope: "read:current_user update:users update:current_user update:user_metadata update:current_user_metadata",
        });
  const auth0Id = user.sub
  const config = {
    method: 'patch',
    url: `https://everybodyleave.auth0.com/api/v2/users/${auth0Id}`,
    headers: {
    "Authorization": `Bearer ${accessToken}`,
    "Content-Type": "application/x-www-form-urlencoded"
  },
  data: savedMetadata
  }
  // const saveMetadata = async (metadata) => {
  //   console.log("todolist: ", context)
 
  // // const metadata = context.todoList 
  const sendUserMetadata = async () => {
    try {
      const updateMetadata = await axios(config)
      const response = await updateMetadata.data
      setSavedMetadata(response);
      console.log("successfully updated metadata", response)
      return await response
    } catch(err) {
      console.log("error updating metadata", err)
      throw new Error(err);
      }
  }
  useEffect(() => {
    sendUserMetadata()
  }, [])
  
  return { 
    sendUserMetadata,
    savedMetadata
  }
    // <Button
    //   onClick={() => saveMetadata(userMetadata)}
    //   variant="primary"
    //   className="btn-margin"
    // >
    //   saveMetadata
    // </Button>

}


export default useSaveMetadata;
