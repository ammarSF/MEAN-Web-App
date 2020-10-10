var express = require('express');
var router = express.Router();
var Restaurant = require('../models/dataSchema');

router.post('/create', (req, res, next) => {
    var newCountry = new Restaurant({
        name: req.body.name,
        city: req.body.city
    });
    newCountry.save((err, restaurant) => {
        if (err)
            res.status(500).json({ errmsg: err })
        res.status(200).json({ msg: restaurant })
    });
});

router.get('/read', (req, res, next) => {
    Restaurant.find({}, (err, restaurants) => {
        if (err)
            res.status(500).json({ errmsg: err })
        res.status(200).json({ msg: restaurants })
    });
});

router.put('/update', (req, res, next) => {
    Restaurant.findById(req.body._id, (err, restaurant) => {
        if (err)
            res.status(500).json({ errmsg: err })
        restaurant.name = req.body.name;
        restaurant.capital = req.body.capital;
        restaurant.save((err, restaurant) => {
            if (err)
                res.status(500).json({ errmsg: err })
            res.status(200).json({ msg: restaurant })
        });
    });
});

router.delete('/delete/:id', (req, res, next) => {
    Restaurant.findOneAndRemove({ _id: req.params.id }, (err, restaurant) => {
        if (err)
            res.status(500).json({ errmsg: err })
        res.status(200).json({ msg: restaurant })
    });
});

module.exports = router;