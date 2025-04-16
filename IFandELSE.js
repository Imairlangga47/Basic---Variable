
let enterkosong = " ";
console.log(enterkosong);

// PERBANDINGAN DALAM SUATU ARRAY

// METODE ARRAY YANG DAPAT DIGABUNGKAN DENGAN IF

// 1). VariableLetArray.forEach() : Fungsi yang diberikan ke forEach() AKAN DIJALANKAN PADA SETIAP ELEMEN, DAN TIDAK RETURN VALUE

const MateriforEach = " Menggunakan forEach() dalam Array dengan Fungsi IF";
console.log(MateriforEach);

enterkosong = " ";
console.log(enterkosong);

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(num => {
    if (num > 3) {
        console.log(`Angka ${num} lebih besar dari 3`);
    }
});

enterkosong = " ";
console.log(enterkosong);

// 2). VariableLetArray.every() : Fungsi yang diberikan ke every() AKAN MERANGKUM PADA SETIAP ELEMEN DENGAN PERBANDINGAN

const Materievery = " Menggunakan every() dalam Array dengan Fungsi IF";
console.log(Materievery);

enterkosong = " ";
console.log(enterkosong);

const AngkaGenap = [2, 4, 6, 8];

const ApakahSemuaAngkaGenap = AngkaGenap.every(num => num % 2 === 0); // num % 2 === 0, menandakan pengecekan Angka Genap

if (ApakahSemuaAngkaGenap) {
    console.log("Semua angka genap.");
} else {
    console.log("Ada angka yang tidak genap.");
}

enterkosong = " ";
console.log(enterkosong);

const AngkaGanjil = [1, 2, 5, 8]; // Ada angka Genap yaitu, 2 dan 8

const ApakahSemuaAngkaGanjil = AngkaGanjil.every(num => num % 2 !== 0); // !== menandakan yang SELAIN dari num % 2 !== 0 (SELAIN ANGKA GENAP)

if (ApakahSemuaAngkaGanjil) {
    console.log("Semua angka ganjil.");
} else {
    const AngkaTidakGanjil = AngkaGanjil.filter(num => num % 2 === 0); // num % 2 === 0, menandakan pengecekan Angka Genap
    console.log(`Ada angka yang tidak genap, yaitu ${AngkaTidakGanjil.join(' dan ')}`); // menggabngkan hasil dan menambahkan suatu kata/angka
} // .Filter Digunakan untuk memfilter elemen-elemen (angka) SESUAI DENGAN APA YANG DI FILTER, DAN HASILNYA 2 dan 8

enterkosong = " ";
console.log(enterkosong);

// 3). VariableLetArray.some() : Fungsi ini akan mengembalikan true JIKA ADA SATU KRITERIA yang memenuhi kondisi pada Array

const Materisome = " Menggunakan some() dalam Array dengan Fungsi IF";
console.log(Materisome);

enterkosong = " ";
console.log(enterkosong);

const AdakahAngkaGenap = [1, 2, 5, 8]; // Ada angka Genap yaitu, 2 dan 8

const ApakahAdaAngkaGenap = AdakahAngkaGenap.some(num => num % 2 === 0); // !== menandakan yang SELAIN dari num % 2 !== 0 (SELAIN ANGKA GENAP)

if (ApakahAdaAngkaGenap) {
    const AdaAngkaGenap = AdakahAngkaGenap.filter(num => num % 2 === 0)
    console.log(`Ada angka yang genap ternyata, yaitu ${AdaAngkaGenap.join(' dan ')}`);
} else if (ApakahAdaAngkaGenap) {
    const TernyataGanjilSemua = AdakahAngkaGenap.every(num => num % 2 !== 0)
    console.log(`Ternyata semuanya Ganjil, yaitu ${AdakahAngkaGenap.join(', ')}`);
} else {
    const TernyataGenapSemua = AdakahAngkaGenap.every(num => num % 2 === 0)
    console.log(`Ternyata semuanya Ganjil, yaitu ${AdakahAngkaGenap.join(', ')}`);
} // KENAPA VARIABLE TernyataGanjilSemua dan TernyataGenapSemua menggunakan Variable AdakahAngkaGenap di console.log() ? dikarenakan
// -> JIKA MENGGUNAKAN EVERY() ITU MENGHIMPUN SEGALA SESUATU ELEMEN DALAM ARRAY YANG INGIN DI UJI (AdakahAngkaGenap)

