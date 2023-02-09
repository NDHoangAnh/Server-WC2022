const { Data } = require('../connect');

// lấy danh sách tất cả hlv
const getAllCoach = async (req, res) => {
    try {
        (Data("Coach")).collectionName.find({}).toArray((err, result) => {
            if (err) throw err;
            res.status(200).json(result);
        })
    } catch (error) {
        res.status(500).json(error);
    }
}

// lấy hlv theo id
const getCoach = async (req, res) => {
    try {
        const coachId = req.params.id;
        const cursor = (Data("Coach")).collectionName.find({
            id: coachId
        })
        cursor.forEach(result => {
            res.status(200).json(result);
        })
    } catch (error) {
        res.status(500).json(error);
    }
}

// lấy hlv theo tên đội
const getCoachByTeamId = async (req, res) => {
    try {
        const team = req.params.teamId;

        const cursor = (Data("Coach")).collectionName.find({
            idTeam: team
        })

        cursor.forEach(result => {
            res.status(200).json(result)
        })
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = { getCoach, getAllCoach, getCoachByTeamId };
