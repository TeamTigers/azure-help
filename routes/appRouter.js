import express from 'express';
const route = express.Router();

route.get('/', (req, res) => {
  res.render('index');
});

route.get('/signin', (req, res) => {
  res.render('signin');
});

route.get('/signup', (req, res) => {
  res.render('signup');
});

route.get('/patient', (req, res) => {
  res.render('patient');
});

route.get('/d_patientList', (req, res) => {
  res.render('d_patientList');
});

route.get('/p_appointment', (req, res) => {
  res.render('p_appointment');
});

route.get('/video_calling', (req, res) => {
  res.render('video_calling');
});

export default route;  