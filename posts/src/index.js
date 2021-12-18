const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const postModel = require("./models");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const connectDB = require('./database/database');

connectDB();

app.get('/posts', async (req, res) => {
    try{
        const posts = await postModel.find();
        console.log(posts)
        res.status(200);

        res.json({
          status: 'success',
          message: 'post retrieved successfully',
          data: posts,
        });
    }
    catch (err) {
        res.status(404);
        res.json({
            status: 'error',
            message: err.message,
        });
    }
});

app.post('/posts', async (req, res) => {

    const post = new postModel(
        {
            title: req.body.title
        }
    )
    try {
        const savePost = await post.save();
        res.status(201);
        res.json({
            message: 'post created!',
            data: savePost,
        });
    } catch (err) {
        res.status(404);
        res.json({
        status: 'error',
        message: err.message,
    });
    }
});

app.listen(4000, () => {
    console.log('Listening on Port 4000');
});
