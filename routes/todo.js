var express = require('express');
var Datastore = require('nedb');
var db = new Datastore({
    filename: 'db/offers.db',
    autoload: true
});
var router = express.Router();

var autoIncrId = 1;

/* GET users listing. */
router.post('/add', function(req, res) {
    var doc = {
        _id: autoIncrId++,
        name: req.body.name,
        title: req.body.title,
        addedBy: req.body.addedBy
    };
    console.log(doc);
    db.insert(doc, function(err, newDoc) {
        if (err) {
            console.log('error', err);
        }
    });
});

router.get('/get/:name', function(req, res) {
    db.find({
        name: req.params.name
    }, function(err, docs) {
        res.json(docs);
        console.log(docs);
    });
});

module.exports = router;