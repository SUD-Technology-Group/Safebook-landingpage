const { mediaModel } = require('../models');

const mediaService = {
    getOne: async (payloads, field='-__v') => {
        return await mediaModel.findOne(payloads, field).lean();
    },

    get: async (payloads, field='-__v') => {
        return await mediaModel.find(payloads, field).lean();
    },

    create: async (payloads) => {
        return await mediaModel.create(payloads);
    },

    update: async (conditions, payloads) => {
        return await mediaModel.findOneAndUpdate(conditions, payloads);
    },

    delete: async (conditions) => {
        return await mediaModel.findOneAndDelete(conditions);
    },
};

module.exports = mediaService;
