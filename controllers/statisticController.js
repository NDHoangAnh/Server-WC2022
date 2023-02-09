const { Data } = require('../connect');

// lấy thống kê của giải đấu 
const getStatistic = async (req, res) => {
    try {
        const cursor = (Data("statistic")).collectionName.find({})
        cursor.forEach(result => {
            res.status(200).json(result);
        })

    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = { getStatistic };
