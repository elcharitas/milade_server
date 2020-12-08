const Delivery = require('../../models/DeliverySchema');
const{Logger} = require('../../utils/index');

module.exports= async(req,res)=> {
    try{
        const{id} = req.params
        const deliveryRequests = await Delivery.find({_id: id})

        return res.status(200).send({
            status: "OK",
            message: "Delivery request fetched successfully",
            payload: deliveryRequests
        })
    }
    catch(error){
        Logger('get-all-deliveryRequests',error)
        res.status(500).send({
            status:'ERROR',
            payload: error.message
        })
    }
}