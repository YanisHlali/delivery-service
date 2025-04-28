const request = require('supertest');
const express = require('express');
const deliveryRoutes = require('../routes/deliveryRoutes');

jest.mock('../models/deliveryModel', () => ({
  create: jest.fn().mockResolvedValue(123),
  findByUserId: jest.fn().mockResolvedValue([{ id: 1, delivery_status: 'en_attente' }]),
  updateStatus: jest.fn().mockResolvedValue(),
  closeDelivery: jest.fn().mockResolvedValue(),
  delete: jest.fn().mockResolvedValue(),
}));

const app = express();
app.use(express.json());
app.use('/', deliveryRoutes);

describe('Delivery API', () => {
  it('POST /delivery crée une livraison', async () => {
    const res = await request(app)
      .post('/delivery')
      .send({ orderId: 1, deliveryPersonId: 5 });
    
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('message', 'Delivery created');
    expect(res.body).toHaveProperty('id', 123);
  });

  it('GET /delivery/:userId récupère les livraisons', async () => {
    const res = await request(app).get('/delivery/5');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body[0]).toHaveProperty('delivery_status', 'en_attente');
  });

  it('PUT /delivery/:id/status met à jour le statut', async () => {
    const res = await request(app)
      .put('/delivery/1/status')
      .send({ status: 'en_cours' });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Delivery status updated');
  });

  it('POST /delivery/close/:deliveryId clôture une livraison', async () => {
    const res = await request(app).post('/delivery/close/1');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Delivery closed');
  });

  it('DELETE /delivery/:id supprime une livraison', async () => {
    const res = await request(app).delete('/delivery/1');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Delivery deleted');
  });
});
