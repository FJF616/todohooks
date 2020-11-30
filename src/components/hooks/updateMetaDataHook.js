
const updateUserMetadata = (auth0Id, metadata) => {
  
  const headers = {
    Authorization: `Bearer ${process.env.REACT_APP_AUTH0_API_TOKEN}`,
    "Content-Type": "application/x-www-form-urlencoded",
  };
  const metaData = [...metadata];
  try {
    const updatedMetadata = await axios.patch(
      `${process.env.AUTH0_AUDIENCE}/${auth0Id}`,
      {
        headers: headers,
      },
      metaData
    );
    const response = await updatedMetadata.data;
    console.log("successfully updated metadata", response);
    return await response;
  } catch (err) {
    console.log("error updating metadata", err);
    throw new Error(err);
  }
};
export default updateUserMetadata;