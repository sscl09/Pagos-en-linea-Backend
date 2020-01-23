import EstadoCurso from '../models/EstadoCurso';


//  Crea un nuevo estado curso
export async function createEstadoCurso (req, res){
    const { nombre, descripcion } = req.body;
    try{
        let newEstadoCurso = await EstadoCurso.create({
            nombre,
            descripcion
        },
        {
            fields: ['nombre', 'descripcion']
        });
        if (newEstadoCurso) {
            return res.json({
                message: 'Estado de curso creado',
                data: newEstadoCurso
            });
        }
    } catch(error){
        //console.log(error);
        res.status(500).json({
            message:'Something goes wrong',
            data: {}
        });
    }
}

// Obtiene todos los estados curso de la base de datos 
export async function getEstadosCursos (req, res){
    try{
        const estadosCursos = await EstadoCurso.findAll();
        return res.json (estadosCursos);
    } catch (error){
        res.status(500).json({
            message:'Something goes wrong',
            data: {}
        });
    }

}

// Obtiene un estado curso por su id
export async function getOneEstadoCurso (req, res){
    const { id } = req.params;
    try{
        const estadoCurso = await EstadoCurso.findOne({
            where: {
                estadocursoid:id
            }
        });
        return res.json (estadoCurso);
    } catch (error){
        res.status(500).json({
            message:'Something goes wrong',
            data: {}
        });
    }

}

// Elimina un estado curso por su id
export async function deleteEstadoCurso (req, res){
    const { id } = req.params;
    try{
        const deleteRowCount = await EstadoCurso.destroy({
            where: {
                estadocurso:id
            }
        });
        return res.json ({
            message: 'Estados de curso elminados exitosamente',
            count: deleteRowCount
        });
    } catch (error){
        res.status(500).json({
            message:'Something goes wrong',
            data: {}
        });
    }
}

// Actualiza los valores de un estado curso por su id
export async function updateEstadoCurso (req, res){
    const { id } = req.params;
    const { nombre, descripcion } = req.body;

    try{
        const estadosCursos = await EstadoCurso.findAll({
            attributes: ['estadocursoid', 'estadocurso', 'descripcion'],
            where:{
                estadocursoid : id
            }
        });
    
        if (estadosCursos.length > 0){
            estadosCursos.forEach(async estadoCurso => {
                await estadoCurso.update({
                    nombre,
                    descripcion
                });
            });
        }
        
        return res.json({
            message:'Estado curso actualizado'
        });  
    } catch (error){
        res.status(500).json({
            message:'Something goes wrong',
            data: {}
        });
    }

}