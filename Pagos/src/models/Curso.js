import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const Curso = sequelize.define('curso',{
    cursoid:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    imagen:{
        type: Sequelize.STRING(40) 
    },
    hora_inicio:{
        type: Sequelize.TIME
    },
    hora_fin:{
        type: Sequelize.TIME
    },
    temario:{
        type: Sequelize.STRING(40) 
    },
    antecedentes:{
        type: Sequelize.STRING(40) 
    },
    material:{
        type: Sequelize.STRING(40) 
    },
    nombre:{
        type: Sequelize.STRING(40) 
    },
    precio:{
        type: Sequelize.DECIMAL(10,2)
    },
    fecha_inicio:{
        type: Sequelize.DATE
    },
    cupo:{
        type: Sequelize.INTEGER
    },
    fecha_fin:{
        type: Sequelize.DATE
    }
},
{
    timestamps: false,
    freezeTableName: true,
    allowNull: false
});

export default Curso;