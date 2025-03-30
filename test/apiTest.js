const request = require('supertest');
const { expect } = require('chai');
const config = require('../config/config.js');
const { logInfo } = require('../helpers/helper.js');

describe('API Tests with SuperTest, Mocha, and Chai', function () {
  this.timeout(5000);

  before(async () => {
    logInfo('Starting API tests...');
  });

  it('GET /posts - should return all posts', async () => {
    const res = await request(config.BASE_URL).get('/posts').expect(200);

    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('array');
    expect(res.body.length).to.be.greaterThan(0);
  });

  it('POST /posts - should create a new post', async () => {
    const payload = {
      title: 'foo',
      body: 'bar',
      userId: 1,
    };

    const res = await request(config.BASE_URL)
      .post('/posts')
      .send(payload)
      .expect(201);

    expect(res.status).to.equal(201);
    expect(res.body).to.have.property('id');
    expect(res.body.title).to.equal(payload.title);
  });

  after(async () => {
    logInfo('API tests completed.');
  });
});
