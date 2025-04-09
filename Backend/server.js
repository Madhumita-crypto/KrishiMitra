const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const courseRoutes = require("./routes/courseRoutes");
const cors = require('cors');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));
app.use('/api/auth', authRoutes);
app.use("/api/courses", courseRoutes);
app.listen(5000, () => {
    console.log("Server running on port http://localhost:5000");
});
