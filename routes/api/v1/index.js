const express = require('express');

const router = express.Router();
console.log("router loaded v1")

router.use('/students',require('./students'));
router.use('/interviews',require('./interviews'));

module.exports = router;