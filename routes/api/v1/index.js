const express = require('express');

const router = express.Router();
console.log("router loaded v1")

router.use('/students',require('./students'));
router.use('/interviews',require('./interviews'));
router.use('/employees',require('./employees'));

module.exports = router;