const sport = ['Football', 'Swimming', 'Basket', 'Volley', 'Fishing', 'Marathon'];

// for (const BasicForOF of sport) {
//     console.log(BasicForOF)
// }; // Untuk Cek isi Content dalam Array

let enterkosong = ' ';
console.log(enterkosong);

const HanyarecallNoUrutArray = 'Hanya Me-recall No. Urut dalam Array';
console.log(HanyarecallNoUrutArray);

enterkosong = ' ';
console.log(enterkosong);

for (const index in sport) {
    console.log(Number(index)); // 'Number()' (beda dengan 'number' atau 'NUMBER'), fungsi
}; // Number ini fungsi Khusus dalam ForIN yang gunanya untuk memproses Array menjadi No Urut secara ber-urutan
// Kalau ditambah +1, jadi 0 + 1 dan dimulai dari 1. Kalau ditambah +, jadi 0 + 2 dan dimulai dari 2.

enterkosong = ' ';
console.log(enterkosong);

const HanyarecallIsiContentArray = 'Hanya Me-recall Isi Content dalam Array';
console.log(HanyarecallIsiContentArray);

enterkosong = ' ';
console.log(enterkosong);

for (const index in sport) {
    console.log(`${sport[index]}`); // Me-recall semua isi Array 'sport' dalam Fungsi Looping yg dilabeli 'index'
}; // Array[VariableForINLooping], karena ini looping jadi di recall secara berurutan

enterkosong = ' ';
console.log(enterkosong);

const GabunganListIndexing = 'Untuk List Indexing Array dengan menggabungkan No Urut dan Isi Content berdasarkan Looping dan Array';
console.log(GabunganListIndexing);

enterkosong = ' ';
console.log(enterkosong);

for (const index in sport) {
    const NoUrut = Number(index) + 1;
    console.log(`${NoUrut}. ${sport[index]}`);
}; // Contoh penggunaan gabungan untuk List Indexing Array

enterkosong = ' ';
console.log(enterkosong);

console.log(sport[3]);
console.log(sport[3, 2]);

enterkosong = ' ';
console.log(enterkosong);

const LoopingBasic = 'Looping Basic Exercise :'
console.log(LoopingBasic);

enterkosong = ' ';
console.log(enterkosong);

enterkosong = ' ';
console.log(enterkosong);

const LoopingBasicExercise = 'Contoh Looping Basic :'
console.log(LoopingBasicExercise);

enterkosong = ' ';
console.log(enterkosong);

const KataKasar = ['BABI', 'ANJING', 'TAI', 'ASU', 'KONTOL', 'MEMEK'];

for (let i = 0; i < KataKasar.length; i++) {
    console.log(`${i+1}. OJEK ITU ${KataKasar[i]}`);
};

const BasicLooping1 = 'Mengganti Nilai i dengan VariableArray.[Urutan Array]:'
console.log(BasicLooping1);

enterkosong = ' ';
console.log(enterkosong);

enterkosong = ' ';
console.log(enterkosong);

for (let i = 0; i < KataKasar.length; i++) {
    console.log(`${i+1}. OJEK ITU ${KataKasar[4]}`);
};

enterkosong = ' ';
console.log(enterkosong);

const BasicLooping2 = 'Mengganti Nilai let i = "....":'
console.log(BasicLooping2);

enterkosong = ' ';
console.log(enterkosong);

for (let i = 1; i < KataKasar.length; i++) {
    console.log(`${i+1}. OJEK ITU ${KataKasar[i]}`);
}; 

enterkosong = ' ';
console.log(enterkosong);

const BasicLooping3 = 'Mengganti Simbol Operator dalam (i "...." ArrayVariable.length;) :'
console.log(BasicLooping3);

enterkosong = ' ';
console.log(enterkosong);

