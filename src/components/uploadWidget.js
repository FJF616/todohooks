import React, { useState } from 'react';
import { WidgetLoader, Widget } from 'react-cloudinary-upload-widget';
import axios from 'axios';

const apiKey = process.env.REACT_APP_CLOUDINARY_API_KEY
const preset = process.env.REACT_APP_PRESET
const cloudname = process.env.REACT_APP_CLOUDNAME

 export default function UploadWidget({ user, getAccessTokenSilently }) {
  const [result, setResult] = useState(null)
  const saveUserAvatar= async (image) => {
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
          "picture": image,
          // "todoList": userMetadata,
        }      
    })
}
    try { 
      const updateAvatar = await axios(config)
      const response = await updateAvatar.data;
      console.log("successfully updated avatar", response)
      return await response
    } catch(err) {
        console.log("error updating avatar", err)
        throw new Error(err);
        }
      
  }
  const handleUpload = (res) => {
    if (res.event === 'success') {
        try {
          console.log("downloadLink: ", res.info.secure_url)
          setResult( res.info.secure_url)
          saveUserAvatar(res.info.secure_url)
      } catch (err) {
        console.log("Error updating auth0 profile picture. ", err)
      }
    }
    if (res.event === 'error') {
    console.log("There was an error uploading the image")
    // console.log("response: ", res)
    }
  }
  return (
    <>
    <WidgetLoader/>
      <Widget
        cloudName={"linkstasite"}
        uploadPreset={"qlow9d8n"}
        apiKey={685742124729211}
        folder={'avatars'}
        onSuccess={(res) => handleUpload(res)}
        onFailure={() => console.log("Error uploading image")}
        buttonText={'update pic'}
        eager={"w_125,h_125,c_pad|w_125,h_125,c_crop"}
      />
    </>

  )
}