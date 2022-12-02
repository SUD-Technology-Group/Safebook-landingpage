const { staffModel } = require('../models');

const staffService = {
    getOne: async (payloads, field) => {
        return await staffModel.findOne(payloads, field).lean();
    },

    get: async (payloads, field) => {
        return await staffModel.find(payloads, field).lean();
    },

    create: async (payloads) => {
        return await staffModel.create(payloads);
    },

    update: async (conditions, payloads) => {
        return await staffModel.findOneAndUpdate(conditions, payloads);
    },

    delete: async (conditions) => {
        return await staffModel.findOneAndDelete(conditions);
    },
};

module.exports = staffService;
