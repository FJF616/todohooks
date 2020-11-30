import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
const useGetMetadata = () => {
  const { user, getAccessTokenSilently, isLoading, isAuthenticated } = useAuth0();
  const [ userMetadata, setUserMetadata ] = useState(null)
  const metadataKey = "https://everybodyleave.com/claims/user_metadata"
  useEffect(() => {
    const getUserMetadata = async () => {
      try {
        const auth0Id = await user.sub
        const token = await getAccessTokenSilently({
          audience: `https://everybodyleave.auth0.com/api/v2/`,
          scope: "read:current_user update:current_user_metadata",
        })
        const config = {
          method: 'get',
          url: `https://everybodyleave.auth0.com/api/v2/users/${user.sub}?fields=user_metadata&include_fields=true`,
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
        const response = await axios(config)
        const metadata = await response.data
        const { todoList } = await metadata["user_metadata"]
        console.log("todoList: ", todoList)
        await setUserMetadata({todoList})
      }catch (err) {
        console.log("Error fetching user metadata", err)
      }
    }
    getUserMetadata()
  }, [user]);
  return  {
    userMetadata,
    }
  };
export default useGetMetadata;