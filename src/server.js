const express = require('express');
const sequelize = require('./config/db');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.use('/users', userRoutes);
app.use('/transactions', transactionRoutes);
app.use('/accounts', accountRoutes);

sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Server berjalan di http://localhost:${port}`);
    });
}).catch(error => {
    console.error('Tidak bisa menyambungkan ke database:', error);
});