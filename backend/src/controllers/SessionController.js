const connection = require('../database/connection');

module.exports = {
    async create(require, response) {

        const { ong_id } = require.body;

        const ong = await connection('ongs')
            .where('id', ong_id)
            .select('name')
            .first();
        
        if (!ong) {
            return response.json({ message: 'ONG not found.' })
        }

        return response.json(ong)
    }
}