const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');

const { isLoggedIn } = require('../middlewares/isLoggedIn');
const {getBudget, setBudget} = require('../controllers/budgetControls');

router.get('/home/:username/budget', isLoggedIn, getBudget);
router.post('/home/:username/budget', isLoggedIn, setBudget);

module.exports = router;