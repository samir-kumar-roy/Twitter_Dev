const { TweetRepository, HashTagsRepository } = require('../repository/index.js');
class TweetService {
    constructor() {
        this.tweetRepository = new TweetRepository;
        this.hashtagsRepository = new HashTagsRepository;
    }

    async create(data) {
        try {
            const content = data.content;
            const tags = content.match(/#[a-zA-Z0-9_]+/g)
                .map((tag) => tag.substring(1).toLowerCase()); // this regex extracts hashtags
            const tweet = await this.tweetRepository.create(data);
            let alreadyPresentTags = await this.hashtagsRepository.findByName(tags);
            let titleOfPresenttags = alreadyPresentTags.map(tags => tags.title);
            let newTags = tags.filter(tag => !titleOfPresenttags.includes(tag));
            newTags = newTags.map(tag => {
                return { title: tag, tweets: [tweet.id] }
            });
            await this.hashtagsRepository.create(newTags);
            alreadyPresentTags.forEach((tag) => {
                tag.tweets.push(tweet.id);
                tag.save();
            });
            return tweet;
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = TweetService;
/*
 this is #first #tweet - I am really #excited
*/