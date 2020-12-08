const Transactions = require('../../models/transactionmodel');
const {Logger} = require('../../utils/index');

module.exports = async(req,res) =>{
    try{
        const driver =await Transactions.find({
            $or: [{transaction_type: req.query.type}, 
            {driver_cloud_uuid: req.query.driver}]})

        return res.status(200).send({
            status: "OK",
            message: "Driver transactions fetched successfully",
            payload: driver
        })
    }   
    catch(error){
        Logger('query-user-transactions', error);
        return res.status(500).send({
            status:"ERROR",
            payload: error.message
        })
    }
}


/*
       const user =await Transactions.find({
            $and: [{transaction_type: req.query.type}, 
            {driver_cloud_uuid: req.query.driver}]})
*/