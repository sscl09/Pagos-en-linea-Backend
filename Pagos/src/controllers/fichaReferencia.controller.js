import FichaReferencia from '../models/FichaReferencia';


//  Crea un nuevo estado curso
export async function createFichaReferencia (req, res){
    const { referencia } = req.body;
    try{
        let newFichaReferencia = await FichaReferencia.create({
            referencia
        },
        {
            fields: ['referencia']
        });
        if (newFichaReferencia) {
            return res.json({
                message: 'Ficha referencia creada',
                data: newFichaReferencia
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

// Obtiene todos los estados curso de la base de datos 
export async function getFichaReferencia (req, res){
    try{
        const fichasReferencias = await FichaReferencia.findAll();
        return res.json (fichasReferencias);
    } catch (error){
        res.status(500).json({
            message:'Something goes wrong',
            data: {}
        });
    }

}

// Obtiene un estado curso por su id
export async function getOneFichaReferencia (req, res){
    const { id } = req.params;
    try{
        const fichaReferencia = await FichaReferencia.findOne({
            where: {
                ficha_referencia_id:id
            }
        });
        return res.json (factura);
    } catch (error){
        res.status(500).json({
            message:'Something goes wrong',
            data: {}
        });
    }

}

// Elimina un estado curso por su id
export async function deleteFichaReferencia (req, res){
    const { id } = req.params;
    try{
        const deleteRowCount = await FichaReferencia.destroy({
            where: {
                ficha_referencia_id:id
            }
        });
        return res.json ({
            message: 'Ficha referencia elminada exitosamente',
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
export async function updateFichaReferencia (req, res){
    const { id } = req.params;
    const { referencia } = req.body;

    try{
        const fichasReferencias = await FichaReferencia.findAll({
            attributes: ['ficha_referencia_id', 'referencia'],
            where:{
                ficha_referencia_id: id
            }
        });
    
        if (fichasReferencias.length > 0){
            fichasReferencias.forEach(async ficha => {
                await ficha.update({
                    referencia
                });
            });
        }
        
        return res.json({
            message:'Ficha referencia actualizada'
        });  
    } catch (error){
        res.status(500).json({
            message:'Something goes wrong',
            data: {}
        });
    }

}