
module.exports = async(req,res) => {
    try{
        const{distance, time, requestType, size, economy_choice} = req.body
        
        if(requestType === "Bike"){
            let distances = distance * 5;
            let timeAmt = time * 5;
            let sumFare= distances + timeAmt

            return res.status(200).send({
                status: "OK",
                message: "Total cost",
                payload: sumFare
            })
        }
        else if(requestType === "Delivery" && size==="Small"){
            let distances = distance * 2;
            let timeAmt = time * 2;
            let sumFare= distances + timeAmt + 200

            return res.status(200).send({
                status: "OK",
                message: "Total cost",
                payload: sumFare
            })
        }
        else if(requestType === "Delivery" && size==="Medium"){
            let distances = distance * 2;
            let timeAmt = time * 2;
            let sumFare= distances + timeAmt + 300

            return res.status(200).send({
                status: "OK",
                message: "Total cost",
                payload: sumFare
            })
        }
        else if(requestType === "Delivery" && size==="Large"){
            let distances = distance * 2;
            let timeAmt = time * 2;
            let sumFare= distances + timeAmt + 500

            return res.status(200).send({
                status: "OK",
                message: "Total cost",
                payload: sumFare
            })
        }
        else if(requestType === "Delivery"){
            let distances = distance * 2;
            let timeAmt = time * 2;
            let sumFare= distances + timeAmt

            return res.status(200).send({
                status: "OK",
                message: "Total cost",
                payload: sumFare
            })
        }
        else if(requestType==="Ride" && economy_choice=="standard"){
            let distances = distance * 15;
            let timeAmt = time * 15;
            let sumFare= distances + timeAmt

            return res.status(200).send({
                status: "OK",
                message: "Total cost",
                payload: sumFare
            })
        }
        else if(requestType==="Ride" && economy_choice==="comfort2"){
            let distances = distance * 20;
            let timeAmt = time * 20;
            let sumFare= distances + timeAmt

            return res.status(200).send({
                status: "OK",
                message: "Total cost",
                payload: sumFare
            })
        }
        else{
            return res.status(404).send({
                status: "ERROR",
                message: "Request type not specified"
            })
        }
    }
    catch(error){
        console.log(error)
        return res.status(503).send({
            status: "ERROR",
            payload: error.message
        })
    }
}