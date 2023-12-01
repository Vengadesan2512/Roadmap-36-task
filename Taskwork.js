// mongosh

// use zenclass

// create collection 

// use bd and isert values 

// Find all the topics and tasks which are thought in the month of October
db.topic.aggregate([
  {$match: {$expr: {$and: [
          { $gte: [ { $Date: "$october" }, 1] },  
          { $lt: [ { $Date: "$october" }, 30 ] }   
        ]
      }
    }
  },
  {
    $project: {
      _id: 0,  
      topic: "$topic",
      task: "$task",
      teachingDate: "$teachingDate"
    }
  }
])

// Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020

db.companydrive.aggregate([
  {$match: {$expr: {
        $and: [
          { $gte: ["$Date", ("2020-10-15")] },  
          { $lte: ["$Date", ("2020-10-31")] }    
        ]
      }
    }
  },
  {
    $attendence: {
      _id: 0,  
      companyName: "$Name",
      intervie: "$intervie"
    }
  }
])

// Find all the company drives and students who are appeared for the placement.

db.companyDrives.aggregate([
  {
    $lookup: {
      from: "students",           // Name of the students collection
      localField: "driveId",      // Field in the companyDrives collection
      foreignField: "driveId",    // Field in the students collection
      as: "studentsInfo"          // Alias for the joined students information
    }
  },
 {
    $attendence: {
      _id: 0,  
      companyName: "$Name",
      intervie: "$intervie"
    }
  }
])

// Find all the mentors with who has the mentee's count more than 15

db.mentors.find({name:{$mentee:{$gt:20,$lt:100}}}).sort({Task:1})

// Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020

db.attendence.aggreaget({

 $attendence: [
    { attendance: "attendence" }, // Replace 'attendance' with the actual field name for attendance
    { taskSubmitted: { $task } }, // Replace 'taskSubmitted' with the actual field name for task submission status
    { date: { $gte: startDate, $lte: endDate } } // Replace 'date' with the actual field name for the date
  ]



})
