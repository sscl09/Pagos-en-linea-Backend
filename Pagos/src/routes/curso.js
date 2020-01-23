import { Router } from 'express';
const router = Router();


import { createCurso, getCursos, getOneCurso, deleteCurso, updateCurso  } from '../controllers/curso.controller';


// /api/curso
router.post('/', createCurso);
router.get('/',getCursos); 

// /api/curso/:cursoid
router.get('/:id', getOneCurso);
router.delete('/:id', deleteCurso);
router.put ('/:id', updateCurso);


export default router;