const { Sequelize } = require('sequelize');
const createModel = require('./student');

const sequelize = new Sequelize('student', 'root', null, {
    host: 'localhost',
    dialect: "mysql"
});


const connectDB = async () => {         
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

const db = {
    sequelize,
    sinhvien : createModel(sequelize)
}


module.exports = {
    db,
    connectDB
};