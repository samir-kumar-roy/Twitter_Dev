const LikeService = require('../services/like-service');
const likeService = new LikeService();

const toggleLike = async (req, res) => {
    try {
        const response = await likeService.toggleLike(req.query.modelId, req.query.modelType, req.body.userId);
        return res.status(200).json({
            success: true,
            data: response,
            err: {},
            message: "Successfully toggled like"
        });

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            data: {},
            err: err,
            message: "something went wrong!"
        });
    }
}

module.exports = toggleLike;