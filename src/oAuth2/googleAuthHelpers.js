const axios = require("axios");
const queryString = require("query-string");

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

const getUserData = async (access_token) => {
  const { data } = await axios({
    url: 'https://www.googleapis.com/oauth2/v2/userinfo',
    method: 'get',
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  }); 
  return data;
};


const stringifiedParams = queryString.stringify({
    client_id: process.env.CLIENT_ID,
    redirect_uri: redirect_uri,
    scope: [
        'https://www.googleapis.com/auth/userinfo.email',
        'https://www.googleapis.com/auth/userinfo.profile',
    ].join(" "),
    response_type: "code",
    access_type: "offline",
    prompt: "consent",
})

const googleLoginUrl = `https://accounts.google.com/o/oauth2/v2/auth?${stringifiedParams}`;

module.exports = {getAccessTokenFromCode, getUserData, googleLoginUrl};