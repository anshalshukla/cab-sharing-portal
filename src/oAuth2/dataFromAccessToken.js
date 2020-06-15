const axios = require("axios");

const getGoogleDriveFiles = async (access_token) => {
  const { data } = await axios({
    url: 'https://www.googleapis.com/oauth2/v2/userinfo',
    method: 'get',
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  }); 
  return data;
};

module.exports = getGoogleDriveFiles;