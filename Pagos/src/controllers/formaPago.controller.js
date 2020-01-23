import FormaPago from '../models/FormaPago';


//  Crea una nueva forma de pago
export async function createFormaPago (req, res){
    const { formapago, descripcion } = req.body;
    try{
        let newFormaPago = await FormaPago.create({
            formapago,
            descripcion
        },
        {
            fields: ['formapago', 'descripcion']
        });
        if (newFormaPago) {
            return res.json({
                message: 'Forma de pago creada',
                data: newFormaPago
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

// Obtiene todas las formas de pago de la base de datos 
export async function getFormasPago (req, res){
    try{
        const formasPago = await FormaPago.findAll();
        return res.json (formasPago);
    } catch (error){
        res.status(500).json({
            message:'Something goes wrong',
            data: {}
        });
    }

}

// Obtiene una forma de pago por su id
export async function getOneFormaPago (req, res){
    const { id } = req.params;
    try{
        const formaPago = await FormaPago.findOne({
            where: {
                formapagoid:id
            }
        });
        return res.json (formaPago);
    } catch (error){
        res.status(500).json({
            message:'Something goes wrong',
            data: {}
        });
    }

}

// Elimina una forma de pago por su id
export async function deleteFormaPago (req, res){
    const { id } = req.params;
    try{
        const deleteRowCount = await FormaPago.destroy({
            where: {
                formapagoid:id
            }
        });
        return res.json ({
            message: 'Forma de pago elminada exitosamente',
            count: deleteRowCount
        });
    } catch (error){
        res.status(500).json({
            message:'Something goes wrong',
            data: {}
        });
    }
}

// Actualiza los valores de una forma de pago por su id
export async function updateFormaPago (req, res){
    const { id } = req.params;
    const { formapago, descripcion } = req.body;

    try{
        const formasPago = await FormaPago.findAll({
            attributes: ['formapagoid', 'formapago', 'descripcion'],
            where:{
                formapagoid : id
            }
        });
    
        if (formasPago.length > 0){
            formasPago.forEach(async formaPago => {
                await formaPago.update({
                    formapago,
                    descripcion
                });
            });
        }
        
        return res.json({
            message:'Forma de pago actualizada'
        });  
    } catch (error){
        res.status(500).json({
            message:'Something goes wrong',
            data: {}
        });
    }

}