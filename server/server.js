const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const postsRouter = require('./routes/postsRouter');
require('dotenv').config();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use('/posts', postsRouter);

app.listen(PORT, () => console.log(`Server has started on PORT ${PORT}`));
