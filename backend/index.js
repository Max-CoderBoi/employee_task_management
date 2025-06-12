require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const employeeRouter = require('./routes/employee');
const taskRouter = require('./routes/tasks'); // add this

const app = express();
const PORT = process.env.PORT || 5000;

console.log("MONGO_URI =", process.env.MONGO_URI);

app.use(cors());
app.use(express.json());

app.use('/api/employees', employeeRouter);
app.use('/api/tasks', taskRouter); // add this

const connect = await mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
