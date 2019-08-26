const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 6660;

app.use(express.static('public'))
app.listen(port, () => console.log(`corriendo en ${port}...`))
