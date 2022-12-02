const { sectionModel } = require('../models');

const sectionService = {
    getOne: async (payloads, field) => {
        return await sectionModel.findOne(payloads, field).lean();
    },

    get: async (payloads, field) => {
        return await sectionModel.find(payloads, field).lean();
    },

    create: async (payloads) => {
        return await sectionModel.create(payloads);
    },

    update: async (conditions, payloads) => {
        return await sectionModel.findOneAndUpdate(conditions, payloads);
    },

    delete: async (conditions) => {
        return await sectionModel.findOneAndDelete(conditions);
    },
};

module.exports = sectionService;
