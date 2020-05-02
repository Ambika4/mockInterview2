const express = require('express');

const router = express.Router();
console.log("router loaded v1")

router.use('/students',require('./students'));


module.exports = router;