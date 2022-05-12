const express = require('express');
const router = express.Router();

router.use(require('./movies-router'));


module.exports = router;
