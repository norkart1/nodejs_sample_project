const request = require('supertest');
const app = require('../src/app');

describe('API Tests', () => {
    it('should return Hello, Node.js!', async () => {
        const res = await request(app).get('/api');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message', 'Hello, Node.js!');
    });
});