for (let i = 0; i <= KataKasar.length; i++) {
    console.log(`${i+1}. OJEK ITU ${KataKasar[i]}`);
}; // Tidak bisa menggunakan > atau >= dalam Fungsi Looping For
// Ketika menggunakan <= Hasil-nya 
// 0. OJEK ITU BABI | 1. OJEK ITU ANJING | 2. OJEK ITU TAI | ...... | 6. OJEK ITU undefined

enterkosong = ' ';
console.log(enterkosong);

const BasicLooping4 = 'Pembuktian kalau ArrayVariable.length itu tidak bisa didefinisikan:'
console.log(BasicLooping4);

enterkosong = ' ';
console.log(enterkosong);

for (let i = 0; i <= KataKasar.length; i++) {
    console.log(`${i+1}. OJEK ITU ${KataKasar[i]}`);
}; // Penjelasan ada dibawah ini :
// Kenapa kalau penulisan Looping For yang bener itu (i < ArrayVariable.length)?  
// i = Index listing-nya, dimana Index listingnya gabisa SAMA DENGAN ArrayVariable.length, DIKARENAKAN
// ArrayVariable.length itu DALAM LOOPING by default didefinisikan sebagai Tak Terhingga (undefined)
// Makanya Hasil terakhir dari Looping disini itu "6. OJEK ITU undefined"

enterkosong = ' ';
console.log(enterkosong);

enterkosong = ' ';
console.log(enterkosong);

const LoopingFromBehind = 'Looping Dari Belakang :'
console.log(LoopingFromBehind);

enterkosong = ' ';
console.log(enterkosong);

for (let i = KataKasar.length - 1; i >= 0; i--) {
    console.log(`${i}. OJEK ITU ${KataKasar[i]}`);
}; // let i = itu sama dengan menentukan dari mana Array itu dimulai
// INI RUMUS YANG GABISA DIOTAK-ATIK : (let i = ArrayVariable.length - 1 ; i >= 0; i--) Khusus Lopping dari Belakang
// Kenapa Harus - 1 di ArrayVariable.length dikarenakan ArrayVariable.length itu panjangnya tidak terdefinisikan
// Jadi by default itu ArrayVariable.length itu tak terhingga sama Seperti Contoh dibagian "LoopingBasic4"
// bagian (i >= 0), itu maksudnya bagian Apa saja yang diLooping. Karena kita mau looping sampai Index pertama 
// atau (Index [0]) jadi Nilai I harus = 0 dan juga harus lebih besar dari 0, makanya >=
// Jadi Formula For Looping itu = for ("..1.." ; "..2.."; "..3..")
//"..1.." itu bagian dari mana awal Looping (Batas)
//"..2.." itu Isi content apa saja yang perlu di looping (Sampai Index mana)
//"..3.." i++ untuk Looping dari awal, kalau i-- itu Looping dari belakang

enterkosong = ' ';
console.log(enterkosong);

enterkosong = ' ';
console.log(enterkosong);

for (let i = KataKasar.length - 1; i >= 0; i--) {
    console.log(`${i}. OJEK ITU ${KataKasar[i]}`);
}; // let i = itu sama dengan menentukan dari mana Array itu dimulai
// INI RUMUS YANG GABISA DIOTAK-ATIK : (let i = ArrayVariable.length - 1 ; i >= 0; i--) Khusus Lopping dari Belakang
// Kenapa Harus - 1 di ArrayVariable.length dikarenakan ArrayVariable.length itu panjangnya tidak terdefinisikan
// Jadi by default itu ArrayVariable.length itu tak terhingga sama Seperti Contoh dibagian "LoopingBasic4"
// bagian (i >= 0), itu maksudnya bagian Apa saja yang diLooping. Karena kita mau looping sampai Index pertama 
// atau (Index [0]) jadi Nilai I harus = 0 dan juga harus lebih besar dari 0, makanya >=
// Jadi Formula For Looping itu = for ("..1.." ; "..2.."; "..3..")
//"..1.." itu bagian dari mana awal Looping (Batas)
//"..2.." itu Isi content apa saja yang perlu di looping (Sampai Index mana)
//"..3.." i++ untuk Looping dari awal, kalau i-- itu Looping dari belakang

