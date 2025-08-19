import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        "https://i2.seadn.io/base/0x7e72abdf47bd21bf0ed6ea8cb8dad60579f3fb50/cf0072d053df3b408fe3c597280fec/39cf0072d053df3b408fe3c597280fec.png?w=350",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);

export default User;
