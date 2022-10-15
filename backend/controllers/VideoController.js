'use strict';

const firebase = require('../db');
const Video = require('../models/video');
const firestore = firebase.firestore();


const addVideo = async (req, res, next) => {
    try {
        const data = req.body;
        await firestore.collection('videos').doc().set(data);
        res.send('Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getAllVideos = async (req, res, next) => {
    try {
        const videos = await firestore.collection('videos');
        const data = await videos.get();
        const videosArray = [];
        if(data.empty) {
            res.status(404).send('No video record found');
        }else {
            data.forEach(doc => {
                const video = new Video(
                    doc.id,
                    doc.data().heading,
                    doc.data().author,
                    doc.data().date,
                    doc.data().content,
                );
                videosArray.push(video);
            });
            res.send(videosArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getVideo = async (req, res, next) => {
    try {
        const id = req.params.id;
        const video = await firestore.collection('videos').doc(id);
        const data = await video.get();
        if(!data.exists) {
            res.status(404).send('Video with the given ID not found');
        }else {
            res.send(data.data());
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateVideo = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const video =  await firestore.collection('videos').doc(id);
        await video.update(data);
        res.send('Video record updated successfuly');        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteVideo = async (req, res, next) => {
    try {
        const id = req.params.id;
        await firestore.collection('videos').doc(id).delete();
        res.send('Record deleted successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    addVideo,
    getAllVideos,
    getVideo,
    updateVideo,
    deleteVideo
}