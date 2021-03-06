const express = require('express');
const router = express.Router();
const { 
  getRegister,
  postRegister,
  getLogin,
  postLogin,
  getLogout,
  getProfile,
  updateProfile,
  getForgotPassword,
  putForgotPassword,
  getReset,
  putReset} = require('../controllers/index');
const { asyncErrorHandler, isLoggedIn, isValidPassword, changePassword } = require('../middleware/index');
const passport = require('passport');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Elemental Calculator - Home', style: '/stylesheets/home.css' });
});

/* GET about page. */
router.get('/about', (req, res, next) => {
  res.render('about', {title: 'About', style: '/stylesheets/home.css'});
});

/* GET register page. */
router.get('/register', getRegister);

/* POST register user */
router.post('/register', asyncErrorHandler(postRegister));

/* GET login page */
router.get('/login', getLogin);

/* POST login  */
router.post('/login', asyncErrorHandler(postLogin));

/* GET profile page */
router.get('/profile', isLoggedIn, asyncErrorHandler(getProfile));

/* PUT profile page */
router.put('/profile', 
  isLoggedIn, 
  asyncErrorHandler(isValidPassword),
  asyncErrorHandler(changePassword),
  asyncErrorHandler(updateProfile)
);

/* GET logout  */
router.get('/logout', asyncErrorHandler(getLogout));

/* GET forgot password page */
router.get('/forgot-password', getForgotPassword);

/* PUT forgot password page */
router.put('/forgot-password', asyncErrorHandler(putForgotPassword));

/* GET reset password page */
router.get('/reset/:token', asyncErrorHandler(getReset));

/* PUT reset password page */
router.put('/reset/:token', asyncErrorHandler(putReset));





module.exports = router;
