import { Router } from 'express';
const router = Router();

import { createFormaPago, getFormasPago, getOneFormaPago, deleteFormaPago, updateFormaPago } from '../controllers/formaPago.controller';

// /api/formaPago
router.post('/', createFormaPago);
router.get('/',getFormasPago); 

// /api/formaPago/:formapagoid
router.get('/:id', getOneFormaPago);
router.delete('/:id', deleteFormaPago);
router.put ('/:id', updateFormaPago);


export default router;