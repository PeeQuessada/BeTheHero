const request = require('supertest');
const app = require('../../src/app');
const connecton = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(async () => {
        await connecton.migrate.rollback();
        await connecton.migrate.latest();
    });

    afterAll(async() => {
        await connecton.destroy();
    })

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
        .post('/ongs')
        .send({ 
            name: "teste",
            email: "pedro@gamil.com",
            whatsapp: "11123456789",
            city: "Santo Andre",
            uf: "SP" 
        });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});