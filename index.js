const express = require('express');
const authRoutes = require('./routes/auth-routes');

const app = express();

app.set('view engine', 'ejs'); // Set the view engine to ejs

app.use('/auth', authRoutes);
app.get('/', (req, res) => {
    res.render('home');
});

app.listen(3000, () => {
    console.log(`Server started on port`);
});