const express = require('express');
const os = require('os');
const app = express();

const PORT = 3000;
const VERSION = process.env.VERSION || '1.0.0';

app.get('/', (req, res) => {
    const ip = req.ip;
    const hostname = os.hostname();

    res.send(`
    <p>Adres IP serwera: ${ip}</p>
    <p>Nazwa serwera: ${hostname}</p>
    <p>Wersja aplikacji: ${VERSION}</p>
    `);
});

app.listen(PORT, () => {
    console.log('Aplikacja uruchomiona na porcie ${PORT}');
})