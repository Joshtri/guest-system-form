import express from 'express';
import {
    getAllGuests,
    // addGuest,
    // getGuestById,
    // updateGuest,
    // deleteGuest
} from '../controllers/guest.controller.js';

const router = express.Router();

// Endpoint untuk mendapatkan semua tamu
router.get('/guests', async (req, res) => {
    await getAllGuests(req, res);
});

// // Endpoint untuk menambahkan tamu baru
// router.post('/guests', async (req, res) => {
//     await addGuest(req, res);
// });

// // Endpoint untuk mendapatkan tamu berdasarkan ID
// router.get('/guests/:id', async (req, res) => {
//     await getGuestById(req, res);
// });

// // Endpoint untuk memperbarui tamu berdasarkan ID
// router.put('/guests/:id', async (req, res) => {
//     await updateGuest(req, res);
// });

// // Endpoint untuk menghapus tamu berdasarkan ID
// router.delete('/guests/:id', async (req, res) => {
//     await deleteGuest(req, res);
// });

export default router;
