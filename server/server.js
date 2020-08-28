const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use('/', (req, res) => {
    res.send(
        [
            {
                name: 'Markie',
                animal: 'dog',
                age: 14
            },
            {
                name: 'Dandyio',
                animal: 'bird',
                age: 17
            },
            {
                name: 'Manio',
                animal: 'cat',
                age: 45
            }
        ]
    );

});

app.listen(PORT, console.log(`${PORT} running server.js`));