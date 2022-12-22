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
    // add to session
    return res.json(user);
  }
  return res.sendStatus(403);
});

module.exports = authRouter;
