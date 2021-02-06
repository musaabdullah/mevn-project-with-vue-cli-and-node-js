const { Router } = require('express');
const Post = require('../model/posts');

const router = Router();

router.post('/posts', async (req, res) => {
    try {
        const posts = { title, body, categoryName} = req.body;
        const postSaved = await Post.create(posts);
        res.json(postSaved);
    }catch (error) {
        res.json(error);
    }
 })

router.get('/posts', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        res.json(error);
    }
})

router.delete('/posts/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const deletedId = await Post.findOneAndDelete(id);
        res.json(id);
    } catch (error) {
        res.json(error);
    }
})
router.get('/posts/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const post = await Post.findById(id);
        res.json(post);
    } catch (error) {
        res.json(error);
    }
})

module.exports = router;