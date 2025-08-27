import mongoose from "mongoose";

const connectDatabase = async () => {
  await mongoose.connect(process.env.DATABASE);
  console.log(`connected to database`);
};
export default connectDatabase;
