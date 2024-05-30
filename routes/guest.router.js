import express from "express";
import GuestController from "../controllers/guest.controller.js";


const router = express.Router();

// Rute untuk menambahkan tamu baru
router.post("/add", GuestController.addGuest);

// Rute untuk mendapatkan mainPage
router.get("/", GuestController.getMainPage);


export default router;
