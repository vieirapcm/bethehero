const express = require("express")

const app = express();

app.get('/', (request, response) => {
    return response.json({
        nome: 'Pedro',
        evento: 'Omnistack 11'
    });
});

app.listen(3333);