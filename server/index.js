'use strict';

const express = require('express');
const morgan = require('morgan'); //useful for debugging
const dao = require('./dao');

const app = express();
app.use(morgan('common'));
app.use(express.json());

app.listen(3000, () => {
    console.log('Server Started!!');
});

app.get('/', (req, res) => {
    console.log('homepage');
    res.send({ 'res': 123 });
});

const PREFIX = '/api/v1';

app.get(PREFIX + '/exams', (req, res) => {
    dao.readExams().then(
        (value) => {
            res.json(value);
        }
    ).catch(
        (e) => {
            res.status(500).json(e);
        });

});

app.post(PREFIX + '/exams', async (req, res) => {
    console.log(req.body);

    const exam = req.body;
    try {
        const value = await dao.addExam(exam);
        res.end();
    } catch (error) {
        var e = error;
        console.log(e);
        res.status(400).json(e);
    }
});

app.get(PREFIX + '/products', (req, res) => {
    dao.readProducts().then(
        (value) => {
            res.json(value);
        }
    ).catch(
        (e) => {
            res.status(500).json(e);
        });
});

app.post(PREFIX + '/products', async (req, res) => {
    const product = req.body;
    try {
        const value = await dao.addProduct(product);
        res.end();
    } catch (error) {
        var e = error;
        console.log(e);
        res.status(400).json(e);
    }
});

app.post(PREFIX + '/productRemove', async (req, res) => {
    const productID = req.body && req.body.id ? req.body.id : null;
    try {
        const value = await dao.removeProduct(productID);
        res.end();
    } catch (error) {
        var e = error;
        console.log(e);
        res.status(400).json(e);
    }
});

app.post(PREFIX + '/productUpdate', async (req, res) => {
    const product = req.body;
    try {
        const value = await dao.updateProduct(product);
        res.end();
    } catch (error) {
        var e = error;
        console.log(e);
        res.status(400).json(e);
    }
});