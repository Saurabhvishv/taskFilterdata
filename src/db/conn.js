import mongoose from "mongoose";

const connectDB = async () => {
  try {
      const connectionInstance = await mongoose.connect
      ('mongodb+srv://saurabh:Saurabh707@cluster0.1ospr3d.mongodb.net/Task?retryWrites=true&w=majority')
      console.log(`\n MongoDB connected`);
  } catch (error) {
      console.log("MONGODB connection FAILED ", error);
      process.exit(1)
  }
}
export default connectDB