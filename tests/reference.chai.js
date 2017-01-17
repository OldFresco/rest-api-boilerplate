import * as chai from 'chai';

import server from './test-helpers/server.mock';
import settings from '../app/config/settings';

const expect = chai.expect;
const version = settings.apiVersion;

describe('Call to GET health status at /health endpoint', () => {
  describe('#200', () => {
    it('should return json', (done) => {
      server.get(`${version}/health`)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.type).to.eql('application/json');
          done();
        });
    });

    it('should return the API version', (done) => {
      server.get(`${version}/health`)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body.version).to.eql(version);
          done();
        });
    });

    it('should return an OK status', (done) => {
      server.get(`${version}/health`)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body.health).to.eql('ok');
          done();
        });
    });
  });
});
