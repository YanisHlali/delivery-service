const db = require('../config/db');

const Delivery = {
  async create(orderId, deliveryPersonId) {
    const [result] = await db.execute(
      'INSERT INTO deliveries (order_id, delivery_person_id) VALUES (?, ?)',
      [orderId, deliveryPersonId]
    );
    return result.insertId;
  },

  async findByUserId(userId) {
    const [rows] = await db.execute(
      'SELECT * FROM deliveries WHERE delivery_person_id = ?',
      [userId]
    );
    return rows;
  },

  async updateStatus(id, status) {
    const [result] = await db.execute(
      'UPDATE deliveries SET delivery_status = ? WHERE id = ?',
      [status, id]
    );
    return result;
  },

  async closeDelivery(deliveryId) {
    const [result] = await db.execute(
      'UPDATE deliveries SET delivery_status = "livree", delivery_time = NOW() WHERE id = ? AND delivery_status != "livree"',
      [deliveryId]
    );
    return result;
  },

  async delete(id) {
    const [result] = await db.execute(
      'DELETE FROM deliveries WHERE id = ?',
      [id]
    );
    return result;
  }
};

module.exports = Delivery;
