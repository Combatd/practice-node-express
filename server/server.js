const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use('/', () => {
    console.log('root route was hit!');
});

app.listen(PORT, console.log(`${PORT} running server.js`));