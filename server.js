const express = require('express');
const app = express();
const port = 8000;

const Vigenere = require('caesar-salad').Vigenere;
const password = 'HarryPotter';


app.get('/:message', (req,res)=>{
    res.send(req.params.message)
});

app.get('/encode/:message', (req, res) => {
    const encodeMessage = Vigenere.Cipher(password).crypt(req.params.message);
    res.send(encodeMessage);
});

app.get('/decode/:message', (req, res) => {
    const decodeMessage = Vigenere.Decipher(password).crypt(req.params.message);
    res.send(decodeMessage);
});

app.listen(port, () => {
    console.log('We are live on ' + port);
});