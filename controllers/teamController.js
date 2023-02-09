const { Data } = require('../connect');

const getAllTeams = async (req, res) => {
    try {
        (Data("team")).collectionName.find({}).toArray((err, result) => {
            if (err) throw err;
            res.status(200).json(result);
        });
    } catch (error) {
        res.status(500).json(error);
    }
}

const getTeam = async (req, res) => {
    try {
        const teamId = req.params.id;

        const cursor = (Data("team")).collectionName.find({
            country: teamId
        })
        cursor.forEach(result => {
            res.status(200).json(result);
        })
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = { getTeam, getAllTeams };
