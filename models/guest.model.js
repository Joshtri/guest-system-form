import mongoose from "mongoose";

const GuestSchema = new mongoose.Schema(
  {
    nama_lengkap: {
      type: String,
      required: true,
    },

    //asal instansi.
    asal: {
      type: String,
      required: true,
      // unique: true
    },

    keperluan: {
      type: String,
      required: true,
    },

    orang_dituju: {
      type: String,
      required: true,
    },

    no_hp: {
      type: String,
      required: true,
    },

    imageData: {
      type: String,
      // required : true,
    },

    signature: {
      type: String,
      required: true,
    },
    // role: {
    //     type: String,
    //     enum: ['admin', 'manager'], // Hanya nilai 'admin' atau 'manager' yang diperbolehkan
    //     default: 'admin', // Nilai default jika tidak disediakan
    // },
  },
  { timestamps: true }
);

export default mongoose.model("Guest", GuestSchema);
