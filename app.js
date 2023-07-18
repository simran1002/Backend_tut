const path = require('path');
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop');
const { nextTick } = require('process');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/admin', adminRoutes); 
app.use(shopRoutes);
// const routes = require('./routes_old');
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);

// const server = http.createServer(app);
// server.listen(3000);  