const LikeRepository = require('../repository/like-repository');
const TweetRepository = require('../repository/tweet-repository');
const Like = require('../models/like');

class LikeService {
    constructor() {
        this.likeRepository = new LikeRepository();
        this.tweetRepository = new TweetRepository();
    }

    async toggleLike(modelId, modelType, userId) {
        try {
            if (modelType == 'Tweet') {
                var likeable = await this.tweetRepository.find(modelId);
            } else if (modelType == 'Comment') {
                // todo
            } else {
                throw new Error('Unknown model Type');
            }

            const exists = await this.likeRepository.findByUserAndLikeable({
                user: userId,
                docModel: modelType,
                likeable: modelId
            });

            if (exists) {
                // pull that likeId from the likes array present in the tweet
                likeable.likes.pull(exists.id);
                // save the change
                await likeable.save();

                await Like.findByIdAndDelete({ _id: exists.id });
                var isRemoved = true;

            } else {
                const newLike = await this.likeRepository.create({
                    user: userId,
                    docModel: modelType,
                    likeable: modelId
                })
                likeable.likes.push(newLike);
                await likeable.save();
                var isRemoved = false;
            }
            return isRemoved;
        } catch (err) {
            console.log('error in like service', err);
        }
    }
}

module.exports = LikeService;