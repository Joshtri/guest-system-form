
import Guest from "../models/guest.model.js";

// Fungsi untuk mendapatkan semua tamu
async function getAllGuests() {
    try {
        const guests = await Guest.findAll();
        return guests;
    } catch (error) {
        throw new Error("Gagal mendapatkan data tamu: " + error.message);
    }
}

// Fungsi untuk menambahkan tamu baru
async function addGuest(name, email, phone) {
    try {
        const newGuest = await Guest.create({ name, email, phone });
        return newGuest;
    } catch (error) {
        throw new Error("Gagal menambahkan tamu: " + error.message);
    }
}

// Fungsi untuk mengambil tamu berdasarkan ID
async function getGuestById(id) {
    try {
        const guest = await Guest.findByPk(id);
        if (!guest) {
            throw new Error("Tamu tidak ditemukan");
        }
        return guest;
    } catch (error) {
        throw new Error("Gagal mendapatkan data tamu: " + error.message);
    }
}

// Fungsi untuk mengupdate tamu berdasarkan ID
async function updateGuest(id, newData) {
    try {
        const guest = await Guest.findByPk(id);
        if (!guest) {
            throw new Error("Tamu tidak ditemukan");
        }
        await guest.update(newData);
        return guest;
    } catch (error) {
        throw new Error("Gagal memperbarui tamu: " + error.message);
    }
}

// Fungsi untuk menghapus tamu berdasarkan ID
async function deleteGuest(id) {
    try {
        const guest = await Guest.findByPk(id);
        if (!guest) {
            throw new Error("Tamu tidak ditemukan");
        }
        await guest.destroy();
        return "Tamu berhasil dihapus";
    } catch (error) {
        throw new Error("Gagal menghapus tamu: " + error.message);
    }
}

export { getAllGuests, addGuest, getGuestById, updateGuest, deleteGuest };
