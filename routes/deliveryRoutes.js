const express = require('express');
const router = express.Router();
const deliveryController = require('../controllers/deliveryController');
const authenticateToken = require('../middlewares/authMiddleware');

router.get('/delivery/:userId', authenticateToken, deliveryController.getUserDeliveries);
router.post('/delivery', authenticateToken, deliveryController.createDelivery);
router.put('/delivery/:id/status', authenticateToken, deliveryController.updateDeliveryStatus);
router.post('/delivery/close/:deliveryId', authenticateToken, deliveryController.closeDelivery);
router.delete('/delivery/:id', authenticateToken, deliveryController.deleteDelivery);

module.exports = router;
