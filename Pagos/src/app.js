//Configuración del servidor

import express, { json } from 'express';
import morgan from 'morgan';

// Importación de rutas
import cursoRoutes from './routes/curso';
import cursoUsuarioRoutes from './routes/cursoUsuario';
import estadoCursoRoutes from './routes/estadoCurso';
import facturaRoutes from './routes/factura';
import formaPagoRoutes from './routes/formaPago';
import historicoCursoRoutes from './routes/historicoCurso';
import perfilUsuarioRoutes from './routes/perfilUsuario';
import tipoUsuarioRoutes from './routes/tipoUsuario';
import usuarioRoutes from './routes/usuario';

//Inicialización
const app = express();

// middlewares
app.use(morgan('dev'));     //Muestra por consola las peticiones que van llegando
app.use(json());            //Para que el servidor pueda entender JSON

// routes  
app.use('/api/curso',cursoRoutes);
app.use('/api/cursoUsuario',cursoUsuarioRoutes);
app.use('/api/estadoCurso',estadoCursoRoutes);
app.use('/api/factura',facturaRoutes);
app.use('/api/formaPago',formaPagoRoutes);
app.use('/api/historicoCurso',historicoCursoRoutes);
app.use('/api/perfilUsuario',perfilUsuarioRoutes);
app.use('/api/tipoUsuario',tipoUsuarioRoutes);
app.use('/api/usuario',usuarioRoutes);



export default app;