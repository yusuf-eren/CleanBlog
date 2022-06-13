const express = require('express');
const app = express();
const ejs = require('ejs');
const mongoose = require('mongoose');
const AddPost = require('./models/Photo.js');

mongoose.connect('mongodb://localhost/cleanblog-test-db');

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('index');
});
app.get('/index', (req, res) => {
  res.render('index');
});
app.get('/add_post', (req, res) => {
  res.render('add_post');
});
app.get('/post', (req, res) => {
  res.render('post');
});
app.get('/about', (req, res) => {
  res.render('about');
});

app.post('/posts', async (req, res) => {
  AddPost.create(req.body);
  res.redirect('/');
});

const port = 3000;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
