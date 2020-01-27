import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const Factura = sequelize.define('factura',{
    factura_id:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    factura:{
        type: Sequelize.DECIMAL(6,2)
    }
},
{
    timestamps: false,
    freezeTableName: true,
    allowNull: false
});

export default Factura;