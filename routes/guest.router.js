import express from 'express';
import { addGuestController, findGuestByIdController, getAllGuestsController } from '../controllers/guest.controller.js';

const router = express.Router();

// Rute untuk menambahkan tamu baru
router.post('/add', addGuestController);

// Rute untuk mendapatkan data tamu berdasarkan ID
router.get('/:id', findGuestByIdController);

// Rute untuk mendapatkan semua data tamu
router.get('/', getAllGuestsController);

// Anda dapat menambahkan rute lainnya di sini untuk operasi lain seperti update dan delete

export default router;
