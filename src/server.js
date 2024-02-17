const express = require('express');
const sequelize = require('/config/db');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.use('/pengguna', rutePengguna);
app.use('/transaksi', ruteTransaksi);
app.use('/akun', ruteAkun);

sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Server berjalan di http://localhost:${port}`);
    });
}).catch(error => {
    console.error('Tidak bisa menyambungkan ke database:', error);
});