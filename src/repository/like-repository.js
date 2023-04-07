const Like = require('../models/like');
const CrudRepository = require('./crud-repository');

class LikeRepository extends CrudRepository {
    constructor() {
        super(Like);
    }

    async findByUserAndLikeable(data) {
        try {
            const response = await Like.findOne(data);
            return response;

        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = LikeRepository;