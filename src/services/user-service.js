const UserRepository = require('../repository/user-repository');

class UserService {

    constructor() {
        this.userRepository = new UserRepository();
    }

    async signup(data) {
        console.log('service layer', data);

        try {
            const response = await this.userRepository.create(data);
            return response;
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = UserService;