const express = require('express');
const fs = require('fs');
const router = express.Router();
const data = require('../data/data');

router.post('/', function (req, res) {

    const {type, login} = req.body;
    if (type === 'registration' && data[login]) {
        res.json({"tasks": data[login], login});
    } else if (type === 'create') {
        data[login] = {
            tasks: {
                "_c0zeyau2c": {
                    "title": "Перше завдання",
                    "description": "Опис",
                    "date": {
                        "from": "04.16.2018",
                        "to": "04.18.2018"
                    }
                }
            },
            login
        };

        fs.writeFile('../data/data.json', JSON.stringify(data), 'utf8', (err) => {
            if (err) {
                res.status(500);
                res.json({status: 'error', message: err})
            } else {
                res.json({login, tasks: data[login].tasks})
            }
        });
    } else {
        res.status(500);
        res.json({status: 'Bad', message: 'Помилка виберіть створити акаунт'})
    }
});


module.exports = router;
