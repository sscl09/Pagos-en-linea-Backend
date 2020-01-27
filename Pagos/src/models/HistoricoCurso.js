import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const HistoricoCurso = sequelize.define('historico_curso',{
    historico_curso_id:{
		type: Sequelize.INTEGER,
        primaryKey: true
    },
    fecha_estatus:{
		type: Sequelize.DATE
    },
    estatus_pago_curso_id:{
		type: Sequelize.INTEGER
    },
    curso_id:{
		type: Sequelize.INTEGER
	}
},
{
    timestamps: false,
    freezeTableName: true,
    allowNull: false
});

export default HistoricoCurso;