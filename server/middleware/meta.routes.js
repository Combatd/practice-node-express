const express = require('express');

const app = express();
const userRouter = require('./userRouter.router');

app.use('/user', userRouter);