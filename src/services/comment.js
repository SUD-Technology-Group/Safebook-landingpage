const { commentModel } = require('../models');

const commentService = {
    getOne: async (payloads, field='-__v') => {
        return await commentModel.findOne(payloads, field).lean();
    },

    get: async (payloads, field='-__v') => {
        return await commentModel.find(payloads, field).lean();
    },

    create: async (payloads) => {
        return await commentModel.create(payloads);
    },

    update: async (conditions, payloads) => {
        return await commentModel.findOneAndUpdate(conditions, payloads);
    },

    delete: async (conditions) => {
        return await commentModel.findOneAndDelete(conditions);
    },
};

module.exports = commentService;
