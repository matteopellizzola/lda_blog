'use strict';

const sqlite = require('sqlite3');
const dayjs = require('dayjs');
const { Exam } = require('./exam');
const { Product } = require('./products');

const db = new sqlite.Database('transcript.sqlite', (err) => {
    if (err) {
        throw err;
    }
});

const ldaDB = new sqlite.Database('ldaDB.sqlite', (err) => {
    if (err) {
        throw err;
    }
});

function readExams () {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM exam';
        db.all(sql, (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows.map((e) =>
                    new Exam(e.code, e.name, e.cfu, e.score, e.date),
                ));
            }
        });
    });
}

/**
 * Add a new exam to the Database
 * @param {Exam} exam to be inserted
 * @return {Promise} if success, resolve to true, otherwise  reject with error code
 */
function addExam (exam) {
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO exam (code, name, cfu, date, score) VALUES(?,?,?,?,?)';
        db.run(sql, [exam.code, exam.name, exam.cfu, exam.date, exam.score], (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(true);
            }
        });
    });
}

function readProducts () {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM products';
        ldaDB.all(sql, (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows.map((e) =>
                    new Product(e.id, e.name, e.description, e.ingredients, e.bakingDay, e.typeOfCooking, e.shelfLife, e.img1, e.img2)
                ));
            }
        });
    });
}

/**
 * Add a new product to the Database
 * @param {Product} product to be inserted
 * @return {Promise} if success, resolve to true, otherwise  reject with error code
 */
function addProduct (product) {
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO products (id, name, description, ingredients, bakingDay, typeOfCooking, shelfLife, img1, img2) VALUES(?,?,?,?,?,?,?,?,?)';
        ldaDB.run(sql, [product.id, product.name, product.description, product.ingredients, product.bakingDay, product.typeOfCooking, product.shelfLife, product.img1, product.img2], (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(true);
            }
        });
    });
}

function removeProduct (productID) {
    return new Promise((resolve, reject) => {
        const sql = 'DELETE FROM products WHERE id = ?';

        ldaDB.run(sql, [productID], (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(true);
            }
        });
    });
}

function updateProduct (product) {
    return new Promise((resolve, reject) => {
        const sql = 'UPDATE products SET id = ?, name = ?, description = ?, ingredients = ?, bakingDay = ?, typeOfCooking = ?, shelfLife = ?, img1 = ?, img2 = ? WHERE id = ?';
        ldaDB.run(sql, [product.id, product.name, product.description, product.ingredients, product.bakingDay, product.typeOfCooking, product.shelfLife, product.img1, product.img2, product.id], (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(true);
            }
        });
    });
}



module.exports = { readExams, addExam, readProducts, addProduct, removeProduct, updateProduct };
