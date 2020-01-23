import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const PerfilUsuario = sequelize.define('perfilusuario',{
    perfilusuarioid:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    perfilusuario:{
        type: Sequelize.STRING(40)
    },
    descripcion:{
        type: Sequelize.TEXT
    },
    porcientodescuento:{
        type: Sequelize.INTEGER
    }
},
{
    timestamps: false,
    freezeTableName: true,
    allowNull: false
});

export default PerfilUsuario;