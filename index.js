/* eslint-disable no-undef */
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';
import 'dotenv/config';
import hbs from 'hbs';
import connectDB from './config/database.js';

import exphbs from 'express-handlebars';
// Import router 
import guestRouter from './routes/guest.router.js';
const app = express();

// Inisialisasi mesin tampilan Handlebars
// const hbs = exphbs.create({
//     extname: '.hbs',
//     layoutsDir: path.join(process.cwd(), 'views'), // Tentukan folder layouts
//     defaultLayout: 'index', // Tentukan file default layout
//     partialsDir: [
//         // Tentukan folder partials jika diperlukan
//     ]
// });

// Tentukan ekstensi file untuk mesin tampilan Handlebars
// app.engine('.hbs', hbs.engine);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

connectDB();

hbs.registerPartials(path.join(__dirname, 'views/partials'),(err)=>{console.log();});
// Atur mesin tampilan Handlebars sebagai 'hbs'
app.set('view engine', 'hbs');

// Tentukan lokasi folder views
app.set('views', path.join(__dirname, 'views'));

// Gunakan middleware untuk menyajikan file statis dari folder 'public'
app.use(express.static(path.join(process.cwd(), 'public')));

// Gunakan middleware untuk membaca JSON
app.use(express.json());
app.use(bodyParser.json());

app.use('/', guestRouter);

// Dapatkan PORT dari variabel lingkungan atau gunakan 3000 sebagai default
const PORT = process.env.PORT || 3000;

// Mulai server dan dengarkan PORT yang ditentukan
app.listen(PORT, () => {
    console.log('Server running on port ' + PORT);
});
