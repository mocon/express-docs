import http from 'http';
import assert from 'assert';

import '../lib/index.js';

describe('Design System Docs Node Server', () => {
    it('should return 200', done => {
        http.get('http://127.0.0.1:8080/1.2.3', res => {
            assert.equal(200, res.statusCode);
            done();
        });
    });
});
