const axios = require("axios");

const redirect_uri = "http://localhost:3000/authenticate/google";

const getAccessTokenFromCode = async (code) => {
  try{
    const { data } = await axios({
      url: `https://oauth2.googleapis.com/token`,
      method: 'post',
      data: {
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        redirect_uri: redirect_uri,
        grant_type: 'authorization_code',
        code,
      },
    });
    return data.access_token;
  } catch (e) {
    throw new Error("Unable to fetch access token."); 
  }
};

module.exports = getAccessTokenFromCode;