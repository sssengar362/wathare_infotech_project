const mongoose = require("mongoose");
const { Schema } = mongoose;

const connectionString = "mongodb://127.0.0.1:27017/sss";

const Data = mongoose.model(
  "Data",
  new Schema({
    value: { type: Number, required: true },
    timestamp: { type: Date, default: Date.now, required: true },
  })
);

const dummyData = [
  { value: 40, timestamp: new Date("2023-07-27T19:17:27.384Z") },
  { value: 55, timestamp: new Date("2023-07-27T20:30:00.000Z") },
  { value: 68, timestamp: new Date("2023-07-27T21:45:00.000Z") },
];

async function insertDummyData() {
  try {
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await Data.deleteMany({});

    await Data.insertMany(dummyData);

    console.log("Dummy data inserted successfully!");
  } catch (error) {
    console.error("Error inserting dummy data:", error);
  } finally {
    mongoose.disconnect();
  }
}

insertDummyData();
