const convertMongoTimeToNormalTime = (mongoTimeStamp) => {

    const mongoDate = new Date(mongoTimeStamp);

// Convert MongoDB Date to a normal time format
    const normalTime = mongoDate.toLocaleString().split(',')[0]; // Uses the default locale

    return normalTime
}

module.exports = {convertMongoTimeToNormalTime}