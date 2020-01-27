import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const PerfilUsuario = sequelize.define('perfil_usuario',{
    perfil_usuario_id:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    perfil_usuario:{
        type: Sequelize.STRING(40)
    },
    descripcion:{
        type: Sequelize.STRING(40)
    },
    porciento_descuento:{
        type: Sequelize.DECIMAL(3)
    }
},
{
    timestamps: false,
    freezeTableName: true,
    allowNull: false
});

export default PerfilUsuario;