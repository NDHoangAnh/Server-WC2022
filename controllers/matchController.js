const { Data } = require('../connect');

const getAllMatches = async (req, res) => {
    try {
        (Data("match")).collectionName.find({}).toArray((err, result) => {
            if (err) throw err;
            res.status(200).json(result);
        });
    } catch (error) {
        res.status(500).json(error);
    }
}

const getMatch = async (req, res) => {
    try {
        const matchId = req.params.id;

        const cursor = (Data("match")).collectionName.find({
            id: Number(matchId)
        })
        cursor.forEach(result => {
            res.status(200).json(result);
        })
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = { getMatch, getAllMatches };
