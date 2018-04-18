const express = require('express');
const router = express.Router();

const fs = require('fs');
const data = require('../data/data');
const pushSend = require('../modules/sendPush');


router.delete('/',function (req, res) {
    const {login, id} = req.body;
    console.log(req.body);
    delete data[login].tasks[id];
        fs.writeFile('./data/data.json', JSON.stringify(data), 'utf8', (err) => {
        if (err) {
            res.json({status: 'error', message: err})
        } else {
            res.json({status: 'Видалено'})
        }
    });
});

router.put('/',function (req, res) {
    const {id,title,description,date,done} = req.body.data;
    console.log(id);
    data[req.body.login].tasks[id] = {
        title,description,date,done
    };
    fs.writeFile('./data/data.json', JSON.stringify(data), 'utf8', (err) => {
        if (err) {
            res.json({status: 'error', message: err})
        } else {
            res.json({status: 'Всеc збережено'})
        }
    });
});

setTimeout(()=>{
    let userID = data['Den'].deviceId;
    if(userID) {
        userID = userID.str.substring(40);
        pushSend(userID);
    }
    console.log('відправлено');
},10000);

module.exports = router;