enterkosong = " ";
console.log(enterkosong);

// 4). VariableLetArray.filter() : Fungsinya MENGEKSTRAK NILAI YANG DINGINKAN SESUAI REQUEST FILTER-nya APA (POWERFUL)

const Materifilter = " Menggunakan filter() dalam Array dengan Fungsi IF";
console.log(Materifilter);

enterkosong = " ";
console.log(enterkosong);

const products = [
    { item: "Samsung Galaxy S22", harga: 13499000, RAM: 8, Memory: 512 },
    { item: "iPhone 14", harga: 13999000, RAM: 8, Memory: 512 },
    { item: "Sony Xperia Mark III", harga: 9999000, RAM: 8, Memory: 256 },
    { item: "Xiomi MI 5", harga: 7899000, RAM: 6, Memory: 256 },
    { item: "Realme GT Master", harga: 7699000, RAM: 6, Memory: 256 }
];

const ProdukYangDiinginkan = products.filter(product => product.harga <= 10000000 && product.RAM > 6 && product.Memory >= 256 ); // Memfilter produk dengan harga lebih dari 100

if (ProdukYangDiinginkan.length > 0) {
    ProdukYangDiinginkan.forEach(product => {
        console.log(`JADINYA BELI HAPE: ${product.item}, Harganya Rp.${product.harga},- , RAM: ${product.RAM}GB, & Memory: ${product.Memory}GB`);
    });
} else {
    console.log("BUDGET TIDAK MASHOOOK");
}
 // HASILNYA HARUSNYA "JADINYA BELI HAPE: SONY XPERIA MARK III, HARGANYA RP.9999000, RAM: 8GB, MEMORY: 256GB"

enterkosong = " ";
console.log(enterkosong);


// 5). Menggunakan reduce() dan map() dalam Array dengan Fungsi IF
// .reduce() : Fungsinya mentotalkan nilai di dalama Array
// .map : Fungsinya untuk menghimpun 2 atau lebih proses codingan ke dalam 1 codingan dari suatu Array

const Materireduce = " Menggunakan reduce() dan map() dalam Array dengan Fungsi IF";
console.log(Materireduce);

enterkosong = " ";
console.log(enterkosong);

let NilaiMatematika = [
    {siswa: 'Budi', grade: [60, 85, 72, 94, 56, 78, 88]},
    {siswa: 'Anggi', grade: [85, 75, 90, 84, 72, 83, 92]},
    {siswa: 'Yono', grade: [70, 82, 77, 88, 63, 72, 84]},
    {siswa: 'Bambang', grade: [76, 83, 75, 93, 76, 78, 94]},
    {siswa: 'Yeni', grade: [80, 87, 82, 92, 76, 85, 95]},
];

const passingGradesMTK = NilaiMatematika.map(NilaiMTK => {
    const total = NilaiMTK.grade.reduce((accumulation, grade) => accumulation + grade, 0);
    const average = total / NilaiMTK.grade.length;
    return {
        siswa: NilaiMTK.siswa,
        NilaiRataRata: average,
    };
});

const SiswaYangLULUS = passingGradesMTK.filter(Kriteria => Kriteria.NilaiRataRata >= 75);
const SiswaYangTIDAKLULUS = passingGradesMTK.filter(Kriteria => Kriteria.NilaiRataRata < 75);

const KeteranganLulusdanTidakLulus = "Daftar Passing Grade MTK Siswa :";
console.log(KeteranganLulusdanTidakLulus);

