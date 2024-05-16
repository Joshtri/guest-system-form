/* eslint-disable no-undef */
// Di dalam file JavaScript (darkmode.js)
$(document).ready(function() {
    var darkModeEnabled = false;

function toggleDarkMode() {
    darkModeEnabled = !darkModeEnabled;
    if (darkModeEnabled) {
        // Mengaktifkan mode gelap
        $('.hero').addClass('has-background-black');
        $('.hero-body').addClass('has-background-black');
        $('.hero-head').addClass('has-background-black');
        $('.card').addClass('has-background-black'); // Tambahkan kelas untuk mode gelap pada kartu
        $('.card').css('color', '#fff'); // Warna teks kartu menjadi putih
        $('.input, .textarea').css('background-color', '#333'); // Warna latar belakang input dan textarea menjadi hitam
        $('.input, .textarea').css('color', '#fff'); // Warna teks input dan textarea menjadi putih
        $('::-webkit-input-placeholder').css('color', 'rgba(255, 255, 255, 0.5)'); // Warna placeholder input menjadi putih dengan transparansi
        $(':-moz-placeholder').css('color', 'rgba(255, 255, 255, )'); // Warna placeholder input menjadi putih dengan transparansi
        $('::-moz-placeholder').css('color', 'rgba(255, 255, 255, )'); // Warna placeholder input menjadi putih dengan transparansi
        $(':-ms-input-placeholder').css('color', 'rgba(255, 255, 255,)'); // Warna placeholder input menjadi putih dengan transparansi
        $('.button').css('background-color', '#333'); // Warna latar belakang tombol menjadi hitam
        $('.button').css('color', '#fff'); // Warna teks tombol menjadi putih
        $('nav.navbar').addClass('is-dark'); // Tambahkan kelas untuk mode gelap pada navbar
        $('.marquee-text').addClass('has-background-black'); // Tambahkan kelas untuk mode gelap pada marquee
        $('#dark-mode-icon').removeClass('fa-sun'); // Hapus kelas matahari
        $('#dark-mode-icon').addClass('fa-moon'); // Tambahkan kelas bulan
        $('.label').css('color', '#fff'); // Tambahkan kelas untuk warna teks putih pada label
        // Mengaktifkan mode gelap
        $('.footer').css('background-color', '#333'); // Ganti warna latar belakang footer menjadi hitam
    } else {
        // Mengaktifkan mode terang
        $('.hero').removeClass('has-background-black');
        $('.hero-body').removeClass('has-background-black');
        $('.hero-head').removeClass('has-background-black');
        $('.card').removeClass('has-background-black'); // Hapus kelas untuk mode gelap pada kartu
        $('.card').css('color', '#333'); // Warna teks kartu menjadi hitam
        $('.input, .textarea').css('background-color', '#fff'); // Warna latar belakang input dan textarea menjadi putih
        $('.input, .textarea').css('color', '#333'); // Warna teks input dan textarea menjadi hitam
        $('::-webkit-input-placeholder').css('color', 'rgba(0, 0, 0, 0.5)'); // Warna placeholder input menjadi hitam dengan transparansi
        $(':-moz-placeholder').css('color', 'rgba(0, 0, 0, 0.5)'); // Warna placeholder input menjadi hitam dengan transparansi
        $('::-moz-placeholder').css('color', 'rgba(0, 0, 0, 0.5)'); // Warna placeholder input menjadi hitam dengan transparansi
        $(':-ms-input-placeholder').css('color', 'rgba(0, 0, 0, 0.5)'); // Warna placeholder input menjadi hitam dengan transparansi
        $('.button').css('background-color', '#f2f2f2'); // Warna latar belakang tombol menjadi abu-abu muda
        $('.button').css('color', '#333'); // Warna teks tombol menjadi hitam
        $('nav.navbar').removeClass('is-dark'); // Hapus kelas untuk mode gelap pada navbar
        $('.marquee-text').removeClass('has-background-black'); // Hapus kelas untuk mode gelap pada marquee
        $('#dark-mode-icon').removeClass('fa-moon'); // Hapus kelas bulan
        $('#dark-mode-icon').addClass('fa-sun'); // Tambahkan kelas matahari
        $('.label').css('color', '#363636'); // Hapus kelas untuk warna teks putih pada label
        $('.footer').css('background-color', '#FFF9D0'); // Kembalikan warna latar belakang footer ke warna default
    }
}


    $('#dark-mode-button').click(function() {
        toggleDarkMode();
        // Animasi tombol saat diklik
        $(this).toggleClass('is-loading');
        setTimeout(function() {
            $('#dark-mode-button').removeClass('is-loading');
        }, 1000); // Ganti 1000 dengan durasi animasi dalam milidetik
    });
});