import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const FormaPago = sequelize.define('forma_pago',{
    forma_pago_id:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    forma_pago:{
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

