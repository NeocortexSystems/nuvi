const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const chatRoutes = require('./routes/chat');
const mapRoutes = require('./routes/map');
const db = require('./db');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

db.connect();

app.use(cors());
app.use(express.json());

app.use('/api/chat', chatRoutes);
app.use('/api/map', mapRoutes);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});