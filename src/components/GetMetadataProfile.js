import React, { useEffect, useState, useContext } from 'react';
// import { useAuth0 } from '@auth0/auth0-react';
import { MetadataContext } from '../context';

const GetMetadataProfile = () => {
  const { useAuth0 } = useContext(MetadataContext);
  const { user, getIdTokenClaims, getAccessTokenSilently, isAuthenticated } = useAuth0();
  const [ userMetadata, setUserMetadata ] = useState(null)

  useEffect(() => {
    const getUserMetadata = async () => {
      try {
        const claims = await getIdTokenClaims();
        const metadataKey = "https://everybodyleave.com/claims/user_metadata"
        const idToken = claims.__raw;
        setUserMetadata(claims[metadataKey].todoList)
      } catch (err){
        console.log("user is not authenticated", err);
      }
    };
    getUserMetadata();
  }, []);
  return (
      isAuthenticated && (
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <h3>User Metadata</h3>
          {userMetadata ? (
            <pre>{JSON.stringify(userMetadata, null, 2)}</pre>
          ) : (
            "No user metadata defined"
          )}
        </div>
      )
    );
  };
export default GetMetadataProfile;