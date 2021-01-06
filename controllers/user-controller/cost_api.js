module.exports = async(req,res) => {
    try{
        const{distance, time, requestType, size, economy_choice} = req.body
        
        let rideBaseFare = 350
        let bikeBaseFare = 70

        if(requestType === "Bike"){
            if(distance <= 5) return res.status(200).send({status: 'OK', message: 'Total cost', payload: 100})
            
            else if(distance <= 12){
                let distances = distance * 8;
                let timeAmt = time * 10;
                let sumFare=  bikeBaseFare + distances + timeAmt
    
                return res.status(200).send({
                    status: "OK",
                    message: "Total cost",
                    payload: sumFare
                })
            }
            else if(distance >=13){
                let distances = distance * 10 ;
                let timeAmt = time * 15;
                let sumFare=  bikeBaseFare + distances + timeAmt
    
                return res.status(200).send({
                    status: "OK",
                    message: "Total cost",
                    payload: sumFare
                })
            }
        }

        else if(requestType === "Delivery"){
            if(distance <= 5) return res.status(200).send({status: 'OK', message: 'Total cost', payload: 100})
            
            else if(distance <= 12){
                let distances = distance * 8;
                let timeAmt = time * 10;
                let sumFare=  bikeBaseFare + distances + timeAmt
    
                return res.status(200).send({
                    status: "OK",
                    message: "Total cost",
                    payload: sumFare
                })
            }
            else if(distance >=13){
                let distances = distance * 10 ;
                let timeAmt = time * 15;
                let sumFare=  bikeBaseFare + distances + timeAmt
    
                return res.status(200).send({
                    status: "OK",
                    message: "Total cost",
                    payload: sumFare
                })
            }
        }
        else if(requestType==="Ride" && economy_choice=="standard"){
            if(distance <= 5 && time <= 10) return res.status(200).send({status: 'OK', message: 'Total cost', payload: 350})

            else if(distance <= 15){
                let distances = distance * 15;
                let timeAmt = time * 25;
                let sumFare= rideBaseFare + distances + timeAmt
    
                return res.status(200).send({
                    status: "OK",
                    message: "Total cost",
                    payload: sumFare
                })
            }
            else if(distance >= 16){
                let distances = distance * 15;
                let timeAmt = time * 20;
                let sumFare= rideBaseFare + distances + timeAmt
    
                return res.status(200).send({
                    status: "OK",
                    message: "Total cost",
                    payload: sumFare
                })
            }
        }
        else if(requestType=="Ride" && economy_choice=="comfort2"){
            if(distance <= 5 && time <= 10) return res.status(200).send({status: 'OK', message: 'Total cost', payload: 550})

            else if(distance <= 15){
                let distances = distance * 15;
                let timeAmt = time * 25;
                let sumFare= rideBaseFare + distances + timeAmt + 200
    
                return res.status(200).send({
                    status: "OK",
                    message: "Total cost",
                    payload: sumFare
                })
            }

            else if(distance >= 16){
                let distances = distance * 15;
                let timeAmt = time * 20;
                let sumFare= rideBaseFare + distances + timeAmt + 200
    
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