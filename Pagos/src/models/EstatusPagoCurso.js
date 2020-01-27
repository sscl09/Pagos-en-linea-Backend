import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import HistoricoCurso from './HistoricoCurso';

const EstatusPagoCurso = sequelize.define('estatus_pago_curso',{
    estatus_pago_curso_id:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    nombre:{
        type: Sequelize.STRING(30) 
    },
    descripcion:{
        type: Sequelize.STRING(30) 
    }
},
{
    timestamps: false,
    freezeTableName: true,
    allowNull: false
});


//Llave foranea de ESTATUS_PAGO_CURSO de HISTORICO_CURSO
EstatusPagoCurso.hasMany(HistoricoCurso, { foreignKey: 'curso_id', sourcekey: 'curso_id'});
HistoricoCurso.belongsTo(EstatusPagoCurso, { foreignKey: 'curso_id', sourcekey: 'curso_id'});

export default EstatusPagoCurso;