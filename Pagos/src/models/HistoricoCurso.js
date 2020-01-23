/*import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const HistoricoCurso = sequelize.define('',{
    historicocursoid:{

    },
    fechaestado:{

    },
    estadocursoid:{

    },
    curso
});

/*
CREATE TABLE historicoCurso(
	historicoCursoId 	integer 	default nextval('seqHistoricoCurso'),
	fechaEstado 		date 		NOT NULL,
	estadoCursoId 		integer		NOT NULL,
	cursoId 			integer 	NOT NULL,
	usuarioId 			integer 	NOT NULL,
	CONSTRAINT PKH PRIMARY KEY (historicoCursoId),
	CONSTRAINT ESTADO_CURSO_ID_FK FOREIGN KEY (estadoCursoId) REFERENCES estadoCurso (estadoCursoId),
	CONSTRAINT CURSO_ID_FK FOREIGN KEY (cursoId) REFERENCES curso (cursoId),
	CONSTRAINT USUARIO_ID_FK FOREIGN KEY (usuarioId) REFERENCES usuario (usuarioId)
);


*/