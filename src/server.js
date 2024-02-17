const express = require('express');
const sequelize = require('./konfigurasi/db');
const app = express();
const port = process.env.PORT || 8080;
