// Import model Guest dan Sequelize
import Guest from '../models/guest.model.js';
import sequelize from '../config/database.js';

// Fungsi untuk melakukan sinkronisasi model dengan basis data
async function syncDatabase() {
    try {
        await sequelize.sync({ alter: true });
        console.log('Model berhasil disinkronkan dengan basis data.');
    } catch (error) {
        console.error('Gagal melakukan sinkronisasi model dengan basis data:', error);
    }
}

// Controller untuk mendapatkan semua tamu
async function getAllGuests(req, res) {
    try {
        // Panggil fungsi sinkronisasi model dengan basis data
        // await syncDatabase();

        const guests = await Guest.findAll();
        const title = 'Halaman awal';
        // res.json(guests);
        res.render('index', {
            guests,
            title
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Controller untuk menambahkan tamu baru
async function addGuest(req, res) {
    const { name, email, phone } = req.body;
    try {
        // Panggil fungsi sinkronisasi model dengan basis data
        await syncDatabase();

        const newGuest = await Guest.create({ name, email, phone });
        res.json(newGuest);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Controller untuk mendapatkan tamu berdasarkan ID
async function getGuestById(req, res) {
    const { id } = req.params;
    try {
        // Panggil fungsi sinkronisasi model dengan basis data
        await syncDatabase();

        const guest = await Guest.findByPk(id);
        if (!guest) {
            throw new Error("Tamu tidak ditemukan");
        }
        res.json(guest);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Dan seterusnya untuk controller lainnya...

export { getAllGuests, addGuest, getGuestById };
