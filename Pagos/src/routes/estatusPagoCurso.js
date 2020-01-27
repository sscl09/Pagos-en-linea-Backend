import { Router } from 'express';
const router = Router();

import { createEstatusPagoCurso, getEstatusPagoCurso, getOneEstatusPagoCurso, deleteEstatusPagoCurso, updateEstatusPagoCurso } from '../controllers/estatusPagoCurso.controller';

// /api/estatusPagoCurso
router.post('/', createEstatusPagoCurso);
router.get('/',getEstatusPagoCurso); 

// /api/estatusPagoCurso/:estatus_pago_curso_id
router.get('/:id', getOneEstatusPagoCurso);
router.delete('/:id', deleteEstatusPagoCurso);
router.put ('/:id', updateEstatusPagoCurso);

export default router;