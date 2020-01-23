import Factura from '../models/Factura';


//  Crea un nuevo estado curso
export async function createFactura (req, res){
    const { factura } = req.body;
    try{
        let newFactura = await Factura.create({
            factura
        },
        {
            fields: ['factura']
        });
        if (newFactura) {
            return res.json({
                message: 'Factura creada',
                data: newFactura
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
export async function getFacturas (req, res){
    try{
        const facturas = await Factura.findAll();
        return res.json (facturas);
    } catch (error){
        res.status(500).json({
            message:'Something goes wrong',
            data: {}
        });
    }

}

// Obtiene un estado curso por su id
export async function getOneFactura (req, res){
    const { id } = req.params;
    try{
        const factura = await Factura.findOne({
            where: {
                facturaid:id
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
export async function deleteFactura (req, res){
    const { id } = req.params;
    try{
        const deleteRowCount = await Factura.destroy({
            where: {
                facturaid:id
            }
        });
        return res.json ({
            message: 'Factura elminada exitosamente',
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
export async function updateFactura (req, res){
    const { id } = req.params;
    const { factura } = req.body;

    try{
        const facturas = await Factura.findAll({
            attributes: ['facturaid', 'factura'],
            where:{
                facturaid: id
            }
        });
    
        if (facturas.length > 0){
            facturas.forEach(async fac => {
                await fac.update({
                    factura
                });
            });
        }
        
        return res.json({
            message:'Factura actualizada'
        });  
    } catch (error){
        res.status(500).json({
            message:'Something goes wrong',
            data: {}
        });
    }

}