passingGradesMTK.forEach(Kriteria => {
    if (Kriteria.NilaiRataRata >= 75) {
        console.log(`Siswa bernama ${Kriteria.siswa} LULUS dengan Nilai: ${Kriteria.NilaiRataRata.toFixed(1)}`)
    } else {
        console.log(`Siswa bernama ${Kriteria.siswa} TIDAK LULUS dengan Nilai: ${Kriteria.NilaiRataRata.toFixed(1)}`)
    }
});

enterkosong = " ";
console.log(enterkosong);

const StudiKasusTanbahan1 = 'Studi Kasus Tambahan 1 :';
console.log(StudiKasusTanbahan1);

enterkosong = " ";
console.log(enterkosong);

let z = 10;
let y = 3;
let x = 20;
let w = 2;
let v = 5;
let u = 15;
let t = 30;
let s = 6;
let r = 18;
let q = 300;

let ArrayNumberZtoQ = [z, y, x, w, v, u, t, s, r, q];

let ArrayNumberWtoT = ArrayNumberZtoQ.slice(3, 7);

for (let i = 0; i < ArrayNumberWtoT.length; i++) {
    const LoopingWtoT = ArrayNumberWtoT[i];
    console.log(ArrayNumberWtoT[i]);
};

enterkosong = " ";
console.log(enterkosong);

const PenjabaranStudiKasusTambahan1 = 'Penjabaran';
console.log(PenjabaranStudiKasusTambahan1);

enterkosong = " ";
console.log(enterkosong);

ArrayNumberWtoT.forEach(num => {
    if (num > v) {
        console.log(`${num} > ${v}`)
    } else if (num < v) {
        console.log(`${num} < ${v}`)
    } else {
        console.log(`${num} = ${v}`)
    }
});

enterkosong = " ";
console.log(enterkosong);

enterkosong = " ";
console.log(enterkosong);

if (z * y === t) flag = true; 
else flag = false;
  
if (flag = true) {
    console.log(t * 10)
} else{
    console.log("it's false from the early calculation")
}

if (t * z === q) flag = true; 
else flag = false;
  
if (flag = true) {
    console.log(q / y)
} else{
    console.log("it's false from the early calculation")
} // INI CARA PALING TIDAK EFEKTIF, KARENA KALAU BANYAK VARIABLE KELABAKAN

enterkosong = " ";
console.log(enterkosong);

//CONTOH KASUS EXPERT DENGAN MENGGUNAKAN RETURN APABILA INGIN MENGHITUNG SUATU VARIABLE DENGAN BANYAK PERHITUNGAN 
//DAN MENGECEK KEMBALI APAKAH HASIL-NYA SAMA DENGAN YANG ADA DALAM KUMPULAN

//KASUS

let a = 10
let b = 3
let g = 30
let c = 300
let d = 1000
let e = 2
let f = 500
let h = 100

// if yang pertama if (a * b === g), jika benar dilanjukan pada perhitungan yang selanjutnya, jika salah akan dilabeli "ANDA SALAH MENGHITUNG"'
// if yang kedua if (hasil yang benar * a), jika benar hasilnya adalah 300 dan maka dilanjukan pada perhitungan yang selanjutnya, jika salah akan dilabeli "ANDA SALAH MENGHITUNG"'
// if yang ketiga if (hasil yang benar yang kedua / b) jika benar hasilnya adalah 100 dan maka akan dilanjutkan pada perhitungan yang selanjutnya, jika salah akan dilabeli "ANDA SALAH MENGHITUNG"'
// if yang keempat if (hasil yang benar yang ketiga * a) jika benar hasilnya adalah 1000 dan maka akan dilanjutkan pada perhitungan yang selanjutnya, jika salah akan dilabeli "ANDA SALAH MENGHITUNG"
// if yang kelima if (hasil yang benar yang keempat / e) jika benar hasilnya adalah 500 dan maka akan dilanjutkan pada perhitungan yang selanjutnya, jika salah akan dilabeli "ANDA SALAH MENGHITUNG"
// if yang keenam if (hasil yang benar yang kelima / 5) jika benar hasilnya adalah h dan maka akan dilabeli `perhitungan kamu benar dan nilainya adalah ${nilai dari hasil perkalian IF keennam}`, jika salah akan dilabeli "ANDA SALAH MENGHITUNG"

