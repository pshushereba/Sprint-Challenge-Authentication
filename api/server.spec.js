const request = require('supertest');
const server = require('./server.js');

describe('server.js', () => {
    describe('POST /register', () => {
        it('should return 201 created', async () => {
            const user = {username: "test", password: "password"}
            const res = await request(server).post('/api/auth/register').send(user);
            expect(res.status).toBe(201);
        });

        it('should return JSON', async () => {
            const user = {username: "sabrina", password: "password"}
            const res = await request(server).post('/api/auth/register').send(user);
            expect(res.type).toBe('application/json');
        })
    });
    
    describe('POST /login', () => {
        it('should return 200 OK', async () => {
            const user = {username: "sabrina", password: "password"}
            const res = await request(server).post('/api/auth/login').send(user);
            expect(res.status).toBe(200);
        })
    })
    
})