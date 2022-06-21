const express = require('express');
const app = express();
const ejs = require('ejs');
const mongoose = require('mongoose');
const exup = require('express-fileupload');
const AddPost = require('./models/Blog.js');

mongoose.connect('mongodb://localhost/cleanblog-test-db');

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/posts/:id', async (req, res) => {
  const posts = await AddPost.findById(req.params.id);
  res.render('post', {
    posts: posts,
  });
});

app.get('/', async (req, res) => {
  const posts = await AddPost.find({});
  res.render('index', { posts: posts });
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
  console.log(req.files.foo);
  res.redirect('/');
});

const port = 3000;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