// JAWABAN TIPE 1

function HasilPembawa(Hasil) {
    if (HasilAwal === g) {
        return Hasil
    } else {
        return "Anda Salah Menghitung"
    }
};

const HasilAwal = a * b; 
const HasilTerusan = HasilPembawa(HasilAwal);

console.log ("Nilai Hasil Terusan: ", HasilTerusan);

function PerhitunganBerikutnya(HasilBerikutnya, operator, variableNUM) {
    if (operator === "Multiply") {
        return HasilBerikutnya * variableNUM;
    } else if (operator === "Divided") {
        return HasilBerikutnya / variableNUM;
    } else if (operator === "Add") {
        return HasilBerikutnya + variableNUM;
    } else if (operator === "Minus") {
        return HasilBerikutnya - variableNUM;
    } else {
        return "ANDA SALAH MENGHITUNG"
    }
};


let MetodePerhitungan = [
    { HasilBerikutnya: HasilTerusan, variableNUM: a, operation: "Multiply" },  // Step 2
    { HasilBerikutnya: undefined, variableNUM: b, operation: "Divided" },  // Step 3
    { HasilBerikutnya: undefined, variableNUM: a, operation: "Multiply" },  // Step 4
    { HasilBerikutnya: undefined, variableNUM: e, operation: "Divided" },  // Step 5
    { HasilBerikutnya: undefined, variableNUM: 5, operation: "Divided" },  // Step 6
];

let hasilAkhir = HasilTerusan;

for (let i = 0; i < MetodePerhitungan.length; i++) { // Dari Fungsi For ini langsung didapatkan otomatis Variable[i] (MetodePerhitungan[i])
    const LangkahPerhitungan = MetodePerhitungan[i]; // let yang sudah di looping dengan for
    LangkahPerhitungan.HasilBerikutnya = hasilAkhir // PERTANYAAN KE-2
    hasilAkhir = PerhitunganBerikutnya(
        LangkahPerhitungan.HasilBerikutnya, 
        LangkahPerhitungan.operation, 
        LangkahPerhitungan.variableNUM
    );  // Pertanyaan ke-1
    console.log(`hasil setelah step ${i+2}: ${hasilAkhir}`);
}
console.log(`Hasil Akhir: ${hasilAkhir}`);

// NOTE PENTING, JADI MAIN-VARIABLE-1.SUB-VARIABLE-2 ITU BERARTI ITU MENGEKSTRAK SUATU NILAI DARI YANG TERDAPAT DALAM VARIABLE-2/SUB-VAR.
// CONTOH :
// const person = {
//     nama: 'ANJA'
//     location: 'Yogyakarta'
// }

// console.log(person.nama) -> Output Anja
// console.log(person.location) -> Output Yogyakarta

// PERTANYAAN KE-1 
// Jadikan LangkahPerhitungan = MetodePerhitungan[i] (Variable let yang telah dilooping), HasilBerikutnya/operation/VariableNUM
// -> Itu sama dengan Sub-Variable dalam Let MetodePerhitungan, Jadi hasilAkhir itu MENGEKSTRAK setiap  Sub-Variable yang ada dalam
// -> Let MetodePerhitungan secara berurutan (LOOPING), dan dimasukan Kembali kedalam "Funtion PerhitunganBerikutnya" yang dimana sudah ada
// -> Proses kalkulasi yang sub-Variable nya sama dengan Let MetodePerhitungan. Coba liat Sub-Variable di function dan let, itu sama.

