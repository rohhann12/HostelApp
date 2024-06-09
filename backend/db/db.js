const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://rohann:rohan@cluster0.xvl6xp0.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const reqfromUser =new mongoose.Schema({
  roomNo:String,
  startTime:String,
   endTime:String,
   otp:Number
})

const TaskSchema = new mongoose.Schema({
  studentId: String,
  roomNumber: String,
  wing: String,
  floor: String,
  status: String,
  timeSlot: String,
  otp: String,
});
const SupervisorSchema = new mongoose.Schema({
    name: String,
    hostel: String,
    username: String,
    password: String,
    phoneNum: Number,
  });
  const WorkerSchema = new mongoose.Schema({
    name: String,
    hostel: String,
    username: String,
    password: String,
    phoneNum: Number,
    workerId:Number
  });
const AttendanceSchema = new mongoose.Schema({
  workerId: String,
  date: Date,
  status: String,
});

const NotificationSchema = new mongoose.Schema({
  userId: String,
  message: String,
  date: Date,
});

const Notification = mongoose.model('Notification', NotificationSchema);
const Attendance = mongoose.model('Attendance', AttendanceSchema);
const Task = mongoose.model('Task', TaskSchema);
const Supervisor = mongoose.model('Supervisor',SupervisorSchema)
const Worker = mongoose.model('Worker',WorkerSchema)
const Request=mongoose.model('Request',reqfromUser)

module.exports={
    Notification,
    Attendance,
    Task,
    Supervisor,
    Worker,
    Request
}