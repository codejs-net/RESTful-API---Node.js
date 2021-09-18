const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.get('/',userController.getAll);
router.get('/:id',userController.getOne);
router.post('/', userController.create);
router.put('/:id', userController.update);
router.delete('/:id', userController.destroy);

module.exports  = router;