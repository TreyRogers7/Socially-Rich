const express = require('express');
const db = require ('./config/connections.js');

const cwd = process.cwd();

const PORT = 3001;
const app = express();

const activity = cwd.includes('Socially-Rich')
  ? cwd.split('/Socially-Rich/')[1]
  : cwd;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server for ${activity} running on port ${PORT}!`);
    });
  });