# BPPC Cabsharing Portal
The Cabsharing portal is a platform that aims to make sharing cabs among BITSians easier. Just give a few details about your travel plans and we will find the best group of people you can share a cab with. 

# How it Works
Suppose X has a travel plan that looks somewhat like this: 
```
From Pilani to Jaipur 
On 26th June
Leave between 4-6pm
```

He logs on to the portal and provides the above details. Then, the algorithm tries to find a group that can acommodate X without anyone having to change their travel plan. If such a group cannot be found, X is put in a waiting list. We wait till there's another student Y who has a travel plan similar to that of X.Then, X and Y are grouped together. This way, we greedily match students in a group using their travel plans such that no one has to compromise on their travel plan. 

# The Tech

The server uses a **MongoDB database** exposed through a **GraphQL API**. 

The frontend is built using **React**.

# Contributing 

If you are BITsian and would like to contribute to this project, come say hi on ACM's Slack. You can find us on the #cabsharing_portal_dev channel. 
