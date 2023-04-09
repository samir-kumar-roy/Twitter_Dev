const CommentService = require('../services/comment-service');

const commentService = new CommentService();

const createComment = async (req, res) => {
    console.log(req.query.modelId, req.query.modelType, req.body.userId, req.body.content);
    try {
        const response = await commentService.createComment(req.query.modelId, req.query.modelType, req.body.userId, req.body.content);
        return res.status(201).json({
            Success: true,
            Message: "Successfully created a new comment",
            Error: {},
            Data: response
        });
    } catch (err) {
        return res.status(500).json({
            Success: false,
            Message: "comment not created !",
            Error: err,
            Data: {}
        });
    }
}

module.exports = {
    createComment
};