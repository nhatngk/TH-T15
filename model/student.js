const { DataTypes } = require('sequelize');

const createModel = (sequelize) => {
    let sinhvien = sequelize.define('sinhvien', {
        masv: {
            type: DataTypes.STRING(20),
            primaryKey: true,
            allowNull: false
        },
        hoten: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        ngaysinh: {
            type: DataTypes.DATE,
            defaultValue: null
        },
        gioitinh: {
            type: DataTypes.TINYINT(4),
            defaultValue: null
        },
        quequan: {
            type: DataTypes.STRING(300),
            defaultValue: null
        },
        malop: {
            type: DataTypes.STRING(10),
            defaultValue: null
        }
    },
        {
            freezeTableName: true,
            timestamps: false
        }
    )

    return sinhvien;
};

module.exports = createModel;