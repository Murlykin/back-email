const mongoose = require('mongoose');
const app = require('./app');

const { DB_HOST, PORT, BASE_URL } = process.env;

mongoose
    .connect(DB_HOST)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Database connect success, ${BASE_URL}`);
        });
    })
    .catch(error => {
        console.log(error.message);
        process.exit(1);
    });

