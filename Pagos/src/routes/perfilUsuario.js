import { Router } from 'express';
const router = Router();

import { createPerfilUsuario, getPerfilUsuario, getOnePerfilUsuario, deletePerfilUsuario, updatePerfilUsuario } from '../controllers/perfilUsuario.controller';

// /api/perfilUsuario
router.post('/', createPerfilUsuario);
router.get('/',getPerfilUsuario); 

// /api/perfilUsuario/:perfilusuarioid
router.get('/:id', getOnePerfilUsuario);
router.delete('/:id', deletePerfilUsuario);
router.put ('/:id', updatePerfilUsuario);

export default router;