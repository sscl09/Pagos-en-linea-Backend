import { Router } from 'express';
const router = Router();

import { createEstadoCurso, getEstadosCursos, getOneEstadoCurso } from '../controllers/estadoCurso.controller';
import { deletePerfilUsuario, updatePerfilUsuario } from '../controllers/perfilUsuario.controller';

// /api/estadoCurso
router.post('/', createEstadoCurso);
router.get('/',getEstadosCursos); 

// /api/estadoCurso/:estadocursoid
router.get('/:id', getOneEstadoCurso);
router.delete('/:id', deletePerfilUsuario);
router.put ('/:id', updatePerfilUsuario);

export default router;