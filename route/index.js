const router = require("express").Router();

const studentCtrl = require('../controller/studentCtrl')


router.get('/Students', studentCtrl.getAll);
router.get('/Student/:id', studentCtrl.getById);
router.post('/Student/:id', studentCtrl.addById);
router.delete('/Student/:id', studentCtrl.deleteById);
router.put('/Student/:id', studentCtrl.updateById);

module.exports = router;

