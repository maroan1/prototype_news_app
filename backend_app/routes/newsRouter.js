const express = require('express');
const router = express.Router();
const newsController = require('../controllers/newsController');

router.get('/', newsController.getNews);
router.get('/archived', newsController.getArchivedNews);
router.post('/archive', newsController.archiveNewsItem);
router.delete('/:id', newsController.deleteNewsItem);

module.exports = router;