import React, { useState, useEffect, createContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios'; 

export const MetadataContext = createContext();
  const MetadataProvider = ({ children }) => {
    const { user, getAccessTokenSilently, isAuthenticated } = useAuth0();
    const [ todoList, setTodoList ] = useState(null);
    const metadataKey = "https://everybodyleave.com/claims/user_metadata";
    useEffect(() => {
      const getUserMetadata = async () => {
        const savedTodos = JSON.parse(localStorage.getItem("todoList"));
        console.log("localStorage", savedTodos);
        if (!Array.isArray(savedTodos) || !savedTodos.length) {
          try {
            const token = await getAccessTokenSilently({
              audience: `https://everybodyleave.auth0.com/api/v2/`,
              scope: "read:current_user update:current_user_metadata",
            });
            const auth0Id = await user.sub
            const config = {
              method: 'get',
              url: `https://everybodyleave.auth0.com/api/v2/users/${auth0Id}?fields=user_metadata&include_fields=true`,
              headers: {
                'Authorization': `Bearer ${token}`
              }
            };
            const response = await axios(config);
            const metadata = await response.data;
            const { todoList } = metadata["user_metadata"];
              console.log("todoList: ", todoList);
              localStorage.setItem("todoList", JSON.stringify(todoList));
              await setTodoList({ todoList });
          } catch (err) {
            console.log("Error fetching user metadata", err);
          } 
        } else {
            await setTodoList({ savedTodos });
          }
      };
      getUserMetadata();
    }, [user]);
   
    return ( 
      <MetadataContext.Provider value={{todoList}}>
        {children}
      </MetadataContext.Provider>
    )
  }
export default MetadataProvider;