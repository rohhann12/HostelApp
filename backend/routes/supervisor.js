const {Supervisor,Worker}=require('../db/db')
const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3000; 
const app = express();

// Middleware
app.use(bodyParser.json());
// Supervisor Creation Endpoint
app.post('/supervisors/create', async (req, res) => {
  const { name,hostel,username, password, phoneNum } = req.body;
  const newSupervisor = new Supervisor({ name,hostel,username, password, phoneNum });
  
  newSupervisor.save()
    .then(() => res.status(200).json({ message: 'Supervisor created successfully!', supervisor: newSupervisor }))
    .catch(err => res.status(400).json({ error: 'Error creating supervisor', details: err }));
});
const generateWorkerID = () => {
    const min = 1000; 
    const max = 9999; 
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
app.post('/supervisors/createWorkers',(req,res)=>{
    const { name,hostel,username, password, phoneNum } = req.body;
    const workerId = generateWorkerID();
    const newWorker = new Worker({ name,hostel,username, password, phoneNum, workerId });
    
    newWorker.save()
      
    .then(() => res.status(200).json({ message: 'Worker created successfully!', Worker: newWorker }))

      .catch(err => res.status(400).json({ error: 'Error creating Worker', details: err }));
  });

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
