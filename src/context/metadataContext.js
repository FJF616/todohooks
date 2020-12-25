import React, { useState, useEffect, createContext } from "react";
// import { useGetMetadata } from '../components/hooks';
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios'; 

export const MetadataContext = createContext();

  const MetadataProvider = ({ children }) => {
    const { user, getAccessTokenSilently, isAuthenticated } = useAuth0();
    const [ userTodoList, setUserTodoList ] = useState(null);
    const [hasSaved, setHasSaved] = useState(false)
    const checkHasSaved = () => {
      return hasSaved ? setHasSaved(false) : null
    }
    // const metadataKey = "https://everybodyleave.com/claims/user_metadata";
    // const isSaved = user[metadataKey].isSaved
     const getUserMetadata = async () => {
      //  const savedTodos = JSON.parse(localStorage.getItem("todoList"));

       if (isAuthenticated) {

         try {
           const token = await getAccessTokenSilently({
             audience: `https://everybodyleave.auth0.com/api/v2/`,
             scope: "read:current_user update:current_user_metadata",
           });

           const auth0Id = await user.sub;
           const config = {
             method: "get",
             url: `https://everybodyleave.auth0.com/api/v2/users/${auth0Id}?fields=user_metadata&include_fields=true`,
             headers: {
               Authorization: `Bearer ${token}`,
             },
           };
           const response = await axios(config);
           const metadata = await response.data;
           const { todoList } = metadata["user_metadata"];
           console.log("userTodoList: ", todoList);
           if (!Array.isArray(todoList)) {
           localStorage.setItem("todoList", JSON.stringify(""));
           } else {
            localStorage.setItem("todoList", JSON.stringify(todoList))
           }
            await setUserTodoList(todoList);
         } catch (err) {
           console.log("Error fetching user metadata", err);
         }
       }
     };
    useEffect(() => {
      
      getUserMetadata();
    }, [user]);
   
    return ( 
      <MetadataContext.Provider value={{ hasSaved, setHasSaved, checkHasSaved, userTodoList, setUserTodoList, useAuth0, getUserMetadata }}>
        {children}
      </MetadataContext.Provider>
    )
  }
export default MetadataProvider;