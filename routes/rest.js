const express = require('express');
const router = express.Router();


router.get('/', function (req, res) {
        res.send("OK")
});

router.get('/notifications', function (req, res) {
    res.send("OK")
});

router.get('/tests/init', function (req, res) {
    res.send({
        11: {
            id: 11,
            img: '/assets/img/preparation-logo/naftazin.jpg',
            name: 'tests Аспірин',
            endDate: '20.12.2018',
            description: '2Тут буде опис чи коротке повідомлення. Чи текс який не сильно важливий'
        },
        33: {
            id: 33,
            img: '/assets/img/preparation-logo/naftazin.jpg',
            name: 'tests Нафтазін',
            endDate: '29.12.2018',
            description: 'Тут буде опис чи коротке повідомлення. Чи текс який не сильно важливий'
        }
    })
});

router.get('/courses/init', function (req, res) {
        res.send({
            5: {
                id: 5,
                bookmark: true,
                img: './assets/img/preparation-logo/naftazin.jpg',
                name: 'Аспірин',
                description: '2Тут буде опис чи коротке повідомлення. Чи текс який не сильно важливий'
            },
            12: {
                id: 12,
                bookmark: false,
                img: './' +
                'assets/img/preparation-logo/naftazin.jpg',
                name: 'Нафтазін',
                description: 'Тут буде опис чи коротке повідомлення. Чи текс який не сильно важливий'
            }
        })
});

router.get('/courses/save/bookmark', function (req, res) {
    res.send("OK")
});

module.exports = router;
