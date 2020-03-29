const connection = require('../database/connection');

module.exports = {
    async create(require, response) {

        const { id } = require.body;

        const ong = await connection('ongs')
            .where('id', id)
            .select('name')
            .first();
        
        if (!ong) {
            return response.json({ message: 'ONG not found.' })
        }

        return response.json(ong)
    }
}