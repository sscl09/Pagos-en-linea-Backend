import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const Usuario = sequelize.define('usuario',{
    usuarioid:{

    },
    nombre:{

    },
    appaterno:{

    },
    apmaterno:{

    },
    correoelectronico:{

    },
    constrania:{

    },
},
{
    timestamps: false,
    freezeTableName: true,
    allowNull: false
});

export default Usuario;