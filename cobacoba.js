const Exe17 = [
    ['Alice', 25, 'Jakarta'],
    ['Bob', 32, 'Surabaya'],
    ['Charlie', 40, 'Jakarta'],
    ['Rose Gold Meteor', 34, 'Bandung'],
    ['Ujang', 32, 'Jakarta'],
    ['Bono', 23, 'Bojonegoro'],
    ['Ulie', 46, 'Padang']
];

let PendaftarQualified = [];
let PendaftarQualifiedUmur = [];
let PendaftarQualifiedDomisili = [];
let PendaftarTidakQualified = [];

let logOutput = []; // Penampung log

function tambahPendaftar(arrayTujuan, data, kategori) {
    arrayTujuan.push(data);
    logKategori(kategori, data);
}

function logKategori(kategori, data) {
    const kategoriIcons = {
        'qualified': '✅',
        'umur': '🟡',
        'domisili': '🟡',
        'tidak': '❌'
    };
    logOutput.push(`${kategoriIcons[kategori]} Kandidat yang ${kategori === 'qualified' ? 'Memiliki semua Kualifikasi' : `Dipertimbangkan karena ${kategori.charAt(0).toUpperCase() + kategori.slice(1)}`} : ${data.join(', ')}`);
};

console.log(logOutput);
