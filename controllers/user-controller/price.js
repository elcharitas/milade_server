else if(requestType === "Delivery" && size==="Small"){
    let distances = distance * 9;
    let timeAmt = time * 20;
    let sumFare= distances + timeAmt + 200

    return res.status(200).send({
        status: "OK",
        message: "Total cost",
        payload: sumFare
    })
}
else if(requestType === "Delivery" && size==="Medium"){
    let distances = distance * 9;
    let timeAmt = time * 20;
    let sumFare= distances + timeAmt + 300

    return res.status(200).send({
        status: "OK",
        message: "Total cost",
        payload: sumFare
    })
}
else if(requestType === "Delivery" && size==="Large"){
    let distances = distance * 9;
    let timeAmt = time * 20;
    let sumFare= distances + timeAmt + 500

    return res.status(200).send({
        status: "OK",
        message: "Total cost",
        payload: sumFare
    })
}