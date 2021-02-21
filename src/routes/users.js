const { Router } = require('express');
const router = Router();

const { getUser, crearUser, borrarUser} = require('../controllers/users.controller');

router.route('/')
    .get(getUser)
    .post(crearUser)

router.route('/:id')
    .delete(borrarUser)

module.exports = router;