enterkosong = ' ';
console.log(enterkosong);

const LoopingUsingWhile = 'While = Looping Pengulangan Hingga mencapai target yang ditentukan :';
console.log(LoopingUsingWhile);

enterkosong = ' ';
console.log(enterkosong);

const WhileYangBenar = 'Penggunaan While yang Benar :';
console.log(WhileYangBenar);

enterkosong = ' ';
console.log(enterkosong);

let AngkaAcuan = 2

while (AngkaAcuan < 1000) {
    console.log(AngkaAcuan)
    AngkaAcuan = AngkaAcuan * 5;
} // Kenapa Console.log() itu diawal, bukan diakhir? karena Console.log() itu tergantung konteks-nya apa
// disini Console.log() digunakan buat menampilkan hasil dari While (AngkaAcuan lebih kecil daripada 1000)
// While itu mirip return, yang dimana hasil dari return (VariableWhile atau disini AngkaAcuan) 
// itu baru dikalikan 5 nantinya, dan SUDAH DIBATASI DULU DENGAN > 1000, sehingga hanya diproses sampai situ.
// Dan Hasil-nya => 10, 50, 250

enterkosong = ' ';
console.log(enterkosong);

const WhileYangSalah = 'Penggunaan While yang Salah :';
console.log(WhileYangSalah);

enterkosong = ' ';
console.log(enterkosong);

while (AngkaAcuan < 1000) {
    AngkaAcuan = AngkaAcuan * 5;
    console.log(AngkaAcuan);
} // Kenapa Hasilnya => 10, 50, 250, 1250 ?
// disini Console.log() yang dimana diperlukan sebagai nilai return, untuk proses looping. 
// Karena Console.log() ditaro paling akhir, jadi hasil proses looping yang terakhir yang bernilai 250,
// tetap dikalikan 5. Karena masih dalam proses looping

enterkosong = ' ';
console.log(enterkosong);

const StudiKasusWhile1 = 'Finding A Number :';
console.log(StudiKasusWhile1);

enterkosong = ' ';
console.log(enterkosong);

let findnumber = true;
let number = 0;
let AngkaPatokan = 15

while (findnumber) {
    number++; // Variable yang diinginkan (number)++ Bakal terus Looping
    console.log(number) // Memeriksa apa yang dilooping, yaitu Variable number (let number = 0)
    if (number === AngkaPatokan) {
        findnumber = false;
        console.log(`Number Found, the number is ${AngkaPatokan}`);
    }
};
// Kenapa Nilai 0, TIDAK DIPERHITUNGKAN DALAM PROSES WHILE? INI DIKAREKAN PENEMPATAN number++ YANG MERUPAKAN
// NILAI INCRAMENT DITEMPATKAN SEBELUM MEMERIKSA NILAI ELEMEN DALAM CODING DENGAN CONSOLE.LOG().
// SECARA SINGKAT Tanda '++' SAMA DENGAN NILAI INCRAMENT, YANG DIMANA NILAI INCRAMENT ATAU TANDA '++'
// TANDA '++' INCRAMENT ITU LITERALLY ARTINYA = "TAMBAH SATU" ATAU "ISI CONTENT YANG BERIKUTNYA"
// INI PERBANDINGAN PENGGUNAAN INCRAMENT SEBELUM CONSOLE.LOG(ELEMEN DALAM ARRAY)

enterkosong = ' ';
console.log(enterkosong);

const StudiKasusWhile2 = 'Finding A Name :';
console.log(StudiKasusWhile2);

enterkosong = ' ';
console.log(enterkosong);

const KumpulanNama = ['Dexter', 'KEQING', 'HAYABUSA', 'LOLITA', 'BABOON SANTOSO'];
const NamaYangDicari = 'BABOON SANTOSO';

let findName = false;
let index = 0;

while (index <= KumpulanNama.length - 1) {
    console.log(KumpulanNama[index])
    if (KumpulanNama[index] === NamaYangDicari) {
        findName = true;
        console.log(`Number Found, the number is ${NamaYangDicari}`);
        break;
    } index++;
};

