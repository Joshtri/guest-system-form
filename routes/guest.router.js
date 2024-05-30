import express from "express";
import GuestController from "../controllers/guest.controller.js";
import { upload } from "../config/uploadSign.js"; // Sesuaikan dengan path modul Anda

const router = express.Router();

// Rute untuk menambahkan tamu baru
router.post("/add", upload, GuestController.addGuest);

// Rute untuk mencari tamu berdasarkan ID
router.get("/:id", GuestController.findGuestById);

// Rute untuk mendapatkan semua tamu
router.get("/", GuestController.getAllGuests);

// Menambahkan rute untuk menyimpan tanda tangan
// router.post('/save-signature', async (req, res) => {
//     try {
//         const { signatureData } = req.body;
//         // Simpan data tanda tangan ke database
//         const newSignature = await Signature.create({ imageData: signatureData });
//         res.status(200).send('Tanda tangan berhasil disimpan.');
//     } catch (error) {
//         console.error('Error:', error);
//         res.status(500).send('Terjadi kesalahan saat menyimpan tanda tangan.');
//     }
// });

// Anda dapat menambahkan rute lainnya di sini untuk operasi lain seperti update dan delete

export default router;
