require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


app.use(require('./routes'));
app.use(cors());


app.listen(process.env.PORT || 3333, () => {
    console.log('servidor ligado');
});

