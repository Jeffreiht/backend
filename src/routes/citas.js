const { Router } = require('express');
const router = Router();

const { getCitas, crearCita, actualizarCita, borrarCita, getCita } = require('../controllers/citas.controller');

router.route('/')
    .get(getCitas)
    .post(crearCita)

router.route('/:id')
    .get(getCita)
    .put(actualizarCita)
    .delete(borrarCita)

module.exports = router;