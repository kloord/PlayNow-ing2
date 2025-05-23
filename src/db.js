import mongoose from "mongoose"

export const connectDB = async () => {
  try {
    await mongoose.connect("");
    console.log("MongoDB esta conectado");
  } catch (error) {
    console.error(error);
  }
};