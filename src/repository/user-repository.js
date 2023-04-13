const User = require('../models/User');
const CrudRepository = require('./crud-repository');

class UserRepository extends CrudRepository {
    constructor() {
        super(User);
    }
    async findBy(email) {
        try {
            const response = await User.findOne(email);
            return response;
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = UserRepository;