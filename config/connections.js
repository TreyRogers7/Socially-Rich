const { connect, connection } = require('mongoose');

connect('mongodb://localhost/Socially-Rich', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

module.exports = connection;