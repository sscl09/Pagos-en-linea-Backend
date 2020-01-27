import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const Usuario = sequelize.define('usuario',{
    usuarioid:{
		type: Sequelize.INTEGER,
        primaryKey: true
    },
    nombre:{
		type: Sequelize.STRING(40)
    },
    ap_paterno:{
		type: Sequelize.STRING(40)
    },
    ap_materno:{
		type: Sequelize.STRING(40)
	},
	edad:{
		type: Sequelize.DECIMAL(2)
	},
	sexo:{
		type: Sequelize.STRING(1)
	},
    correo_electronico:{
		type: Sequelize.STRING(40)
    },
    constraña:{
		type: Sequelize.STRING(40)
	},
	fecha_nacimiento:{
		type: Sequelize.DATE
	},
	telefono:{
		type: Sequelize.DECIMAL(12)
	}
},
{
    timestamps: false,
    freezeTableName: true,
    allowNull: false
});

export default Usuario;