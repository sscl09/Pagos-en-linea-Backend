import { Router } from 'express';
const router = Router();

import { createTipoUsuario, getTiposUsuarios, getOneTipoUsuario, deleteTipoUsuario, updateTipoUsuario } from '../controllers/tipoUsuario.controller';

// /api/tipoUsuario
router.post('/', createTipoUsuario);
router.get('/',getTiposUsuarios); 

// /api/tipoUsuario/:tipousuarioid
router.get('/:id', getOneTipoUsuario);
router.delete('/:id', deleteTipoUsuario);
router.put ('/:id', updateTipoUsuario);

export default router;