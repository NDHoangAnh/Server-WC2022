const { Data } = require('../connect');

// lấy danh sách tất cả các trận từ vòng knockout (round of 16, tứ kết, bán kết, chung kết)
const getAllKnockoutStage = (req, res) => {
    try {
        (Data("match")).collectionName.find({
            stage_name: { $ne: 'First stage' }
        }).toArray((err, result) => {
            if (err) throw err;
            res.status(200).json(result);
        })
    } catch (error) {
        res.status(500).json(error);
    }
}

// lấy danh sách các trận đấu từ vòng knockout của 1 đội
const getKnockoutStageById = async (req, res) => {
    try {
        const id = req.params.idTeam;
        (Data("match")).collectionName.find({
            stage_name: { $ne: 'First stage' },
            $or: [
                {
                    home_team_country: id
                },
                {
                    away_team_country: id
                }
            ]
        }).toArray((err, result) => {
            if (err) throw err;
            res.status(200).json(result);
        })
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = { getAllKnockoutStage, getKnockoutStageById };
