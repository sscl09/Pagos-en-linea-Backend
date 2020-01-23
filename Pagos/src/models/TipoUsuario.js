import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const TipoUsuario = sequelize.define('tipousuario',{
    tipousuarioid:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    tipousuario:{
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

export default TipoUsuario;
