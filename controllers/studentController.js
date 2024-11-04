const Student = require('../models/Student');

// Add a new data
exports.createData = async (req, res) => {
  const id = req.body.id;
  const result = await Student.findOne({id:id, deletedAt:""});
  if(result){
    res.status(400).json({ message: 'Error! existing student with same id ' });
  }
  const newStudent = new Student(req.body);

  try {
    await newStudent.save();
    res.status(201).json({ message: 'New student data is created successfully!' });
  } catch (error) {
    res.status(400).json({ message: 'Error creating new student data ' });
  }
};

// Update a data
exports.updateData = async (req, res) => {
    const id = req.params.id;
    console.log(req.body);
    
    try {
        const updatedStudent = await Student.findOneAndUpdate({id:id}, req.body);
        res.json(updatedStudent);
    } catch (error) {
      res.status(400).json({ message: 'Error updating student data ' });
    }
};

// Delete data
exports.deleteData = async (req, res) => {
    const id = req.params.id;
    try {
      await Student.findOneAndUpdate({id:id}, {deletedAt:Date.now()});
      res.status(200).json( { 
        success:true,
        message: 'Data deleted successfully.' } );
    } catch (error) {
      res.status(500).json({ 
        success:false,
        message: 'Error retrieving student' });
    }
};

// Get all data
exports.getLists = async (req, res) => {
    try {
      const students = await Student.find({deletedAt:""});
      res.status(200).json( students );
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving students' });
    }
};

// Get data
exports.getInfo = async (req, res) => {
    const id = req.params.id;
    try {
      const student = await Student.findOne({id:id});
      res.status(200).json( student );
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving student' });
    }
};

