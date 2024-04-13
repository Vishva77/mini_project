import vehicle from './model.js'

export const vehiclepost = async (req, res) => {
    try {
        const data = new vehicle({
            vehicleName: req.body.vehicleName,
            price: req.body.price,
            year: req.body.year,
            whatsapp: req.body.whatsapp,
            img: req.body.img
        })
        await data.save()
        res.status(200).json(data)
    } catch (error) {
        console.log(error);
    }

}
export const getdata=async(req,res)=>{
    try{
        const getvehicledata=await vehicle.find()
        res.status(200).json(getvehicledata)
    }catch(error){
        console.log(error);
    }
}