// Kenapa 'Dexter, DIPERHITUNGKAN DALAM PROSES WHILE? INI DIKAREKAN PENEMPATAN number++ YANG MERUPAKAN
// NILAI INCRAMENT DITEMPATKAN SESUDAH KOMPUTER MEMERIKSA NILAI ELEMEN DALAM CODING DENGAN CONSOLE.LOG().
// SECARA SINGKAT Tanda '++' SAMA DENGAN NILAI INCRAMENT, YANG DIMANA NILAI INCRAMENT ATAU TANDA '++'
// TANDA '++' INCRAMENT ITU LITERALLY ARTINYA = "TAMBAH SATU" ATAU "ISI CONTENT YANG BERIKUTNYA"
// INI PERBANDINGAN PENGGUNAAN INCRAMENT SESUDAH CONSOLE.LOG(ELEMEN DALAM ARRAY)

enterkosong = ' ';
console.log(enterkosong);

enterkosong = ' ';
console.log(enterkosong);

const StudiKasusWhile3 = ' MENGHITUNG TOTAL BELANJAAN BAGI SETIAP CUSTOMER :';
console.log(StudiKasusWhile3);

enterkosong = ' ';
console.log(enterkosong);

const DataItem = [
    {product: 'Sabun', harga: 8500},
    {product: 'Sampo', harga: 37500},
    {product: 'Baju', harga: 90000},
    {product: 'Jaket', harga: 250000},
    {product: 'Sepatu', harga: 350000},
    {product: 'Pomade', harga: 21000},
    {product: 'Pasta Gigi', harga: 21500},
    {product: 'Pembersih Lantai', harga: 38500},
    {product: 'Sabun Cuci', harga: 34500},
    {product: 'Sweeter', harga: 199000},
    {product: 'Bedak', harga: 49000},
    {product: 'Face Wash', harga: 31000},
    {product: 'Lipstick', harga: 89000},
    {product: 'Conditioner', harga: 33500}
];

const DataSales = [
    {customer: 'Amang', item: [
        {product: 'Sabun', quantity: 2},
        {product: 'Sampo', quantity: 1},
        {product: 'Pasta Gigi', quantity: 1},
        {product: 'Pomade', quantity: 1}
    ]},
    {customer: 'Ossa', item: [
        {product: 'Baju', quantity: 3},
        {product: 'Sweeter', quantity: 1},
        {product: 'Jaket', quantity: 1}
    ]},
    {customer: 'Jeni', item: [
        {product: 'Bedak', quantity: 1},
        {product: 'Conditioner', quantity: 1},
        {product: 'Face Wash', quantity: 1},
        {product: 'Lipstick', quantity: 1}
    ]},
    {customer: 'Julia', item: [
        {product: 'Bedak', quantity: 1},
        {product: 'Conditioner', quantity: 1},
        {product: 'Lipstick', quantity: 1}
    ]},
    {customer: 'Waluyo', item: [
        {product: 'Sabun', quantity: 2},
        {product: 'Sepatu', quantity: 1},
        {product: 'Face Wash', quantity: 1}
    ]},
    {customer: 'Bakiak', item: [
        {product: 'Sepatu', quantity: 2},
        {product: 'Jaket', quantity: 1},
        {product: 'Sweeter', quantity: 1},
    ]},
]; 

// Kalau ketemu dengan data set yang memiliki Array dan didalam Array tersebut memiliki Kriteria yang memiliki Array
// Contoh : [{Kriteria 1: , Kriteria 2: [{Kriteria 3:, Kriteria 4:}]}]
// Kriteria 1 dan Kriteria 2 merupakan Konten dari Array ke-1, dan Kriteria 3 dan Kriteria 4 merupakan koNten dari
// Array ke-2

// Bagaimana Solusi-nya? Caranya definisikan terlebih dahulu looping untuk Variable dataset tersebut
// dengan labeling Variable baru, seperti cara seperti berikut :

