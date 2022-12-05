const mongoose = require('mongoose');
const { sectionModel } = require('../src/models');
const section = require('./section');

const importData = async () => {
    // await sectionModel.create(section);
};

const deleteData = async () => {
    // await mongoose.connection.collections.sections.drop();
};

const resetData = async () => {
    await deleteData();
    await importData();
};

(async () => {
    try {
        await mongoose.connect(
            'mongodb+srv://safebook:safebook@cluster0.k4clata.mongodb.net/db?retryWrites=true&w=majority',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );
        await resetData();
        console.log('Reset data successfully');
    } catch (err) {
        console.error(err);
    } finally {
        mongoose.disconnect();
    }
})();
