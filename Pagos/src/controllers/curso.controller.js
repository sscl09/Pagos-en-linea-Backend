import Curso from '../models/Curso';

//  Crea un curso
export async function createCurso (req, res){
    const { imagen, hora_inicio, hora_fin, temario, antecedentes, material, nombre, precio, fecha_inicio, cupo, fecha_fin } = req.body;
    try{
        let newCurso = await Curso.create({
            imagen,
            hora_inicio,
            hora_fin,
            temario,
            antecedentes,
            material,
            nombre,
            precio,
            fecha_inicio,
            cupo,
            fecha_fin
        },
        {
            fields: ['imagen', 'hora_inicio', 'hora_fin', 'temario', 'antecedentes', 'material', 'nombre', 'precio', 'fecha_inicio', 'cupo', 'fecha_fin']
        });
        if (newCurso) {
            return res.json({
                message: 'Curso creado',
                data: newCurso
            });
        }
    } catch(error){
        console.log(error);
        res.status(500).json({
            message:'Something goes wrong',
            data: {}
        });
    }
}

// Obtiene todos los cursos de la base de datos
export async function getCursos (req, res){
    try{
        const cursos = await Curso.findAll();
        return res.json (cursos);
    } catch (error){
        res.status(500).json({
            message:'Something goes wrong',
            data: {}
        });
    }

}

// Obtiene un curso por su id
export async function getOneCurso (req, res){
    const { id } = req.params;
    try{
        const curso = await Curso.findOne({
            where: {
                curso_id:id
            }
        });
        return res.json (curso);
    } catch (error){
        console.log(error);
        res.status(500).json({
            message:'Something goes wrong',
            data: {}
        });
    }
}

// Elimina un curso por su id
export async function deleteCurso(req, res){
    const { id } = req.params;
    try{
        const deleteRowCount = await Curso.destroy({
            where: {
                curso_id:id
            }
        });
        return res.json ({
            message: 'Curso elminado exitosamente',
            count: deleteRowCount
        });
    } catch (error){
        res.status(500).json({
            message:'Something goes wrong',
            data: {}
        });
    }
}

// Actualiza los valores de un curso por su id
export async function updateCurso (req, res){
    const { id } = req.params;
    const { imagen, hora_inicio, hora_fin, temario, antecedentes, material, nombre, precio, fecha_inicio, cupo, fecha_fin } = req.body;

    try{
        const cursos = await Curso.findAll({
            attributes: [ 'curso_id', 'imagen', 'hora_inicio', 'hora_fin', 'temario', 'antecedentes', 'material', 'nombre', 'precio', 'fecha_inicio', 'cupo', 'fecha_fin'],
            where:{
                curso_id : id
            }
        });
    
        if (cursos.length > 0){
            cursos.forEach(async curso => {
                await curso.update({
                    imagen,
                    hora_inicio,
                    hora_fin,
                    temario,
                    antecedentes,
                    material,
                    nombre,
                    precio,
                    fecha_inicio,
                    cupo,
                    fecha_fin
                });
            });
        }
        
        return res.json({
            message:'Curso actualizado'
        });  
    } catch (error){
        res.status(500).json({
            message:'Something goes wrong',
            data: {}
        });
    }

}

