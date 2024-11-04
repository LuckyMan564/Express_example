const router = require('express').Router();
const { 
    createData, 
    updateData, 
    deleteData, 
    getInfo, 
    getLists } = require("../controllers/studentController");
const { fullDataValidation, dataValidation, validate } = require("../validations/studentValidation");

router.post('/create', fullDataValidation, validate, createData);
router.post('/update:id', fullDataValidation, validate, updateData);
router.delete('/delete:id', deleteData);
router.get('/get_info:id', getInfo);
router.get('/get_lists', getLists);

module.exports = router;
