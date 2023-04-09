const CommentRepository = require('../repository/comment-repository');
const TweetRepository = require('../repository/tweet-repository');

class CommentService {
    constructor() {
        this.commentRepository = new CommentRepository();
        this.tweetRepository = new TweetRepository();
    }

    async createComment(modelId, modelType, userId, content) {
        if (modelType == 'Tweet') {
            var commentable = await this.tweetRepository.get(modelId);
        } else if (modelType == 'Comment') {
            var commentable = await this.commentRepository.get(modelId);
            console.log('commentable ', commentable);
        } else {
            throw new Error('Unknown model Type');
        }

        const comment = await this.commentRepository.create({
            content: content,
            userId: userId,
            docModel: modelType,
            commentable: modelId,
            comments: []
        });
        commentable.comments.push(comment);
        await commentable.save();
        return comment;
    }
}

module.exports = CommentService;