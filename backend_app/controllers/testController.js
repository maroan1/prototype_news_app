const Article = require('../models/newsModel');
const { newArticle } = require('../data/articles.json');

exports.addNewArticle = async (req, res, next) => {
    try {
        const freshNew = await Article.create(newArticle);
        
        res.status(201).json({
            status: 'success',
            data: {
                freshNew
            }
        });
    } catch (error) {
        next(error);
    }

};