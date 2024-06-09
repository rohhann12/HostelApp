    const express = require('express');
    const bodyParser = require('body-parser');
    const {Request}=require('../db/db')
    const app = express();
    const PORT = 3000;

    app.use(bodyParser.json());

    const OTP = () => {
      const min = 1000; 
      const max = 9999; 
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const isValidTimeSlot = (startTime, endTime) => {
      const [startHour, startMinute] = startTime.split(':').map(Number);
      const [endHour, endMinute] = endTime.split(':').map(Number);

      const startMinutes = startHour * 60 + startMinute;
      const endMinutes = endHour * 60 + endMinute;

      return endMinutes - startMinutes === 15 && endMinutes > startMinutes;
    };

    app.post('/student/createReq', async (req, res) => {
      const { roomNo, startTime, endTime} = req.body;
      const otp=OTP();
      // Validate time slot
      if (!isValidTimeSlot(startTime, endTime)) {
        return res.status(400).json({ error: 'Invalid Time Slot', message: 'Please enter a valid 15-minute time slot.' });
      }

      try {
        const newRequest = await Request.create({ roomNo, startTime, endTime,otp});
        console.log('Student request created successfully and saved to MongoDB:', newRequest);
        res.status(200).json({ message: 'Student request created successfully!', request: newRequest });
      } catch (error) {
        console.error('Error saving student request to MongoDB:', error);
        res.status(500).json({ error: 'Error saving request to the database', details: error.message });
      }
    });
    
    app.get('/student/showRequest',async(req,res)=>{
      const requests= await Request.findOne({})
      try {
        res.json({
          msg:"ok",
          output:requests
        })
      } catch (error) {
          res.json({
            msg:"no",
            output:error
          })
      }
    })
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