// PERTANYAAN KE-2 (A = 10 -> A = B -> B = ? -> B = 10)
// Nahkan gua pengen setiap hasilAkhir itu dijadikan kayak InitialValue buat Proses Perhitungan Berikutnya dengan make 
// -> function PerhitnganBerikutnya, JADI KARENA UNDEFINED ITU BISA DIJADIKAN KAYAK WADAH UNTUK MENAMPUNG OUTPUT DARI SUATU PROSES 
// -> PERHITUNGAN, Maka gua pengen MENGEKSTRAK NILAI DARI SETIAP VARIABLE "HasilBerikutnya", Sebagai hasilAkhir yang dimana
// -> hasilAkhir itu gua jadikan sebagai Initial Value dalam bentuk Undefined. 
// KETERANGAN PENTING PERTANYAAN KE-2 
// JADI SETIAP MAU MEMBAWA HASIL DARI PROSES YANG AKAN MAU DIGUNAKAN KEMBALI BETTER STEP KE-1 NGAMBIL NILAI YANG UDAH GUA DEFINISIKAN
// -> CONTOH : LET A = 10, DAN SISANYA MENGGUNAKAN UNDEFINED, KARENA UNDEFINED BISA DIJADIKAN SEBAGAI WADAH HASIL PROSES SEBELUMNYA
// -> KURANG LEBIH YANG GUA PAHAMI SEPERTI ITU

// NOTE TAMBAHAN LAGI :
// JADI UNTUK SETIAP VARIABLE YANG UDAH DIDEFINISKAN TIDAK PERLU MENGGUNAKAN CONST, KENAPA "MetodePerhitungan[i].HasilBerikutnya"
// -> ITU BISA DITULIS LANGSUNG? KARENA MetodePerhitungan[i] ITU SENDIRI MERUPAKAN VARIABLE DEFAULT DARI HASIL PROSES LOOPING DENGAN
// -> FUNGSI FOR, JADI KALAU GAPAKE CONST CEK = MetodePerhitungan[i], CUMAN PERLU tulis langsung MetodePerhitungan dibawah-nya FOR


enterkosong = " ";
console.log(enterkosong);


enterkosong = " ";
console.log(enterkosong);



//JAWABAN TIPE 2

// Fungsi untuk melakukan perhitungan dan validasi
function validateCalculation(hasil, expected, operation) { 
    if (operation === "multiply") { 
        return hasil * expected; 
    } else if (operation === "divide") { 
        return hasil / expected;
    }
    return false;  // Untuk kasus yang tidak dikenali
}
// PENJELASAN :
// function.Variable(Parameter/Var, Parameter/Var, Parameter/Var, ...., Parameter/Var)
// = function untuk menghimpun apa saja variable/parameter yang akan dieksekusi secara berulang dalam satu variable
// if (Operation === "multiply")
// = Kondisi ini memeriksa apakah operation bernilai "multiply" atau "dikali" dalam suatu rumus perhitungan yang dijabarkan dengan let
// else if (operation === "divide") 
// = Kondisi ini memeriksa apakah operation bernilai "divide" atau "dibagi" dalam suatu rumus yang akan dijabarkan dengan fungsi let
// return hasil / expected;
// = retun fungsinya mengembalikan hasil dari suatu proses codingan dari Variable/Parameter yang ingin diolah, yang dimana akan digunakan kembali


// Penjabaran perhitungan dan hasil yang akan digunakan dalam Function
let calculations = [
    { hasil: a * b, expected: g, operation: "multiply" },  // Step 1
    { hasil: a * b, expected: c, operation: "multiply" },  // Step 2
    
];


// PENJELASAN :
// let calculations []
// = Penjabaran perhitungan secara kronologis dalam bentuk Array yang Fungsinya bisa digunakan dengan looping sebagai perhitungan

// PENJELASAN EXPECTED, KENAPA KOK EXPECTED STEP 1 SAMA DENGAN HASIL SEDANGKAN STEP 2 ITU NILAI PEMBAGI WALAU VALUE SAMA?
// Pada langkah pertama (step 1), kita ingin memastikan bahwa hasil dari a * b benar-benar sama dengan nilai g 
// -> (nilai yang diharapkan). Inilah alasan mengapa pada langkah pertama nilai expected harus sama dengan nilai g, 
// -> yaitu nilai yang benar dari perhitungan pertama.

