import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const FormaPago = sequelize.define('formapago',{
    formapagoid:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    formapago:{
        type: Sequelize.STRING(40)
    },
    descripcion:{
        type: Sequelize.TEXT
    }
},
{
    timestamps: false,
    freezeTableName: true,
    allowNull: false
});

export default FormaPago;

