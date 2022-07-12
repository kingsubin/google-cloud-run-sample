const express = require('express');
const app = express();

// This middleware is available in Express v4.16.0 onwards
app.use(express.json());