let i = 0;
while (i < DataSales.length) { // Index-nya harus lebih kecil dari panjang index dataset, biar ga infinity
    let DataCustomer = DataSales[i];
    let TotalPenjualan = 0; // Undefined sebagai Wadah untuk proses return + looping (while)

    // Langkah kedua untuk memproses 2 dataset secara bersamaan?
    let j = 0;
    while (j < DataCustomer.item.length) { // Mengambil data looping dalam Kriteria 2 yang memiliki Sub-Kriteria
        let TipeDanQuantityProdukyangDibeli = DataCustomer.item[j];
        let SinkronisasiDataset1danDataset2 = DataItem.find(
            ItemyangDicari => ItemyangDicari.product === TipeDanQuantityProdukyangDibeli.product
        ); // Untuk Mencocokan DataItem dan DataSales, yang pengen dicocokan product-nya dulu
        if (SinkronisasiDataset1danDataset2) {
            TotalPenjualan += SinkronisasiDataset1danDataset2.harga * TipeDanQuantityProdukyangDibeli.quantity
        };
        j++;
    };
    console.log(`${DataCustomer.customer} : Rp. ${TotalPenjualan}`)
    i++;
};

// Kenapa yang 'DataSales' digunakan terlebih dahulu dalam fungsi 'while' yang ke-1?
// Dikarenakan : 
// 1). isi konten/data dari dataset 1 'DataSales' terdapat nilai yang ingin diproses, yaitu quantity
// 2). isi konten/data dari dataset 1 'DataSales' terdapat nilai yang sama dengan dataset 2 'DataItem'
// yaitu, product (jenis product)
// 3). Diperlukan Fungsi Looping + Return (while) untuk melakukan proses codingan secara berurutan sesuai dengan
// isi dalam Array (Dikarenakan kita pengen tau Total Pembelanjaan dari setiap Customer yang berada dalam Array 'DataSales')


// Kenapa 'DataItem' dimasukan berikut-nya dan dimasukan kedalam fungsi 'while' yang ke-2?
// dikarenakan :
// 1). Diperlukan Fungsi Looping + return (while) untuk melakukan proses secara berurutan sesuai dengan isi dalam Array
// (Dikarenkan di 'DataItem' ini memiliki data/konten berupa Jenis Product dan Harga, yang akan dicocokan dan juga
// diproses bersama dengan Dataset 2 'DataSales')
// 2). Dengan Apa dataset 1 (DataItem) dicocokan dengan dataset 2 (DataSales), yaitu dengan fungsi :
// Dataset1.find(VariableBaru => VariableBaru.KriteriayangDicari === DataSales[i].KriteriaUtama[j].KriteriayangDicari)
// 3) Dengan Apa dataset 1 (DataItem) dapat diproses besamaan dengan dataset 2? yaitu dengan fungsi :
// while dan if? penjelasan :
// A). while digunakan sebagai Looping + Return proses codingan secara berurutan sesuai dengan isi Content Array
// B). IF digunakan sebagai pencocokan dan juga proses perhitungan antara Dataset1 dan Dataset2

enterkosong = ' ';
console.log(enterkosong);

enterkosong = ' ';
console.log(enterkosong);

const QuizAGIP1 = ' MELAKUKAN TOTAL DENGAN FOR LOOPING :';
console.log(QuizAGIP1);

enterkosong = ' ';
console.log(enterkosong);

let HargaPembelian = [15000, 30000, 50000, 100000, 500000];

let TotalHargaPembelian = 0;

for (let i = 0; i < HargaPembelian.length; i++) {
    const LoopingHargaPembelian = HargaPembelian[i];
    TotalHargaPembelian += LoopingHargaPembelian;
}; 

console.log(`Total Harga Belanjaan kamu : Rp. ${TotalHargaPembelian}`)
// Operator += dalam JavaScript adalah operator penugasan yang menggabungkan atau menambahkan nilai ke variabel 
// yang sudah ada, dan kemudian menyimpannya kembali pada variabel yang sama. Jadi mirip kayak return buat penambahan


