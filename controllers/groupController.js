const { Data } = require('../connect');

const getAllGroup = async (req, res) => {
    try {
        (Data("Groups")).collectionName.find({}).toArray((err, result) => {
            if (err) throw err;
            res.status(200).json(result);
        });
    } catch (error) {
        res.status(500).json(error);
    }
}

// lấy thông tin về 1 bảng đấu
const getGroup = async (req, res) => {
    try {
        const groupName = req.params.letter;
        const cursor = (Data("Groups")).collectionName.find({
            letter: groupName
        })
        cursor.forEach(result => {
            res.status(200).json(result);
        })
    } catch (error) {
        res.status(500).json(error);
    }
}

// lấy thông tin các trận đấu vòng bảng của 1 đội
const getGroupByTeamId = async (req, res) => {
    try {
        const id = req.params.idTeam;
        const cursor = Data("match").collectionName.find({
            stage_name: 'First stage',
            $or: [
                {
                    home_team_country: id
                },
                {
                    away_team_country: id
                }
            ]
        })
        cursor.toArray((err, result) => {
            if (err) throw err;
            res.status(200).json(result);
        })
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = { getGroup, getAllGroup, getGroupByTeamId };
