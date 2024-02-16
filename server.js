const express = require('express');
const appRoutes = require('./routes/appRoutes');
const apiRoutes = require('./routes/apiRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// use routes
app.use('/api', apiRoutes);
app.use('/', appRoutes);

app.listen(PORT, () => {
    console.log(`Now listening on PORT: ${PORT}`);
});