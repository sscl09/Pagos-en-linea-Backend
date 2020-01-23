import { Router } from 'express';
const router = Router();

import { createFactura, getFacturas, getOneFactura, deleteFactura, updateFactura } from '../controllers/factura.controller';

// /api/factura
router.post('/', createFactura);
router.get('/',getFacturas); 

// /api/factura/:facturaid
router.get('/:id', getOneFactura);
router.delete('/:id', deleteFactura);
router.put ('/:id', updateFactura);


export default router;