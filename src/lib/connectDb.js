import mongoose from "mongoose";
const connection = {};
export default async function ConnectDb() {
  try {
    if (connection.isConnected) {
      console.log("Using Existed Connection");
      return;
    }
    const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    handleError(error);
  }
}
