import React, { useEffect, useState, useContext } from 'react';
import { InputFile } from 'semantic-ui-react-input-file';
import { Image, List } from 'semantic-ui-react';
import axios from 'axios';
import UploadWidget from './uploadWidget';
// import { useAuth0 } from '@auth0/auth0-react';
import uuid from 'uuid';
import imageToBase64 from 'js-img2base64'
import { MetadataContext } from '../context';

const GetMetadataProfile = () => {
  const { useAuth0, avatar, setAvatar } = useContext(MetadataContext);
  const { user, getIdTokenClaims, getAccessTokenSilently, isAuthenticated } = useAuth0();
  const [ userMetadata, setUserMetadata ] = useState(null)
  const [image64, setImage64] = useState("");
  const [response, setResponse] = useState("");

  
  // const handleSubmit = (e) => {
  //   const file = e.target.files[0];
  //   imageToBase64(file)
  //     .then(imageString => {
  //       setImage64(imageString);
  //       saveUserAvatar(imageString);
  //     })
  //     .catch((error) => console.log("Error converting image to base64 ", error))
  //   console.log("base64: ", image64)
  // }
  useEffect(() => {
    const getUserMetadata = async () => {
      try {
        const claims = await getIdTokenClaims();
        const metadataKey = "https://everybodyleave.com/claims/user_metadata"
        // const idToken = claims.__raw;
        setUserMetadata(claims[metadataKey].todoList)
        // setAvatar(claims[metadataKey].picture)
      } catch (err){
        console.log("user is not authenticated", err);
      }
    };
    getUserMetadata();
  }, [user, avatar]);
  return (
    isAuthenticated && (
      <div>
      <Image size="small" src={avatar ? avatar: user.picture} alt={user.name} />
        {/* <img style={{width: '120px', height: '120px'}} src={avatar ? avatar: user.picture} alt={user.name} /> */}
        <br/>
        <UploadWidget user={user} getAccessTokenSilently={getAccessTokenSilently} />
          {/* <InputFile input={{ id: uuid.v4(), onChange: handleSubmit }} /> */}
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <h3>Saved Todos</h3>
         {userMetadata ? (
            <pre>{JSON.stringify(userMetadata, null, 2)}</pre>
        ) : (
          "There are no Todos saved"
        )} 
      </div>
    )
  );
  };
export default GetMetadataProfile;