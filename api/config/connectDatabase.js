import mongoose from "mongoose";
import "dotenv/config";

const connectDatabase = async () => {
  await mongoose.connect(process.env.DATABASE);
  console.log(`connected to database`);
};
export default connectDatabase;
 