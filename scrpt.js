// Nomor WhatsApp Cookies Miliader
const nomorWhatsApp = "6285649934615";

// Fungsi pemesanan produk
function pesan(namaProduk) {

    const teksPesan =
        `Halo Cookies Miliader, saya ingin memesan ${namaProduk}. Mohon informasi ketersediaan dan harganya. Terima kasih.`;

    const url =
        `https://wa.me/${nomorWhatsApp}?text=${encodeURIComponent(teksPesan)}`;

    const jendela = window.open(url, "_blank");

    // Jika tab baru diblokir browser, buka di tab yang sama
    if (!jendela) {
        window.location.href = url;
    }
}

// Menu navigasi untuk tampilan HP
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function() {
    navLinks.classList.toggle("active");
});

// Menutup menu setelah memilih halaman
document.querySelectorAll(".nav-links a").forEach(function(link) {
    link.addEventListener("click", function() {
        navLinks.classList.remove("active");
    });
});