// Pada langkah-langkah berikutnya, kita memvalidasi bahwa hasil perhitungan yang sudah dilakukan sesuai dengan 
// -> nilai yang diharapkan setelah dilakukan operasi pembagian atau perkalian.





// Fungsi untuk memeriksa apakah perhitungan benar
function runCalculations() {
    let hasil = a * b; // Perhitungan pertama untuk memulai
    for (let i = 0; i < calculations.length; i++) {
        let current = calculations[i];
        
        if (validateCalculation(hasil, current.expected, current.operation) !== current.expected) {
            console.log(`Perhitungan kamu benar dan nilainya adalah ${hasil}`);
            return; // JIKA HASIL TIDAK SAMA DENGAN CURRENT.EXPECTED, MAKA IF PADA runCalculations yang dijalankan
        } // YAITU, DENGAN HASIL CONSOLE.LOG("ANDA SALAH MENGHITUNG")

        // Update hasil untuk langkah berikutnya
        hasil = validateCalculation(hasil, current.expected, current.operation);
    }
    // Jika semua perhitungan benar, tampilkan hasil akhir
    console.log("ANDA SALAH MENGHITUNG"); 
}

// Jalankan fungsi
runCalculations();

// PENJELASAN :
// function.RunCalculation()
// = function untuk menghimpun apa saja variable/parameter yang akan dieksekusi secara berulang dalam satu variable
// Penjabaran Simbol Variable() = menandakan bahwa ini adalah sebuah fungsi yang tidak memerlukan parameter input dalam hal ini

// let hasil = a * b; = inisiasi untuk mentrigger penjabaran Perhitungan yang akan digunakan dalam Function, dan 
// -> sebagai patokan awal yang akan dihitung
// KETERANGAN :
// DENGAN let hasil = a * b; MAKA PERHITUNGAN AWAL PADA STEP 1 DALAM ARRAY LET CALCULATIONS PADA 
// Function validateCalculations TIDAK DIHITUNG KEMBALI.
// -> DALAM FUNCTION validateCalculations.
// TANPA let hasil = a * b; MAKA PERHITUNGAN AWAL UNTUK STEP 1 DALAM ARRAY LET CALCULATIONS PADA 
// -> Function validateCalculations MELAKUKKAN PERHITUNGAN LANGSUNG 

// for (let i = 0; i < calculations.length; i++)
// = Fungsi untuk melakukan looping/otomatisasi suatu proses codingan secara otomatis dari suatu variable yang ditentukan, 
// keterangan : disini Var. "Calculations" adalah Variable yang akan dilooping, karena Var Calculations isinya 
// -> penjabaran rumus perhitungan apa saja yang akan digunakan dalam looping

// let current = calculations[i];
// = Variabel sementara yang digunakan untuk menyimpan elemen saat ini dari array calculations pada iterasi/pengulangan [i].

// if (validateCalculation(hasil, current.expected, current.operation) !== current.expected) {console.log("ANDA SALAH MENGHITUNG"); return;}
// = Mengvalidasi proses codingan (disini perhitungan), sehingga    
// KETERANGAN :
// !== = Operator perbandingan ketat (strict inequality), yang memeriksa apakah dua nilai tidak sama
// -> baik dari segi nilai maupun tipe data. Jika hasil dari validateCalculation tidak sama dengan
// -> current.expected, maka blok kode dalam if akan dijalankan.
// hasil = Nilai sementara yang dihasilkan dari perhitungan sebelumnya (dimulai dari a * b pada langkah pertama).
// current.expected = Nilai yang diharapkan sebagai pengkal



// else if (operation === "divide") 
// = Kondisi ini memeriksa apakah operation bernilai "divide" atau "dibagi" dalam suatu rumus yang akan dijabarkan dengan fungsi let
// return hasil / expected;
// = retun fungsinya mengembalikan hasil dari suatu proses codingan dari Variable/Parameter yang ingin diolah, yang dimana akan digunakan kembali



