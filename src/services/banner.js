const { bannerModel } = require('../models');

const bannerService = {
    getOne: async (payloads, field='-__v') => {
        return await bannerModel.findOne(payloads, field).lean();
    },

    get: async (payloads, field='-__v') => {
        return await bannerModel.find(payloads, field).lean();
    },

    create: async (payloads) => {
        return await bannerModel.create(payloads);
    },

    update: async (conditions, payloads) => {
        return await bannerModel.findOneAndUpdate(conditions, payloads);
    },

    delete: async (conditions) => {
        return await bannerModel.findOneAndDelete(conditions);
    },
};

module.exports = bannerService;
