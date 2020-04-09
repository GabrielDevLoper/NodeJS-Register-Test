const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

mongoose.connect('mongodb+srv://hpgabriel:hp18360515@cluster0-ohklh.mongodb.net/api-node?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


app.use(require('./routes'));
app.use(cors());


app.listen(3333, () => {
    console.log('servidor ligado');
});

