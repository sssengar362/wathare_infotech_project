const mongoose = require("mongoose");

const db = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/sss", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("DB Connected Successfully");
  } catch (error) {
    console.error("DB Connection Failed", error.message);
    process.exit(1);
  }
};

db();
