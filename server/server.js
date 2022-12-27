const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const session = require('express-session');
const store = require('session-file-store');
const postsRouter = require('./routes/postsRouter');
const authRouter = require('./routes/authRouter');
require('dotenv').config();

const PORT = process.env.PORT || 3001;
const app = express();

const FileStore = store(session);

const sessionConfig = {
  name: 'user_sid',
  secret: process.env.SESSION_SECRET ?? 'test',
  resave: true,
  store: new FileStore(),
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
    httpOnly: true,
  },
};

app.use(cors({ origin: true, credentials: true }));
app.use(session(sessionConfig));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use('/posts', postsRouter);
app.use('/auth', authRouter);

app.listen(PORT, () => console.log(`Server has started on PORT ${PORT}`));
