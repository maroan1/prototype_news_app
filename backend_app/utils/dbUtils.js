const Article = require('../models/newsModel');
const { articles } = require('../data/articles.json');

exports.fillDB = () => {
    try {
        Article.insertMany(articles, (err, articles) => {
            if (err) {
                console.error(err);
            }
        });
    } catch (error) {
       console.error(error); 
    }
};