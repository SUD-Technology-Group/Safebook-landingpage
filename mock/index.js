const mongoose = require('mongoose');
const { userModel, bannerModel, commentModel , staffModel, sectionModel } = require('../src/models');
const user = require('./user');
const banner = require('./banner');
const section = require('./section');
const staff = require('./staff');
const comment = require('./comment');

const importData = async () => {
    await userModel.create(user);
    await staffModel.create(staff);
    await commentModel.create(comment);
    await sectionModel.create(section);
    await bannerModel.create(banner);
};

const deleteData = async () => {
    await mongoose.connection.collections.users.drop();
    await mongoose.connection.collections.banners.drop();
    await mongoose.connection.collections.sections.drop();
    await mongoose.connection.collections.comments.drop();
    await mongoose.connection.collections.staffs.drop();
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
