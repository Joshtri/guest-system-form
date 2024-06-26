import { signInWithEmailAndPassword } from "firebase/auth";
import { getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { auth } from "../config/firebaseConfig.js"; // Sesuaikan dengan path modul Anda
import Guest from "../models/guest.model.js"; // Import mod
import GuestService from "../services/guest.services.js";
// import {upload} from '../config/uploadSign.js'; // Sesuaikan dengan path modul Anda

const storageFB = getStorage();
//init empty variable.
let title = "";

// Fungsi untuk mengunggah file ke Firebase Storage dan menyimpan data teks ke MongoDB
async function uploadImage(file, guestData, quantity) {
  try {
    // Sign in ke Firebase jika belum
    // eslint-disable-next-line no-undef
    await signInWithEmailAndPassword(
      auth,
      process.env.FIREBASE_USER,
      process.env.FIREBASE_AUTH
    );

    // Mengunggah file ke Firebase Storage
    const dateTime = Date.now();
    const fileName = `images/${dateTime}`;
    const storageRef = ref(storageFB, fileName);
    const metadata = {
      contentType: file.type,
    };
    await uploadBytesResumable(storageRef, file.buffer, metadata);

    // Menyimpan data teks ke MongoDB jika diperlukan
    if (quantity === "single") {
      const newGuest = new Guest({
        nama_lengkap: guestData.nama_lengkap,
        asal: guestData.asal,
        keperluan: guestData.keperluan,
        orang_dituju: guestData.orang_dituju,
        no_hp: guestData.no_hp,
        // book_description : guestData.book_description,
        // createdAt:guestData.createdAt
        // book_pdf : guestData.book_pdf,
        imageData: fileName,
      });

      // Menyimpan item ke MongoDB
      await newGuest.save();
    }

    return fileName;
  } catch (error) {
    console.error(error); // Mencetak kesalahan ke konsol
    throw error;
  }
}

const GuestController = {
  // Controller untuk menambahkan tamu baru
  // Controller untuk menambahkan tamu baru
  async addGuest(req, res) {
    try {
      //   const file = {
      //     type: req.file.mimetype,
      //     buffer: req.file.buffer,
      //   };

      const guestData = {
        nama_lengkap: req.body.nama_lengkap,
        asal: req.body.asal,
        keperluan: req.body.keperluan,
        orang_dituju: req.body.orang_dituju,
        no_hp: req.body.no_hp,
        signature: req.body.signature,
      };

      await GuestService.addGuest(guestData);
      // Memanggil fungsi untuk mengunggah file dan menyimpan data teks
      //   const buildImage = await uploadImage(file, itemData, "single"); // Sesuaikan 'single' atau 'multiple' sesuai logika Anda

      await req.flash("infoAddGuest", "Data Tamu Berhasil Ditambahkan ✅✅✅");
      // res.send('berhasil tambah data tamu');
      res.redirect("/");
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Controller untuk mencari tamu berdasarkan ID


  // Controller untuk mendapatkan semua tamu
  async getMainPage(req, res) {
    try {
      // const guests = await GuestService.getAllGuests();
      // res.json(guests);

      title = "Pengisian Buku Tamu";
      const messageSuccessGuest = req.flash("infoAddGuest");

      res.render("index", {
        // guests,
        messageSuccessGuest,
        title,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // // Controller untuk memperbarui informasi tamu
  // async updateGuestInfo(req, res) {
  //     // Implementasi fungsi ini dengan memanggil fungsi dari GuestService
  // },

  // // Controller untuk menghapus tamu
  // async removeGuest(req, res) {
  //     // Implementasi fungsi ini dengan memanggil fungsi dari GuestService
  // }
};

export default GuestController;