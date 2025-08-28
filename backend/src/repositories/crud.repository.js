

class CrudRepository {

    constructor(model) {
        this.model = model;
    }

    async create(data) {
        const doc = await this.model.create(data);
        return doc;
    }

    async getById(id) {
        const doc = await this.model.findById(id);
        return doc;
    }

    async findByName(data) {
        const doc = await this.model.findOne(data);
        return doc;
    }

    async update(id, data) {
        const doc = await this.model.findByIdAndUpdate(id, data);
        return doc;
    }

    async destroy(id) {
        const doc = await this.model.findByIdAndDelete(id);
        return doc;
    }
}

module.exports = CrudRepository;