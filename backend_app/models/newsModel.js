const mongoose = require('mongoose');
const { sendMessage } = require('../websocket');

const articleSchema = new mongoose.Schema({
    title: {
        type: 'string',
        required: true
    },
    description: {
        type: 'string',
        required: true
    },
    date: {
        type: 'date',
        default: Date.now
    },
    content: {
        type: 'string',
        required: true
    },
    author: {
        type: 'string',
        required: true
    },
    archiveDate: 'date'
});

const Article = mongoose.model('Article', articleSchema);

Article.watch().on('change', data => {
    if (data.operationType === 'insert') {
        sendMessage(data.fullDocument);
    }
});
module.exports = Article;