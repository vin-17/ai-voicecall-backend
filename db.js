import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

const url = 'mongodb://localhost:27017'; // or your MongoDB connection string
const dbName = 'sample_airbnb';

async function connectDB() {
    const client = new MongoClient(process.env.MONGO_URL, { useUnifiedTopology: true });
    await client.connect();
    console.log('Connected to MongoDB');
    return client.db(dbName);
}

export default connectDB;
