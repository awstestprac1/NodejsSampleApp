const request = require('supertest');
const app = require('../app');

describe('Sample Node App', () => {
  it('GET / should return Hello, World!', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello, World!');
  });

  it('GET /api should return JSON response', async () => {
    const response = await request(app).get('/api');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ message: 'This is a sample API response' });
  });
});