enterkosong = ' ';
console.log(enterkosong);

enterkosong = ' ';
console.log(enterkosong);

const QuizAGIP2 = ' Cari Kalimat tertentu dengan menggunakan while :';
console.log(QuizAGIP2);

enterkosong = ' ';
console.log(enterkosong);

const requiredKey = ['Red Key', 'Blue Key', 'Green key', 'Yellow Key', 'Golden Key', 'White Key', 'Black Key'];
const Key = 'Golden Key';

let findkey = false;
let x = 0;

while (x <= requiredKey.length) {
    console.log(requiredKey[x])
    if (requiredKey[x] === Key) {
        findkey = true;
        console.log(`This is your Key, your Key is ${Key}`);
        break;
    } x++;
};

enterkosong = ' ';
console.log(enterkosong);

const QuizAGIP3 = ' Menggabungkan Looping dengan IF, seperti Fungsi While :';
console.log(QuizAGIP3);

enterkosong = ' ';
console.log(enterkosong);

// Melakukan Looping sekalian mengecek setiap isi dalam Array, apabila ada kecocokan dengan yang diinginkan
// Condition True  : You have been Opened the door
// Condition False : You dont have the right key to open the door

const DaftarKunci = ['Red Key', 'Blue Key', 'Green key', 'Yellow Key', 'Golden Key', 'White Key', 'Black Key'];
const Kuncinya = 'Golden Key';

for (let i = 0; i < DaftarKunci.length; i++) {
    const LoopingDaftarKunci = DaftarKunci[i];
    if (LoopingDaftarKunci === Kuncinya) {
        console.log(`Finally, You have been Opened the door (${LoopingDaftarKunci})`);
        break;
    } else {
        console.log(`You dont have the right key to open the door (${LoopingDaftarKunci})`)
    }
}; 

enterkosong = ' ';
console.log(enterkosong);

enterkosong = ' ';
console.log(enterkosong);

const QuizAGIP4 = ' Menggabungkan Looping dengan IF, dengan menggunakan Flagging:';
console.log(QuizAGIP4);

enterkosong = ' ';
console.log(enterkosong);

// Melakukan Looping sekalian mengecek setiap isi dalam Array, apabila ada kecocokan dengan yang diinginkan
// Condition True  : You have been Opened the door
// Condition False : You dont have the right key to open the door

const DaftarKartu = ['Simpati', 'Halo', 'Indosat', 'XL', '3', 'esia', 'Mentari'];
const Kartunya = '3';

let KartuKriteria = false;

for (let i = 0; i < DaftarKartu.length; i++) {
    const LoopingDaftarKartu = DaftarKartu[i];
    if (LoopingDaftarKartu === Kartunya) {
        KartuKriteria = true; // Fungsi Flag seperti ini, gunanya memaksa hasil IF itu sama seperti apa yang dicari
    }; // didalam Array
}; 

// Jika menggunakan Flagging acuan dengan Nilai False, dan juga menggunakan Flagging di Looping dengan nilai yg sama,
// maka nilainya akan merujuk kepada nilai yang salah, dan tidak bisa mentrigger console.log() yang benar

// Jika menggunakan Flagging acuan dengan nilai True, dan juga menggunakan Flagging di Looping dengan nilai yg beda,
// maka nilainya akan merujuk pada nilai yang benar, dan hasilnya pun sesuai dengan trigger console.log()
// disini Console.log(`...... ${Kartunya}`)

// Flagging ini Fungsinya mencocokan NILAI ACUAN dengan isi konten yang dilooping (Array yang dilooping)

if (KartuKriteria === true) {
    console.log(`This is your SIM CARD (${Kartunya})`)
} else {
    console.log(`SIM CARD-nya bukan yang dicari`)
};

enterkosong = ' ';
console.log(enterkosong);

enterkosong = ' ';
console.log(enterkosong);

