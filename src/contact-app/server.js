const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const contactRoutes = require("./routes/contactRoutes");
require("dotenv").config(); // For loading environment variables

const app = express();
const port = process.env.PORT || 3000;

const corsOptions = {
  credentials: true,
  origin: ["http://localhost:3000", "http://localhost:3001"], // Whitelist the domains you want to allow
};

app.use(cors(corsOptions));
// Middleware
app.use(bodyParser.json()); // To parse JSON request bodies

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Error connecting to MongoDB:", err));

// Routes
app.use("/contacts", contactRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
