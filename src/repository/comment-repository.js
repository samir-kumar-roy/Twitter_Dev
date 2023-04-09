const CrudRepository = require('./crud-repository');
const Comment = require('../models/comments');
class CommentRepository extends CrudRepository {
    constructor() {
        super(Comment);
    }
}

module.exports = CommentRepository;