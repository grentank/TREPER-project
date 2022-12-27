const express = require('express');
const { Post, User } = require('../db/models');

const postsRouter = express.Router();

postsRouter.route('/')
  .get(async (req, res) => {
    const posts = await Post.findAll({ include: User });
    res.json(posts);
  })
  .post(async (req, res) => {
    try {
      const newPost = await Post.create(
        { ...req.body, authorId: req.session.user.id },
      );
      const postWithUser = await Post.findByPk(newPost.id, { include: User });
      res.json(postWithUser);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  });

postsRouter.route('/:id')
  .get(async (req, res) => {
    const post = await Post.findOne({ where: { id: req.params.id }, include: User });
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
