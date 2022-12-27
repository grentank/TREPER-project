const express = require('express');
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

const authRouter = express.Router();

authRouter.post('/', async (req, res) => {
  const { username, password } = req.body;
  const hashpass = await bcrypt.hash(password, 10);
  const [user, created] = await User.findOrCreate({
    where: { username },
    defaults: { hashpass },
  });
  if (created || (!created && bcrypt.compareSync(password, user.hashpass))) {
    req.session.user = { username: user.username, id: user.id };
    return res.json(req.session.user);
  }
  return res.sendStatus(403);
});

authRouter.get('/check', async (req, res) => {
  if (req.session?.user?.id) {
    return res.json(req.session.user);
  }
  return res.sendStatus(401);
});

authRouter.get('/logout', async (req, res) => {
  req.session.destroy();
  res.clearCookie('user_sid').sendStatus(200);
});

module.exports = authRouter;
