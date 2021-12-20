const express = require('express');
const router = express.Router();
const testController = require('../controllers/testController');

router.get('/addNewsItem', testController.addNewArticle);

module.exports = router;