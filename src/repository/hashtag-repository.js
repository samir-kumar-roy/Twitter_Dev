const Hashtag = require('../models/hashTags');

class HashTagsRepository {

    async create(data) {
        try {
            const hashtags = await Hashtag.create(data);
            return hashtags;
        } catch (error) {
            console.log(error);
        }
    }

    async get(id) {
        try {
            const hashtags = await Hashtag.findById(id);
            return hashtags;
        } catch (error) {
            console.log(error);
        }
    }

    async destroy(id) {
        try {
            const response = await Hashtag.findByIdAndRemove(id);
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async getAll(offset, limit) {
        try {
            const hashtags = await Hashtag.find().skip(offset).limit(limit);
            return hashtags;
        } catch (error) {
            console.log(error);
        }
    }

    async findByName(titleList) {
        try {
            const list = await Hashtag.find({
                title: titleList
            });
            return list;

        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = HashTagsRepository;