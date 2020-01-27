import TipoUsuario from '../models/TipoUsuario';

//  Crea un tipo de usuario
export async function createTipoUsuario (req, res){
    const { tipo_usuario, descripcion } = req.body;
    try{
        let newTipoUsuario = await TipoUsuario.create({
            tipo_usuario, 
            descripcion
        },
        {
            fields: ['tipo_usuario', 'descripcion']
        });
        if (newTipoUsuario) {
            return res.json({
                message: 'Tipo de usuario creado',
                data: newTipoUsuario
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

// Obtiene todos los tipos de usuario de la base de datos
export async function getTiposUsuarios (req, res){
    try{
        const tiposUsuarios = await TipoUsuario.findAll();
        return res.json (tiposUsuarios);
    } catch (error){
        res.status(500).json({
            message:'Something goes wrong',
            data: {}
        });
    }

}

// Obtiene un tipo de usuario por su id
export async function getOneTipoUsuario (req, res){
    const { id } = req.params;
    try{
        const tipoUsuario = await TipoUsuario.findOne({
            where: {
                tipo_usuario_id:id
            }
        });
        return res.json (tipoUsuario);
    } catch (error){
        res.status(500).json({
            message:'Something goes wrong',
            data: {}
        });
    }
}

// Elimina un tipo de usuario por su id
export async function deleteTipoUsuario(req, res){
    const { id } = req.params;
    try{
        const deleteRowCount = await TipoUsuario.destroy({
            where: {
                tipo_usuario_id:id
            }
        });
        return res.json ({
            message: 'Tipo de usuario elminado exitosamente',
            count: deleteRowCount
        });
    } catch (error){
        res.status(500).json({
            message:'Something goes wrong',
            data: {}
        });
    }
}

// Actualiza los valores de un tipo de usuario por su id
export async function updateTipoUsuario (req, res){
    const { id } = req.params;
    const { tipousuario, descripcion } = req.body;

    try{
        const tiposUsuarios = await TipoUsuario.findAll({
            attributes: [ 'tipo_usuario_id', 'tipo_usuario', 'descripcion'],
            where:{
                tipo_usuario_id : id
            }
        });
    
        if (tiposUsuarios.length > 0){
            tiposUsuarios.forEach(async tipoUsario => {
                await tipoUsario.update({
                    tipo_usuario, 
                    descripcion
                });
            });
        }
        
        return res.json({
            message:'Tipo de usuario actualizado'
        });  
    } catch (error){
        //console.log(error);
        res.status(500).json({
            message:'Something goes wrong',
            data: {}
        });
    }

}