const UserRepository = require('../repository/user-repository');

class UserService {

    constructor() {
        this.userRepository = new UserRepository();
    }

    async signup(data) {
        try {
            const response = await this.userRepository.create(data);
            return response;
        } catch (err) {
            console.log(err);
        }
    }

    async getUserByEmail(email) {
        try {
            const user = await this.userRepository.findBy({ email })
            return user;
        } catch (error) {
            throw error;
        }
    }

    async signin(data) {
        try {
            const user = await this.getUserByEmail(data.email);
            if (!user) {
                throw {
                    message: 'no user found'
                };
            }
            if (!user.comparePassword(data.password)) {
                throw {
                    message: 'incorrect password',
                };
            }
            const token = user.genJWT();
            return token;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = UserService;