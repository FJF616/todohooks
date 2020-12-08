import React, { useEffect, useState, useContext } from 'react';
import { InputFile } from 'semantic-ui-react-input-file';
// import { useAuth0 } from '@auth0/auth0-react';
import uuid from 'uuid';
import imageToBase64 from 'js-img2base64'
import { MetadataContext } from '../context';

const GetMetadataProfile = () => {
  const { useAuth0 } = useContext(MetadataContext);
  const { user, getIdTokenClaims, isAuthenticated } = useAuth0();
  const [ userMetadata, setUserMetadata ] = useState(null)
  const [image64, setImage64] = useState("");

  const handleSubmit = (e) => {
    const file = e.target.files[0];
    imageToBase64(file)
      .then(imageString => setImage64(imageString))
      .catch((error) => console.log("Error converting image to base64 ", error))
    console.log("base64: ", image64)
  }
  useEffect(() => {
    const getUserMetadata = async () => {
      try {
        const claims = await getIdTokenClaims();
        const metadataKey = "https://everybodyleave.com/claims/user_metadata"
        // const idToken = claims.__raw;
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
        <br/>
          <InputFile input={{ id: uuid.v4(), onChange: handleSubmit }} />
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