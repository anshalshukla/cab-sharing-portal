const express = require("express");
const router = new express.Router();
const googleLoginUrl = require("./googleAuthentication");
const getAccessTokenFromCode = require("./authHelpers");
const getGoogleDriveFiles = require("./dataFromAccessToken");
const User = require("../models/user");


router.get("/google-login", async (req, res) => {
    await res.redirect(googleLoginUrl);
});

router.get("/authenticate/google", async (req, res) => {
    const code = await (req.query.code);
    const access_token = await getAccessTokenFromCode(code);
    const data = await getGoogleDriveFiles(access_token);

    const user = await User.find({email: data.email});
    
    if (user.length === 0) {
        const user = new User({
            name: data.name,
            email: data.email,
            password: data.id
        })
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send(token)
    } else {
        const token = await user[0].generateAuthToken()
        console.log(token)
        res.status(200).send(token)
    }
})

module.exports = router

