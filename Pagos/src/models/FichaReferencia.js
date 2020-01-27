import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const FichaReferencia = sequelize.define('ficha_referencia',{
    ficha_referencia_id:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    referencia:{
        type: Sequelize.DECIMAL(20)
    }
},
{
    timestamps: false,
    freezeTableName: true,
    allowNull: false
});

export default FichaReferencia;