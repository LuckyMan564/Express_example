const { body, validationResult } = require('express-validator');

// Validation rules for adding student data
const fullDataValidation = [
  body('id')
    .notEmpty().withMessage('id is required'),

  body('name')
    .notEmpty().withMessage('name is required'),
  
  body('birth')
    .notEmpty().withMessage('birth is required'),

  body('place')
    .notEmpty().withMessage('place is required'),

  body('phone')
    .notEmpty().withMessage('phone is required')
    .isLength({min:6}).withMessage('phone number must be at least 6 numbers long'),
    // .isNumber().withMessage('phone number must have only numbers')
];

// Validation rules for deleting student data
const dataValidation = [
    body('id')
      .notEmpty().withMessage('id is required')
  ];


// Middleware to check for validation errors
const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = { 
    fullDataValidation, 
    dataValidation,
    validate 
};
