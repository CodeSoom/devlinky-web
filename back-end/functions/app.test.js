const request = require('supertest');

const app = require('./app');

describe('app', () => {
  context('with path /hello-devlink-world', () => {
    it('responses hello-devlink-world', async () => {
      const { ok, status, body, text } = await request(app).get('/hello-devlink-world');
      expect(ok).toBe(true);
      expect(status).toBe(200);
      expect(body).toBeDefined();
      expect(text).toBe('Hello, Devlink world!!');
    });
  });
});
