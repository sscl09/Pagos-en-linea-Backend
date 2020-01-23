import PerfilUsuario from '../models/PerfilUsuario';

//  Crea un tipo de usuario
export async function createPerfilUsuario (req, res){
    const { perfilusuario, descripcion, porcientodescuento } = req.body;
    try{
        let newPerfilUsuario = await PerfilUsuario.create({
            perfilusuario, 
            descripcion, 
            porcientodescuento
        },
        {
            fields: [ 'perfilusuario', 'descripcion', 'porcientodescuento']
        });
        if (newPerfilUsuario) {
            return res.json({
                message: 'Perfil de usuario creado',
                data: newPerfilUsuario
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

// Obtiene una forma de pago por su id
export async function getOnePerfilUsuario (req, res){
    const { id } = req.params;
    try{
        const perfilUsuario = await PerfilUsuario.findOne({
            where: {
                perfilusuarioid:id
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

// Elimina una forma de pago por su id
export async function deletePerfilUsuario(req, res){
    const { id } = req.params;
    try{
        const deleteRowCount = await PerfilUsuario.destroy({
            where: {
                perfilusuarioid:id
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

// Actualiza los valores de un curso por su id
export async function updatePerfilUsuario (req, res){
    const { id } = req.params;
    const { perfilusuario, descripcion, porcientodescuento } = req.body;

    try{
        const perfilesUsuario = await PerfilUsuario.findAll({
            attributes: [ 'perfilusuarioid', 'perfilusuario', 'descripcion', 'porcientodescuento'],
            where:{
                perfilusuarioid : id
            }
        });
    
        if (perfilesUsuario.length > 0){
            perfilesUsuario.forEach(async perfilUsuario => {
                await perfilUsuario.update({
                    perfilusuario, 
                    descripcion, 
                    porcientodescuento
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