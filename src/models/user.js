const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true, // no two users in the user collection
      trim: true, // can have the same email field.
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Email is invalid");
        }
      },
    },
    tokens: [
      {
        // For auth
        token: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

userSchema.virtual('Passenger', {
    "ref": "Passenger",
    "localField": "_id",
    "foreignField": "passenger"
})

userSchema.virtual('Cab', {
    "ref": "Cab",
    "localField": "_id",
    "foreignField": "primaryPassenger"
})

// Overriding the default method to return user
userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();
  delete userObject.password;
  delete userObject.tokens;
  delete userObject.avatar; // not sending the image because the data is too
  // large and slows down the json request.
  return userObject;
};

userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign(
    { _id: user._id.toString() },
    process.env.JWT_SECRET || "abcd1234"
  );
  user.tokens = user.tokens.concat({ token: token });
  await user.save();

  return token;
};

userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email: email });
  if (!user) {
    throw new Error("Unable to log in");
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Unable to log in");
  }
  return user;
};

userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    // hash the user's password only if
    user.password = await bcrypt.hash(user.password, 8); // the password is modified.
  }
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;