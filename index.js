import express from 'express';
import connectDB from './db.js'; // Assuming your db.js is in the same directory

const app = express();

app.use(express.json());

app.get('/data', async (req, res) => {
    const db = await connectDB();
    const collection = db.collection('listingsAndReviews');

    const batchSize = 100;
    const page = parseInt(req.query.page) || 0; // If no page query parameter is provided, default to 0

    // Calculate the number of documents to skip based on the page number
    const skip = page * batchSize;

    // Project only _id and name fields
    const projection = { _id: 1, name: 1 };

    const data = await collection.find().project(projection).skip(skip).limit(batchSize).toArray();
    res.json(data);
});

app.get('/', function(req, res) {
    res.send('Hello, World!');
  });


app.listen(5000, () => {
    console.log("\n-------------------");
    console.log('\nServer is running on port 5000\n');
    console.log("-------------------\n");
});
