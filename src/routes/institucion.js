const institucionRoutes = require('express').Router();

institucionRoutes.route('/').get((req, res)=>{



    var data = [
        {Nombre: 'Anderson', Edad: 24},
        {Nombre: 'Fernando', Edad: 29},
        {Nombre: 'Andy', Edad: 23},
    ];

    res.json(data);


});


module.exports = institucionRoutes;