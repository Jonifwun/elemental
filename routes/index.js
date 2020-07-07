const express = require('express');
const router = express.Router();
const { postRegister } = require('../controllers/index')

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Elemental Calculator - Home' });
});

/* GET about page. */
router.get('/about', (req, res, next) => {
  res.render('about');
});

/* GET register page. */
router.get('/register', (req, res, next) => {
  res.render('register')
});

/* POST register user */
router.post('/register', postRegister);

/* GET login page */
router.get('/login', (req, res, next) => {
  res.send('GET /login')
});

/* POST login  */
router.post('/login', (req, res, next) => {
  res.send('POST /login')
});

/* GET profile page */
//EDIT FORM IS GOING TO GO IN HERE TOO
router.get('/profile', (req, res, next) => {
  res.send('GET /profile')
});

/* PUT profile page */
router.put('/profile/:user_id', (req, res, next) => {
  res.send('PUT /profile/:user_id')
});

/* POST logout  */
router.post('/logout', (req, res, next) => {
  res.send('POST /logout')
});

/* GET forgot password page */
router.get('/forgot', (req, res, next) => {
  res.send('GET /forgot')
});

/* PUT forgot password page */
router.put('/forgot', (req, res, next) => {
  res.send('PUT /forgot')
});

/* GET reset password page */
router.get('/reset/:token', (req, res, next) => {
  res.send('GET /reset')
});

/* PUT reset password page */
router.put('/reset/:token', (req, res, next) => {
  res.send('PUT /reset')
});





module.exports = router;
