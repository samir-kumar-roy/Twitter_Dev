class CrudRepository {
    constructor(model) {
        this.model = model;
    }
    async create(data) {
        try {
            const response = await this.model.create(data);
            return response;
        } catch (err) {
            console.log(err);
        }
    }

    async destroy(id) {
        try {
            const response = await this.model.findByIdAndRemove(id);
            return response;
        } catch (err) {
            console.log(err);
        }
    }

    async update(id, data) {
        try {
            const response = await this.model.findByIdAndUpdate(id, data, { new: true });
            return response;
        } catch (err) {
            console.log(err);
        }
    }

    async get(id) {
        try {
            const response = await this.model.findById(id);
            return response;
        } catch (err) {
            console.log(err);
        }
    }

    async getAll() {
        try {
            const response = await this.model.find({});
            return response;
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = CrudRepository;