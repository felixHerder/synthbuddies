import express from 'express';
import React from 'react';
import fs from 'fs';
import { renderToString } from 'react-dom/server';
import App from './containers/App';
import { responsesAreSame } from 'workbox-broadcast-update';

const app = express();

app.use(express.static('/public/'));

const robots = JSON.parse(fs.readFileSync('/public/robots.js'));
const RobofriendsApp = React.createElement(App);
app.get('/', (req, res) => {
  res.render('index', {
    content: renderToString(RobofriendsApp({ data: robots }))
  })
})