module.exports = async(req,res) => {
    try{
        const{distance, time, requestType,economy_choice} = req.body
        let rideBaseFare = 350
        if(requestType=="Ride" && economy_choice=="standard"){
            if(distance <= 5 && time <= 10) return res.status(200).send({status: 'OK', message: 'Total cost', payload: 350})

            else if(distance == 6 <= 15){
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

            else if(distance == 6 <= 15){
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
    }
    catch(error){
        return res.status(500).send({
            status: 'ERROR',
            payload: error.message 
        })
    }
}