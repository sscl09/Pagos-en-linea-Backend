import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const Factura = sequelize.define('factura',{
    facturaid:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    factura:{
        type: Sequelize.DECIMAL(4,2)
    }
},
{
    timestamps: false,
    freezeTableName: true,
    allowNull: false
});

export default Factura;