const { featureModel } = require('../models');

const featureService = {
    getOne: async (payloads, field='-__v') => {
        return await featureModel.findOne(payloads, field).lean();
    },

    get: async (payloads, field='-__v') => {
        return await featureModel.find(payloads, field).lean();
    },

    create: async (payloads) => {
        return await featureModel.create(payloads);
    },

    update: async (conditions, payloads) => {
        return await featureModel.findOneAndUpdate(conditions, payloads);
    },

    delete: async (conditions) => {
        return await featureModel.findOneAndDelete(conditions);
    },
};

module.exports = featureService;
