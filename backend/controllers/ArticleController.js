'use strict';

const firebase = require('../db');
const Article = require('../models/article');
const firestore = firebase.firestore();


const addArticle = async (req, res, next) => {
    try {
        const data = req.body;
        await firestore.collection('articles').doc().set(data);
        res.send('Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getAllArticles = async (req, res, next) => {
    try {
        const articles = await firestore.collection('articles');
        const data = await articles.get();
        const articlesArray = [];
        if(data.empty) {
            res.status(404).send('No article record found');
        }else {
            data.forEach(doc => {
                const article = new Article(
                    doc.id,
                    doc.data().heading,
                    doc.data().author,
                    doc.data().date,
                    doc.data().content,
                );
                articlesArray.push(article);
            });
            res.send(articlesArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getArticle = async (req, res, next) => {
    try {
        const id = req.params.id;
        const article = await firestore.collection('articles').doc(id);
        const data = await article.get();
        if(!data.exists) {
            res.status(404).send('Article with the given ID not found');
        }else {
            res.send(data.data());
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateArticle = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const article =  await firestore.collection('articles').doc(id);
        await article.update(data);
        res.send('Article record updated successfuly');        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteArticle = async (req, res, next) => {
    try {
        const id = req.params.id;
        await firestore.collection('articles').doc(id).delete();
        res.send('Record deleted successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    addArticle,
    getAllArticles,
    getArticle,
    updateArticle,
    deleteArticle
}