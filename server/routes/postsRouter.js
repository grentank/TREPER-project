const express = require('express');
const { Post, User } = require('../db/models');

const postsRouter = express.Router();

postsRouter.route('/')
  .get(async (req, res) => {
    const posts = await Post.findAll();
    res.json(posts);
  })
  .post(async (req, res) => {
    try {
      const newPost = await Post.create(req.body);
      res.json(newPost);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  });

postsRouter.route('/:id')
  .get(async (req, res) => {
    const post = await Post.findOne({ where: { id: req.params.id } });
    res.json(post);
  })
  .delete(async (req, res) => {
    try {
      await Post.destroy({ where: { id: req.params.id } });
      res.sendStatus(200);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  });

module.exports = postsRouter;
