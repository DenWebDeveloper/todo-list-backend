const express = require('express');
const router = express.Router();

const fs = require('fs');
const data = require('../data/data');


router.post('/', function (req, res) {
    const {login,userId} = req.body;
    data[login].deviceId = userId;
    fs.writeFile('./data/data.json', JSON.stringify(data), 'utf8', (err) => {
        if (err) {
            res.json({status: 'error', message: err})
        } else {
            res.json({status: 'Видалено'})
        }
    });
});

module.exports = router;
