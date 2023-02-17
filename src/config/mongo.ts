import "dotenv/config";
import mongoose from "mongoose";

mongoose.set('strictQuery', false);

async function dbConnect(): Promise<void> {
    const DB_URI = <string>process.env.DB_URI;
    await mongoose.connect(DB_URI);
}

export default dbConnect;