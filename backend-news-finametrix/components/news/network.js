const express = require('express');

const response = require('../../network/response');
const controller = require('./controller');

const router = express.Router();

router.get('/news/:id', (req, res) => {

    controller.getNew(req.params.id)
        .then((dataNew) => {
            response.success(req, res, dataNew, 200);
        })
        .catch(err => {
            response.error(req, res, 'Unexpected error', err);
        });

});

router.get('/news', (req, res) => {

    const filter = req.query.type || null;

    controller.listNews(filter)
        .then((news) => {
            response.success(req, res, news, 200);
        })
        .catch(err => {
            response.error(req, res, 'Unexpected error', err);
        });

});

router.post('/news', (req, res) => {

    controller.addNew(req.body.title, req.body.descr, req.body.content, req.body.author)
        .then((newPosted) => {
            response.success(req, res, newPosted, 201);
        })
        .catch(err => {
            response.error(req, res, 'Información no válida', 400, err);
        })

});

router.delete('/news/:id', (req, res) => {

    controller.deleteNew(req.params.id)
        .then(() => {
            response.success(req, res, `Mensaje con id ${req.params.id} eliminado`, 200);
        })
        .catch(err => {
            response.error(req, res, 'Error interno', 500, err);
        });

});

router.put('/news/:id', (req, res) => {

    controller.updateNew(req.params.id, req.body)
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch(err => {
            response.error(req, res, 'Error interno', 500, err);
        });

});

module.exports = router;