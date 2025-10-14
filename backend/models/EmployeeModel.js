const mongoose = require('mongoose');


const taskSchema = new mongoose.Schema({
  active: {
    type: Boolean,
    required: true,
    default: false
  },
  newTask: {
    type: Boolean,
    required: true,
    default: true
  },
  completed: {
    type: Boolean,
    required: true,
    default: false
  },
  failed: {
    type: Boolean,
    required: true,
    default: false
  },
  taskTitle: {
    type: String,
    required: true
  },
  taskDescription: {
    type: String,
    required: true
  },
  taskDate: {
    type: Date,
    required: true
  },
  category: {
    type: String,
    required: true
   
  }
}, { _id: false }); 


const taskCountsSchema = new mongoose.Schema({
  active: {
    type: Number,
    required: true,
    default: 0
  },
  newTask: {
    type: Number,
    required: true,
    default: 0
  },
  completed: {
    type: Number,
    required: true,
    default: 0
  },
  failed: {
    type: Number,
    required: true,
    default: 0
  }
}, { _id: false });

// Employee schema
const employeeSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  firstName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  taskCounts: {
    type: taskCountsSchema,
    default: () => ({})
  },
  tasks: {
    type: [taskSchema],
    default: []
  }
}, { timestamps: true }); // timestamps: createdAt and updatedAt

const Employee = mongoose.model('Employee', employeeSchema);
module.exports = Employee;
