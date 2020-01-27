import EstadoCurso from '../models/EstatusPagoCurso';


//  Crea un nuevo estado de pago para un curso
export async function createEstatusPagoCurso (req, res){
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

// Obtiene todos los estados de pago de un curso de la base de datos 
export async function getEstatusPagoCurso (req, res){
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

// Obtiene un estado de pago de un curso por su id
export async function getOneEstatusPagoCurso (req, res){
    const { id } = req.params;
    try{
        const estadoCurso = await EstadoCurso.findOne({
            where: {
                estatus_pago_curso_id:id
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

// Elimina un estado de pago de un curso por su id
export async function deleteEstatusPagoCurso(req, res){
    const { id } = req.params;
    try{
        const deleteRowCount = await EstadoCurso.destroy({
            where: {
                estatus_pago_curso_id:id
            }
        });
        return res.json ({
            message: 'Estado de pago de curso elminados exitosamente',
            count: deleteRowCount
        });
    } catch (error){
        res.status(500).json({
            message:'Something goes wrong',
            data: {}
        });
    }
}

// Actualiza los valores de un estado de pago de curso por su id
export async function updateEstatusPagoCurso (req, res){
    const { id } = req.params;
    const { nombre, descripcion } = req.body;

    try{
        const estadosCursos = await EstadoCurso.findAll({
            attributes: ['estatus_pago_curso_id', 'nombre', 'descripcion'],
            where:{
                estatus_pago_curso_id : id
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