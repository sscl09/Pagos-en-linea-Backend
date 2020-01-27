import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

import HistoricoCurso from './HistoricoCurso';

const Curso = sequelize.define('curso',{
    curso_id:{
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

//Llave foranea CURSO_ID de HISTORICO_CURSO
Curso.hasMany(HistoricoCurso, { foreignKey: 'curso_id', sourcekey: 'curso_id'});
HistoricoCurso.belongsTo(Curso, { foreignKey: 'curso_id', sourcekey: 'curso_id'});

export default Curso;