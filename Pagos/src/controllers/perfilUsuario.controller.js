import PerfilUsuario from '../models/PerfilUsuario';

//  Crea un perfil de usuario
export async function createPerfilUsuario (req, res){
    const { perfil_usuario, descripcion, porciento_descuento } = req.body;
    try{
        let newPerfilUsuario = await PerfilUsuario.create({
            perfil_usuario, 
            descripcion, 
            porciento_descuento
        },
        {
            fields: [ 'perfil_usuario', 'descripcion', 'porciento_descuento']
        });
        if (newPerfilUsuario) {
            return res.json({
                message: 'Perfil de usuario creado',
                data: newPerfilUsuario
            });
        }
    } catch(error){
        res.status(500).json({
            message:'Something goes wrong',
            data: {}
        });
    }
}

// Obtiene todos los perfiles de usuario de la base de datos
export async function getPerfilUsuario (req, res){
    try{
        const perfilesUsuario = await PerfilUsuario.findAll();
        return res.json (perfilesUsuario);
    } catch (error){
        res.status(500).json({
            message:'Something goes wrong',
            data: {}
        });
    }

}

// Obtiene un perfil de usuario por su id
export async function getOnePerfilUsuario (req, res){
    const { id } = req.params;
    try{
        const perfilUsuario = await PerfilUsuario.findOne({
            where: {
                perfil_usuario_id:id
            }
        });
        return res.json (perfilUsuario);
    } catch (error){
        res.status(500).json({
            message:'Something goes wrong',
            data: {}
        });
    }
}

// Elimina un perfil de usuario por su id
export async function deletePerfilUsuario(req, res){
    const { id } = req.params;
    try{
        const deleteRowCount = await PerfilUsuario.destroy({
            where: {
                perfil_usuario_id:id
            }
        });
        return res.json ({
            message: 'Pefil de usuario elminado exitosamente',
            count: deleteRowCount
        });
    } catch (error){
        res.status(500).json({
            message:'Something goes wrong',
            data: {}
        });
    }
}

// Actualiza los valores de un perfil de usuario por su id
export async function updatePerfilUsuario (req, res){
    const { id } = req.params;
    const { perfil_usuario, descripcion, porciento_descuento } = req.body;

    try{
        const perfilesUsuario = await PerfilUsuario.findAll({
            attributes: [ 'perfil_usuario_id', 'perfil_usuario', 'descripcion', 'porciento_descuento'],
            where:{
                perfil_usuario_id : id
            }
        });
    
        if (perfilesUsuario.length > 0){
            perfilesUsuario.forEach(async perfilUsuario => {
                await perfilUsuario.update({
                    perfil_usuario, 
                    descripcion, 
                    porciento_descuento
                });
            });
        }
        
        return res.json({
            message:'Perfil de usuario actualizado'
        });  
    } catch (error){
        //console.log(error);
        res.status(500).json({
            message:'Something goes wrong',
            data: {}
        });
    }

}