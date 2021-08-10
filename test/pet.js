const { expect } = require('chai');
const supertest = require('supertest');

const api = supertest('https://petstore.swagger.io');

const path = '/v2/pet/findByStatus?';

function getSoldList() {
    return api.get(path).query({ status: 'sold' })
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json');
  }
  
  describe('@get sold', () => {
    it(`@get it success get user list data`, async () => {
      const response = await getSoldList();
      expect(response.status).to.equal(200);
      console.log(response.body);
    });
  });