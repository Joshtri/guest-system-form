import Guest from "../models/guest.model.js";

const GuestService = {
  // Fungsi untuk menambahkan tamu baru
  async addGuest(guestData) {
    try {
      const newGuest = await Guest.create(guestData);
      return newGuest;
    } catch (error) {
      throw new Error(`Error in adding guest: ${error.message}`);
    }
  },

  // Fungsi untuk mencari tamu berdasarkan ID
  async findGuestById(guestId) {
    try {
      const guest = await Guest.findById(guestId);
      if (!guest) {
        throw new Error("Guest not found");
      }
      return guest;
    } catch (error) {
      throw new Error(`Error in finding guest: ${error.message}`);
    }
  },

  // Fungsi untuk mendapatkan semua tamu
  async getAllGuests() {
    try {
      const guests = await Guest.find();
      return guests;
    } catch (error) {
      throw new Error(`Error in fetching guests: ${error.message}`);
    }
  },

  // Implementasikan fungsi lainnya seperti updateGuestInfo dan removeGuest
};

export default GuestService;