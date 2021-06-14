const request = require('supertest');
const app = require('../app');

describe('Test the root path', () => {
    test('It should respond with the GET method.', done => {
        request(app)
        .get('/')
        .then(response => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
});

describe('Test the login root path', () => {
    test('It should respond with the GET method.', done => {
        request(app)
        .get('/login')
        .then(response => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
});

describe('Test the oAuth login root path.', () => {
    test('It should respond with the GET method.', done => {
        request(app)
        .get('/login/oauth')
        .then(response => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
});

describe('Test the registration root path.', () => {
    test('It should respond with the GET method.', done => {
        request(app)
        .get('/registration')
        .then(response => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
});

describe('Test the oAuth registration root path.', () => {
    test('It should respond with the GET method.', done => {
        request(app)
        .get('/registration/oauth')
        .then(response => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
});