const { Data } = require('../connect');

const getAllPlayers = async (req, res) => {
    try {
        (Data("player")).collectionName.find({}).toArray((err, result) => {
            if (err) throw err;
            res.status(200).json(result);
        });
    } catch (error) {
        res.status(500).json(error);
    }
}

const getPlayer = async (req, res) => {
    try {
        const playerId = req.params.id;

        const cursor = (Data("player")).collectionName.find({
            id: playerId
        })
        cursor.forEach(result => {
            res.status(200).json(result);
        })
    } catch (error) {
        res.status(500).json(error);
    }
}

const getTopPlayer = async (req, res) => {
    try {
        const cursor = Data("player").collectionName.find({
            isTop50: true
        })
        cursor.toArray((err, result) => {
            if (err) throw err;
            res.status(200).json(result)
        })
    } catch (error) {
        res.status(500).json(error);
    }
}

const getPlayerByTeam = async (req, res) => {
    try {
        const id = req.params.teamId;
        const cursor = Data("player").collectionName.find({
            idTeam: id
        })
        cursor.toArray((err, result) => {
            if (err) throw err;
            res.status(200).json(result)
        })
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = { getPlayer, getAllPlayers, getTopPlayer, getPlayerByTeam };
