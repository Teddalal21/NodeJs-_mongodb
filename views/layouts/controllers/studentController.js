const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Student = require("../models/student_model")
// const Student = mongoose.model('Student');

router.get('/', (req, res) => {
  res.render('student/addOrEdit', {
    viewTitle: 'Insert Student'
  });
});

router.post('/', (req, res) => {
  if (req.body._id === '') {
    insertRecord(req, res);
  } else {
    updateRecord(req, res);
  }
});

function insertRecord(req, res) {
  const student = new Student();
  student.fullName = req.body.fullName;
  student.email = req.body.email;
  student.mobile = req.body.mobile;
  student.city = req.body.city;
  student.save((err, doc) => {
    if (!err) {
      res.redirect('student/list');
    } else {
      console.log('Error during insert: ' + err);
    }
  });
}

function updateRecord(req, res) {
  Student.findOneAndUpdate(
    { _id: req.body._id },
    req.body,
    { new: true },
    (err, doc) => {
      if (!err) {
        res.redirect('student/list');
      } else {
        console.log('Error during update: ' + err);
      }
    }
  );
}

router.get('/list', (req, res) => {
  Student.find((err, docs) => {
    if (!err) {
      res.render('student/list', {
        list: docs
      });
    } else {
      console.log('Error in retrieval: ' + err);
    }
  });
});

router.get('/:id', (req, res) => {
  Student.findById(req.params.id, (err, doc) => {
    if (!err) {
      res.render('student/addOrEdit', {
        viewTitle: 'updateStudent',
        student: doc
      });
    } else {
      console.log('Error during find: ' + err);
    }
  });
});

router.get('/delete/:id', (req, res) => {
  Student.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {
      res.redirect('/student/list');
    } else {
      console.log('Error during deletion: ' + err);
    }
  });
});

module.exports = router;
