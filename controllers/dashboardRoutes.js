const router = require('express').Router();

const { User, House } = require('../models');

router.get('/', (req, res) => {
    House.findAll({})
        .then((dbHouse) => {
            const houses = dbHouse.map((house) => house.get({
                plain: true
            }))
            res.render('house', { houses })
        })

});