const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://rifanabatool:1234@rifana.o8hnmv9.mongodb.net/ecommerceDB")
  .then(() => {
    console.log(" Connected to MongoDB Atlas");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });