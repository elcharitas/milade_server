module.exports = async(req,res) => {
    try{
        const{distance, time, requestType, size, economy_choice} = req.body
        
        let rideBaseFare = 175
        let bikeBaseFare = 35
        let deliveryBaseFare = 400

        if(requestType === "Bike"){
            if(distance <= 5 && time <= 10) return res.status(200).send({status: 'OK', message: 'Total cost', payload: 100})
            else{
                let distances = distance * 5;
                let timeAmt = time * 8;
                let sumFare=  bikeBaseFare + distances + timeAmt
    
                return res.status(200).send({
                    status: "OK",
                    message: "Total cost",
                    payload: sumFare
                })
            }
        }

        else if(requestType === "Delivery"){
            if(distance <= 5 && time <= 10) return res.status(200).send({status: 'OK', message: 'Total cost', payload: 100})
            else{
                let distances = distance * 5;
                let timeAmt = time * 8;
                let sumFare= distances + timeAmt
    
                return res.status(200).send({
                    status: "OK",
                    message: "Total cost",
                    payload: sumFare
                })
            }
        }
        else if(requestType==="Ride" && economy_choice=="standard"){
            if(distance <= 5 && time <= 10) return res.status(200).send({status: 'OK', message: 'Total cost', payload: 350})
            else{
                let distances = distance * 10;
                let timeAmt = time * 15;
                let sumFare= rideBaseFare + distances + timeAmt
    
                return res.status(200).send({
                    status: "OK",
                    message: "Total cost",
                    payload: sumFare
                })
            }
        }
        else if(requestType==="Ride" && economy_choice==="comfort2"){
            if(distance <= 5 && time <= 10) return res.status(200).send({status: 'OK', message: 'Total cost', payload: 350})
            else{
                let distances = distance * 10;
                let timeAmt = time * 20;
                let sumFare= rideBaseFare + distances + timeAmt 
                
                return res.status(200).send({
                    status: "OK",
                    message: "Total cost",
                    payload: sumFare
                })
            }
 
        }
        else{
            return res.status(404).send({
                status: "ERROR",
                message: "Request type not specified"
            })
        }
    }
    catch(error){
        return res.status(503).send({
            status: "ERROR",
            payload: error.message
        })
    }
}