const Delivery = require('../models/deliveryModel');

const deliveryController = {
  async createDelivery(req, res) {
    const { orderId, deliveryPersonId } = req.body;
    try {
      const id = await Delivery.create(orderId, deliveryPersonId);
      res.status(201).json({ message: 'Delivery created', id });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  },

  async getUserDeliveries(req, res) {
    const { userId } = req.params;
    try {
      const deliveries = await Delivery.findByUserId(userId);
      res.status(200).json(deliveries);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  },

  async updateDeliveryStatus(req, res) {
    const { id } = req.params;
    const { status } = req.body;
    try {
      await Delivery.updateStatus(id, status);
      res.status(200).json({ message: 'Delivery status updated' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  },

  async closeDelivery(req, res) {
    const { deliveryId } = req.params;
    try {
      await Delivery.closeDelivery(deliveryId);
      res.status(200).json({ message: 'Delivery closed' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  },

  async deleteDelivery(req, res) {
    const { id } = req.params;
    try {
      await Delivery.delete(id);
      res.status(200).json({ message: 'Delivery deleted' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  }
};

module.exports = deliveryController;
