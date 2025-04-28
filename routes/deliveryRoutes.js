const express = require('express');
const router = express.Router();
const deliveryController = require('../controllers/deliveryController');

router.get('/delivery/:userId', deliveryController.getUserDeliveries);
router.post('/delivery', deliveryController.createDelivery);
router.put('/delivery/:id/status', deliveryController.updateDeliveryStatus);
router.post('/delivery/close/:deliveryId', deliveryController.closeDelivery);
router.delete('/delivery/:id', deliveryController.deleteDelivery);

module.exports = router;
