import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const TipoUsuario = sequelize.define('tipo_usuario',{
    tipo_usuario_id:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    tipo_usuario:{
        type: Sequelize.STRING(40)
    },
    descripcion:{
        type: Sequelize.STRING(40)
    }
},
{
    timestamps: false,
    freezeTableName: true,
    allowNull: false
});

export default TipoUsuario;
