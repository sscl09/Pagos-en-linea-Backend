import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const EstadoCurso = sequelize.define('estadocurso',{
    estadocursoid:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    nombre:{
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

export default EstadoCurso;