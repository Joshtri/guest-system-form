
import Guest from "../models/guest.model.js"; // Import mod
import GuestService from "../services/guest.services.js";

let title = "";
const GuestController = {
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
};

export default GuestController;
