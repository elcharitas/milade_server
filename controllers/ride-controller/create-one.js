const Ride = require('../../models/RideSchema');
const User = require('../../models/userschema');
const Driver = require('../../models/driverschema');
const{Logger} = require('../../utils/index');

module.exports= async(req,res)=> {
    try{
        const {
            destination,
            destinationLat,
            destinationLng,
            pickup,
            pickupLat,
            pickupLng,
            driverID,
            driverCloudUUID,
            totalRequestCost,
            totalRequestDistance,
            totalRequestDuration,
            requestPayType,
            requestPaymentID,
            requestPayStatus,
            requestMadeStatus,
            requestEconomyChoice,
            userCloudUUID,
            userID,
            requestCreatedAt
        } = req.body

        if(requestMadeStatus === "completed"){
            const user = await User.findOne({cloud_uuid: userCloudUUID});
            const driver = await Driver.findOne({cloud_uuid: driverCloudUUID});
            if(!user){
                return res.status(404).send({
                    status: "ERROR",
                    message: "User not found"
                })
            }
            else if(!driver){
                return res.status(404).send({
                    status: "ERROR",
                    message: "Driver not found"
                })  
            }
            else{
                const rideRequest = new Ride({
                    destination,
                    destinationLat,
                    destinationLng,
                    pickup,
                    pickupLat,
                    pickupLng,
                    driverID,
                    driverCloudUUID,
                    totalRequestCost,
                    totalRequestDistance,
                    totalRequestDuration,
                    requestPayType,
                    requestPayStatus,
                    requestPaymentID,
                    requestMadeStatus,
                    requestEconomyChoice,
                    userCloudUUID,
                    userID,
                    requestCreatedAt
                })
                await rideRequest.save()
                await user.updateOne({$inc: {ride_requests: 1}});
                await driver.updateOne({$inc: {ride_requests: 1}});
                return res.status(201).send({
                    status: "OK",
                    message: "Ride request completed succesfully",
                    payload: rideRequest
                })
            }
        }
        else{
            const rideRequest = new Ride({
                destination,
                destinationLat,
                destinationLng,
                pickup,
                pickupLat,
                pickupLng,
                totalRequestCost,
                totalRequestDistance,
                totalRequestDuration,
                requestPayType,
                requestPayStatus,
                requestMadeStatus,
                requestEconomyChoice,
                userCloudUUID,
                userID,
                requestCreatedAt
            })
            await rideRequest.save()
            return res.status(201).send({
                status: "OK",
                message: "Ride request declined",
                payload: rideRequest
            })
        }
        
    }
    catch(error){
        Logger('create-ride-request',error)
        res.status(500).send({
            status:'ERROR',
            payload: error.message
        })
    }
}