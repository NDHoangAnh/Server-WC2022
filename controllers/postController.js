const { Data } = require('../connect');

// lấy bài báo về 1 đội
const getPostAboutTeam = async (req, res) => {
    try {
        const id = req.params.idTeam;
        Data("post").collectionName
            .find({
                type: "teamPost",
                teamId: id
            })
            .project({ teamId: 1, header: 1, URL: 1, imgUrl: 1 })
            .toArray((err, result) => {
                if (err) throw err;
                res.status(200).json(result);
            })
    } catch (error) {
        res.status(500).json(error);
    }
}

// lấy bài báo về trận đấu
const getPostAboutMatch = async (req, res) => {
    try {
        const id = req.params.matchId;
        Data("post").collectionName
            .find({
                type: "matchPost",
                matchId: Number(id)
            })
            .project({ matchId: 1, header: 1, URL: 1, imgUrl: 1 })
            .toArray((err, result) => {
                if (err) throw err;
                res.status(200).json(result);
            })
    } catch (error) {
        res.status(500).json(error);
    }
}

// lấy danh sách tất cả bài báo
const getAllPost = async (req, res) => {
    try {
        Data("post").collectionName
            .find({})
            .project({ header: 1, URL: 1, imgUrl: 1 })
            .toArray((err, result) => {
                if (err) throw err;
                res.status(200).json(result);
            })
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = { getPostAboutTeam, getPostAboutMatch, getAllPost };
