const Transactions = require('../../models/transactionmodel');
const {Logger} = require('../../utils/index');

module.exports = async(req,res) =>{
    try{
        const user =await Transactions.find({$or: 
            [{transaction_type: req.query.type}, 
            {user_cloud_uuid: req.query.user}]
        })
        
        return res.status(200).send({
            status: "OK",
            message: "User transaction fetched successfully",
            payload: user
        })
    }   
    catch(error){
        Logger('query-transactions', error);
        return res.status(500).send({
            status:"ERROR",
            payload: error.message
        })
    }
}