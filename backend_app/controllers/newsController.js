const Article = require('../models/newsModel');

exports.getNews = async (req, res, next) => {
    try {
        const news = await Article.find({ archiveDate: null }).sort({date: 'desc'});

        res.status(200).json({
            status: 'success',
            data: {
                news
            }
        });
    } catch (error) {
        next(error);
    }
};

exports.getArchivedNews = async (req, res, next) => {
    try {
        const archive = await Article.find({ archiveDate: { $ne: null } }).sort({ archiveDate: 'desc'});

        res.status(200).json({
            status: 'success',
            data: {
                news: archive
            }
        });
    } catch (error) {
        next(error);
    }
}

exports.archiveNewsItem = async (req, res, next) => {
    try {
        console.log(req);
        console.log(req.body);
        const { id } = req.body;

        const newsItemArchived = await Article.updateOne({ _id: id }, {archiveDate: Date.now()});
        if (newsItemArchived.matchedCount === 0) {
            throw new Error('Article not found.');
        }
        if (newsItemArchived.modifiedCount === 0) {
            throw new Error('Article not modified')
        }

        res.status(200).json({
            status: 'success'
        })

    } catch (error) {
        next(error);
    }
}

exports.deleteNewsItem = async (req, res, next) => {
    try {
        const newsItemDeleted = await Article.deleteOne({ _id: req.params.id });

        if (newsItemDeleted.deletedCount !== 1) {
            throw new Error('Article not deleted');
        }

        res.status(204).json({ status: 'success' });
    } catch (error) {
        next(error);
    }
    
}


