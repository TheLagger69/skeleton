const router = require('express').Router();
const Prueba = require('../model/prueba');

router.get("/",function (req, res) {
    let mundo = new Prueba({hola:"mundo"});
    mundo.save(
        function (err, mundo) {
            if(err)
                return console.log(err);
            console.log('Guardamos' + JSON.stringify(mundo));
        }
    );
    Prueba.find(function (err, holas) {
        if (err) return console.error(err);
        console.log(holas);
        res.send(holas)
    });
});
module.exports = router;