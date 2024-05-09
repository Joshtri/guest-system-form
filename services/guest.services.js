const GuestService = (GuestRepository) => {
    const GuestRepo = GuestRepository();

    const addGuest = async (guestData) => {
        try {
            const newGuest = await GuestRepo.createGuest(guestData);
            return newGuest;
        } catch (error) {
            throw new Error(`Error in adding guest: ${error}`);
        }
    };

    const findGuestById = async (guestId) => {
        try {
            const guest = await GuestRepo.getGuestById(guestId);
            if (!guest) {
                throw new Error("Guest not found");
            }
            return guest;
        } catch (error) {
            throw new Error(`Error in finding guest: ${error}`);
        }
    };

    const getAllGuests = async () => {
        try {
            const guests = await GuestRepo.getAllGuests(); // Pastikan metode ini tersedia di dalam GuestRepository
            return guests;
        } catch (error) {
            throw new Error(`Error in fetching guests: ${error}`);
        }
    };

    // Implementasi fungsi updateGuestInfo, removeGuest, dan lainnya di sini

    return {
        addGuest,
        findGuestById,
        getAllGuests,
        // Sisipkan fungsi-fungsi lainnya di sini
    };
};

export const addGuest = GuestService.addGuest;
export const findGuestById = GuestService.findGuestById;
export const getAllGuests = GuestService.getAllGuests;
// Export fungsi-fungsi lainnya di sini
