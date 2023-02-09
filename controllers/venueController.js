const { Data } = require('../connect');

const getAllVenue = async (req, res) => {
    try {
        (Data("venue")).collectionName.find({}).toArray((err, result) => {
            if (err) throw err;
            res.status(200).json(result);
        });
    } catch (error) {
        res.status(500).json(error);
    }
}

const getVenue = async (req, res) => {
    try {
        const venueId = req.params.id;

        const cursor = (Data("venue")).collectionName.find({
            id: venueId
        })
        cursor.forEach(result => {
            res.status(200).json(result);
        })
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = { getVenue, getAllVenue };
