// RoadMap :
// 1). Fungsi-fungsi yang bisa digunakan dalam cooding
// 2). looping dengan Object 

// Introduction of Object
let enterkosong = ' ';
console.log(enterkosong);

let ObjectDefinition = { // -> Ini variable Object 
    x: 0, y: 1
};

console.log(ObjectDefinition.x); // mengambil nilai x pada ObjectDefinition = 0
console.log(ObjectDefinition.y); // mengambil nilai y pada ObjectDefinition = 1

// atau

console.log(ObjectDefinition.x && ObjectDefinition.y);
 // Trivia tanda && dan | tidak bisa digunakan dalam console.log()

 // Menambahkan Element/Content kedalam suatu Object (METODE INI HANYA BISA)

 ObjectDefinition.WOW = 'WOW';
 ObjectDefinition.z = 3;


console.log(ObjectDefinition);
console.log(enterkosong);

 // Menambahkan Element ke dalam "Wadah" Object yang mungkin digunakan kembali pada Object
 // Contoh ke-1 
console.log('Contoh ke-1 Menggunakan "Wadah" kedalam Object :');
console.log(enterkosong);

 let ObjectVessel = {};

 ObjectVessel.a = 0;
 ObjectVessel.p = 1;
 ObjectVessel.a = 2;

console.log(ObjectVessel); // Jatoh-nya mirip kayak let
console.log(enterkosong)
// Contoh ke-2 :
console.log('Contoh ke-2 Menggunakan "Wadah" kedalam Object :');
console.log(enterkosong);

let NewObject = new Object();

NewObject.X = 1;
NewObject.y = 2;
NewObject.z = 3;

console.log(NewObject);
console.log(enterkosong);

console.log('Mendelete Property p pada ObjectVessel p: 1 a:2 tadinya');
console.log(enterkosong);
// Mendelet Element/Content dari sebuah Object

delete ObjectVessel.p;

console.log(ObjectVessel)
console.log(enterkosong);

// 

// Number constructor
let myNumber = 42;

// Accessing the constructor of the number
console.log(myNumber.constructor);  // Output: [Function: Number]

console.log(enterkosong);

console.log('Mengupdate Nilai dari Property dalam Object : dari X = 0 jadi X = 10');
console.log(enterkosong);

let testupdate = { x: 0, y: 0 };
var testupdate2 = {...testupdate}; 
// ...Variable => Fungsinya Biasanya digunakan untuk menyalin atau menggabungkan array/objek.
// Khusus untuk menyalin, ...Variable memungkinkan meng-copy Nilai dalam Object (Property dan Nilai-nya)
// Object dengan Label Variable yang baru. Bukan Mirip kayak let

testupdate2.x = 10; // update point2's x property to 10

console.log(testupdate.x); // X masih 0, gegara {...testupdate} 
console.log(testupdate2.x); // X masih 10, gegara {...testupdate} yang meng-copy Nilai Object ke Object yang baru

console.log(enterkosong);
console.log('Mengupdate Nilai dari Property dalam Object sekaligus : dari X = 0 & Y = 0 jadi X = 10 & Y = 10');
console.log(enterkosong);

let update2propertyObject = { x: 0, y: 0 };
let update2propertyObject2 = update2propertyObject;

update2propertyObject = { x: 10, y: 10 };

console.log(update2propertyObject);
console.log(update2propertyObject);

console.log(enterkosong);
console.log('Mengupdate Nilai dari Property dalam Object sekaligus : dari X = 0 & Y = 0 jadi X = 10 & Y = 10');
console.log(enterkosong);

// Iterating ATAU Looping over an object
// Cara Looping Object dengan fungsi for in (dengan Variable Labeling like Var, Const, let)

let IterationObject = { x: 1, y: 2 };

for (let i in IterationObject) {
    console.log(IterationObject[i]); 
}; // fungsi dari i disini gunanya sebagai indeks dari suatu object dan outputnya sebagai berikut :
// 1
// 2

console.log(enterkosong)

// menggunakan function untuk mengcopy Object

function CopyObject(Xfactor) {
    var newObject = {};

    for (var i in Xfactor) {
        newObject[i] = Xfactor[i];
    };
    return newObject;
};

let ObjectSebelumDiubah = { x: 0, y: 0 };
let ObjectSesudahDiubah = CopyObject(ObjectSebelumDiubah); // atau disebut NewObject

// Dikarenakan CopyObject(ObjectSebelumDiubah) maka, ObjectSesudahDiubah -> Xfactor
// Karena newObject[i] =  Xfactor[i] jadi -> NewObject[i] = ObjectSebelumDiubah[i]
// dan menjadikan ObjectSesudahDiubah = NewObject, yang NewObject dan ObjectSebelumDiubah itu beda Object

ObjectSesudahDiubah.x = 10;
ObjectSesudahDiubah.y = 20;

console.log(ObjectSebelumDiubah);
console.log(ObjectSesudahDiubah);

let Exe1 = [
    {NamaKaryawan: 'Ali', position: 'Manager', salary: 8500},
    {NamaKaryawan: 'Adi', position: 'Manager', salary: 9500},
    {NamaKaryawan: 'Aji', position: 'Admin', salary: 4750},
    {NamaKaryawan: "Dian", position: "Developer", salary: 6000 },
    {NamaKaryawan: "Eka", position: "Designer", salary: 5500 },
    {NamaKaryawan: "Jono", position: "Designer", salary: 6000 },
    {NamaKaryawan: "Bob", position: "Developer", salary: 6500 },
    {NamaKaryawan: "Bubu", position: "Admin", salary: 5500 },
    {NamaKaryawan: "Jena", position: "Admin", salary: 4500 },
];
// Filter Data: Gunakan metode .filter() untuk memilih karyawan yang memiliki jabatan tertentu.
// Jumlahkan Gaji: Setelah mendapatkan data karyawan dengan jabatan yang sesuai, gunakan .reduce()
// untuk menjumlahkan gaji mereka.
// Hitung rata-rata Setelah gaji dijumlahkan, bagi hasilnya dengan jumlah karyawan yang ada untuk mendapatkan rata-rata.
// 
console.log("Dengan Function");
console.log(enterkosong);

function CalculateAverageSalaryByPosition(DataDataEmployee, position) {
    let FilteredEmployeeByEachPosition = DataDataEmployee.filter(SelectedPosition => SelectedPosition.position === position);
    // Kenapa DataDataEmployee.filter? karena "DataDataEmployee" nanti-nya ingin digantikan dengan Object let Exe1
    
    if (FilteredEmployeeByEachPosition.length === 0) { // Jika isi dari Index tidak ada atau sama dengan 0, maka tidak diketehui
        return 'Position not found';
    }

    if (FilteredEmployeeByEachPosition.length > 0) {
        let TotalSalarybyEachPosition = FilteredEmployeeByEachPosition.reduce((accumulation, SelectedPosition) => accumulation + SelectedPosition.salary, 0);
        return TotalSalarybyEachPosition / FilteredEmployeeByEachPosition.length;
    };
};

console.log('Rata-rata gaji Manager:', CalculateAverageSalaryByPosition(Exe1, "Manager"));
console.log('Rata-rata gaji Developer:', CalculateAverageSalaryByPosition(Exe1, "Developer"));
console.log('Rata-rata gaji Designer:', CalculateAverageSalaryByPosition(Exe1, "Designer"));
console.log('Rata-rata gaji Admin:', CalculateAverageSalaryByPosition(Exe1, "Admin"));
console.log('Rata-rata gaji CEO:', CalculateAverageSalaryByPosition(Exe1, "CEO"));

// Kegunaan dari params/parameter function ini atau (Parameter-1, parameter-2) kegunaan-nya BANYAK BANGET.
// 1). selain bisa "sebagai fungsi yang dimana bisa digunakan pada proses coding yang berbeda selama di dalam
// function, seperti menggantikan fungsi [i] menjadi [TypeofSeatOption]

// 2). params/Parameter function ini, bisa digunakan sebagai mengambil

// LabelNamaFunction(===, ===); kenapa saya tulis '===' ? dikarenakan params-1, params-2, dan params-'n' fungsinya
// 1). bisa mengsubtitusi/menggantikan dan memasukan sebuah data atau proses kedalam proses yang sudah ditentukan 
// oleh function dengan menempatkan VariableNama data atau VariableNama proses di params-1, params-2, atau params-n
// sesuai dengan yang sudah diproses pada fungsi.

console.log(enterkosong);
console.log("Dengan Function dan Nested Loop agar memudahkan console.log");
console.log(enterkosong);

function MenghitungRerataGajiKaryawanSetiapPosition(ArrayDataKaryawan, SelectedPosition) {
    let result = [];

    for (let i = 0; i < SelectedPosition.length; i++) {
        let ConfirmedPosition = SelectedPosition[i];
        let TotalSalary = 0;
        let Count = 0; 
// Count untuk menampung berapa banyak data yang memiliki nilai yang sama, sesuai dengan data yang divalidasi
// dengan IF

        for (let j = 0; j < ArrayDataKaryawan.length; j++) {
            const ArrayDataKaryawanLooping = ArrayDataKaryawan[j];
            if (ArrayDataKaryawanLooping.position === ConfirmedPosition) {   
                TotalSalary += ArrayDataKaryawanLooping.salary;
                Count++; // Kegunaan "++" intinya untuk setiap kali kondisi di dalam if terpenuhi, maka nilai count
                     // bertambah 1
            };
        };

        if (Count === 0) {
            result.push(`${ConfirmedPosition}: Position not found `);
// ${ConfirmedPosition}: Position not found dimasukkan kedalam Array result, apabila 
        } else {
            let AverageSalary = TotalSalary / Count;
            result.push(`${ConfirmedPosition}: ${AverageSalary}`);
        };
    };
    console.log(result.join("\n"))
// .join("\n") = fungsinya untuk membuat elemen array yang digabungkan akan dipisahkan kedalam baris baru, mirip kayak enter kalo lagi typing
};

MenghitungRerataGajiKaryawanSetiapPosition(Exe1, ["Manager", "Admin", "Developer", "Designer", "CEO"]);
console.log(enterkosong);
const Exe2 = {
    firstName: "John",
    lastName: "Doe",
    age: 25
};

// Expected Output :
// John Doe is 25 years old
// 

let Exe2Simplify1 = Exe2.firstName;
let Exe2Simplify2 = Exe2.lastName;
let Exe2Simplify3 = Exe2.age;

console.log(`${Exe2Simplify1} ${Exe2Simplify2} is ${Exe2Simplify3} years-old`)
console.log(enterkosong)

let Exe3 = [
    {firstName: "John Doe", Domicile: "Jakarta", age: 25, GPA: 2.69, experience: 2},
    {firstName: "Bosche Ottoman", Domicile: "Bandung", age: 22, GPA: 2.71, experience: 0},
    {firstName: "Bob Lorde", Domicile: "Tangerang", age: 24, GPA: 3.0, experience: 1},
    {firstName: "Alice Warner", Domicile: "Tangerang", age: 23, GPA: 2.65, experience: 0},
    {firstName: "Jack Whittaker", Domicile: "Medan", age: 27, GPA: 2.74, experience: 2},
    {firstName: "Bella Sophie", Domicile: "Jakarta", age: 22, GPA: 3.2, experience: 0},
    {firstName: "Benny Warner", Domicile: "Depok", age: 25, GPA: 2.75, experience: 1},
    {firstName: "Jena Johnson", Domicile: "Bandung", age: 23, GPA: 3.5, experience: 0},
    {firstName: "James Benson", Domicile: "Jakarta", age: 22, GPA: 3.1, experience: 0},
    {firstName: "John Cena", Domicile: "Surabaya", age: 25, GPA: 2.7, experience: 3},
];


// PENILAIAN KANDIDAT BERDASARKAN JARAK DOMISILI KE HEAD OFFICE

function toRad(value) {
    return value * Math.PI / 180;
}

function haversineDistance(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
        Math.sin(dLat / 2) ** 2 +
        Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
        Math.sin(dLon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

const HeadOfficeCoordinate = { lat: -6.1756, lon: 106.6299 };

const CandidateDomicileOptionCoordinate = {
    "Jakarta": { lat: -6.1944, lon: 106.8229 },
    "Bandung": { lat: -6.9175, lon: 107.6191 },
    "Tangerang": { lat: -6.1756, lon: 106.6299 },
    "Medan": { lat: 3.5952, lon: 98.6722 },
    "Depok": { lat: -6.4025, lon: 106.7942 },
    "Surabaya": { lat: -7.2575, lon: 112.7521 }
};

let EachCandidateScorebyDomicile = [];
const MaxDistance = 1500;

let DistanceKMforEachCandidateArray = [];
// let CandidateScoringByDomicile = 
Exe3.forEach(Exe3 => {
    const DistanceKMforEachDomicileOption = CandidateDomicileOptionCoordinate[Exe3.Domicile];

    // Jika domisili ditemukan
    const DistanceKMforEachCandidate = DistanceKMforEachDomicileOption
        ? haversineDistance(
            DistanceKMforEachDomicileOption.lat, 
            DistanceKMforEachDomicileOption.lon, 
            HeadOfficeCoordinate.lat,  
            HeadOfficeCoordinate.lon,
        )
        : MaxDistance;  // Jika domisili tidak ditemukan, gunakan MaxDistance

    DistanceKMforEachCandidateArray.push(DistanceKMforEachCandidate);
    // Menghitung skor dan pastikan tidak menghasilkan nilai 0 (minimal 1)
    const score = ((1 - (DistanceKMforEachCandidate / MaxDistance)) * 100) * (20 / 100);

    EachCandidateScorebyDomicile.push(Math.round(score));

});
console.log(enterkosong);
console.log(DistanceKMforEachCandidateArray)
console.log(enterkosong);
console.log(EachCandidateScorebyDomicile);

// PENILAIAN SESUAI KANDIDAT BERDASARKAN GPA

let EachCandidateScorebyGPA = [];

Exe3.forEach(Exe3 => {
    const CriteriaForMaximumGPA = 4.0;
    const CriteriaForMinimumGPA = 1.0;

    const EachCandidateGPA = Exe3.GPA
    
    if (EachCandidateGPA > CriteriaForMinimumGPA && EachCandidateGPA < CriteriaForMaximumGPA) {
        EachCandidateScorebyGPA.push(Math.round(
            (((EachCandidateGPA - CriteriaForMinimumGPA) / (CriteriaForMaximumGPA - CriteriaForMinimumGPA)) * 100) * (30 / 100)
        ));
    };
});

console.log(EachCandidateScorebyGPA);


let EachCandidateScorebyAge = [];

Exe3.forEach(Exe3 => {
    const MinimumAge = 22;
    const MaximumAge = 35;

    const EachCandidateAge = Exe3.age;

    if (EachCandidateAge >= MinimumAge && EachCandidateAge <= MaximumAge) {
        EachCandidateScorebyAge.push(Math.round(
            (((MaximumAge - EachCandidateAge) / (MaximumAge - MinimumAge)) * 100) * (15 / 100)
        ));
    };
});

console.log(EachCandidateScorebyAge);

let EachCandidateScorebyExperience = []; 

Exe3.forEach(Exe3 => {
    const MaximumEXP = 7;
    const MinimumEXP = 0;

    const EachCandidateExperience = Exe3.experience;

    if (EachCandidateExperience >= MinimumEXP && EachCandidateExperience <= MaximumEXP) {
        EachCandidateScorebyExperience.push(Math.round(
            (((EachCandidateExperience - MinimumEXP) / (MaximumEXP - MinimumEXP)) * 100) * (35 / 100)
        ));
    };
});

console.log(EachCandidateScorebyExperience);
console.log(enterkosong)

let FinalCandidateScoring = [];
let TotalScore = '';


for (let i = 0; i < Exe3.length; i++) {
    const Exe3Looping = Exe3[i];

    let NamaKandidat = Exe3Looping.firstName;
    let UmurKandidat = Exe3Looping.age;
    let DomisiliKandidat = Exe3Looping.Domicile;
    let ScorebyGPA = EachCandidateScorebyGPA[i];
    let ScorebyAge = EachCandidateScorebyAge[i];
    let ScorebyDomicile = EachCandidateScorebyDomicile[i];
    let ScorebyExperience = EachCandidateScorebyExperience[i];

    TotalScore = ScorebyGPA + ScorebyAge + ScorebyDomicile + ScorebyExperience;

    FinalCandidateScoring.push({
        namakandidat: NamaKandidat,
        totalscore: Math.round(TotalScore),
        umur: UmurKandidat,
        domisili: DomisiliKandidat
    });
};

FinalCandidateScoring.sort((a, b) => b.totalscore - a.totalscore);



console.log(enterkosong);
console.log('Ranking list kandidat Terpilih :')
console.log(enterkosong);
console.log(FinalCandidateScoring);
console.log(enterkosong);



function PrioritasKandidat(ArrayPenampungPrioritasKandidat, DataFinalKandidat) {
    ArrayPenampungPrioritasKandidat.push(`${DataFinalKandidat.namakandidat} | ${DataFinalKandidat.domisili} | score : ${DataFinalKandidat.totalscore}`)
};

let FirstPriorityCandidate = [];
let SecondPriorityCandidate = [];
let ThirdPriorityCandidate = [];
let FourthPriorityCandidate = [];
let FifthPriorityCandidate = [];
let SixthPriorityCandidate = [];
let SeventhPriorityCandidate = [];
let EightPriorityCandidate = [];
let NinthPriorityCandidate = [];
let TenthPriorirtyCandidate = [];
let NotPriorityCandidate = [];

let FinalResultForCandidate = [];

for (let i = 0; i < FinalCandidateScoring.length; i++) {
    const FinalCandidateScoringLooping = FinalCandidateScoring[i];

    let FinalNamaKandidat = FinalCandidateScoringLooping.namakandidat;
    let FinalUmurKandidat = FinalCandidateScoringLooping.umur;
    let FinalDomisiliKandidat = FinalCandidateScoringLooping.domisili;
    let FinalPenilaianKandidat = FinalCandidateScoringLooping.totalscore;
    let SelisihJarakKandidat  = DistanceKMforEachCandidateArray[i];
    

    if (FinalPenilaianKandidat >= 55 && SelisihJarakKandidat <= 20 && FinalUmurKandidat <= 25) {
        PrioritasKandidat(FirstPriorityCandidate, FinalCandidateScoringLooping)
    } else if (FinalPenilaianKandidat >= 55 && SelisihJarakKandidat <= 50 && FinalUmurKandidat <= 25) {
        PrioritasKandidat(SecondPriorityCandidate, FinalCandidateScoringLooping)
    } else if (FinalPenilaianKandidat >= 55 && SelisihJarakKandidat <= 100 && FinalUmurKandidat <= 25) {
        PrioritasKandidat(ThirdPriorityCandidate, FinalCandidateScoringLooping);
    } else if (FinalPenilaianKandidat >= 55 && SelisihJarakKandidat <= 20 && FinalUmurKandidat <= 28) {
        PrioritasKandidat(FourthPriorityCandidate, FinalCandidateScoringLooping);
    } else if (FinalPenilaianKandidat >= 55 && SelisihJarakKandidat <= 500 && FinalUmurKandidat <= 25) {
        PrioritasKandidat(FifthPriorityCandidate, FinalCandidateScoringLooping);
    }  else if (FinalPenilaianKandidat >= 55 && SelisihJarakKandidat <= 50 && FinalUmurKandidat <= 28) {
        PrioritasKandidat(SixthPriorityCandidate, FinalCandidateScoringLooping);
    }  else if (FinalPenilaianKandidat >= 55 && SelisihJarakKandidat <= 150 && FinalUmurKandidat <= 28) {
        PrioritasKandidat(SeventhPriorityCandidate, FinalCandidateScoringLooping);
    } else if (FinalPenilaianKandidat >= 52 && SelisihJarakKandidat <= 1000 && FinalUmurKandidat <= 25) {
        PrioritasKandidat(EightPriorityCandidate, FinalCandidateScoringLooping);
    } else if (FinalPenilaianKandidat >= 52 && SelisihJarakKandidat <= 700 && FinalUmurKandidat <= 28) {
        PrioritasKandidat(NinthPriorityCandidate, FinalCandidateScoringLooping);
    } else if (FinalPenilaianKandidat < 52 && FinalPenilaianKandidat >= 50 ) {
        PrioritasKandidat(TenthPriorirtyCandidate, FinalCandidateScoringLooping);
    } else if (FinalPenilaianKandidat < 50 ) {
        PrioritasKandidat(NotPriorityCandidate, FinalCandidateScoringLooping);
    };
};

function MenampilkanKeputusanPenilaianKandidat (UrutanPrioritas, ArrayPenampungFinalKandidat) {
    if (ArrayPenampungFinalKandidat.length > 0) {
        FinalResultForCandidate.push(`${UrutanPrioritas} :`);
            ArrayPenampungFinalKandidat.forEach(SetiapArrayPrioritas => {
            FinalResultForCandidate.push(`- ${SetiapArrayPrioritas}`)   
        });
        FinalResultForCandidate.push("");
    };
};

MenampilkanKeputusanPenilaianKandidat('Priotas Utama', FirstPriorityCandidate);
MenampilkanKeputusanPenilaianKandidat('Priotas Kedua', SecondPriorityCandidate);
MenampilkanKeputusanPenilaianKandidat('Priotas Ketiga', ThirdPriorityCandidate);
MenampilkanKeputusanPenilaianKandidat('Priotas Keempat', FourthPriorityCandidate);
MenampilkanKeputusanPenilaianKandidat('Priotas Kelima', FifthPriorityCandidate);
MenampilkanKeputusanPenilaianKandidat('Priotas Keenam', SixthPriorityCandidate);
MenampilkanKeputusanPenilaianKandidat('Priotas Ketujuh', SeventhPriorityCandidate);
MenampilkanKeputusanPenilaianKandidat('Priotas Kedelapan', EightPriorityCandidate);
MenampilkanKeputusanPenilaianKandidat('Priotas Kesembilan', NinthPriorityCandidate);
MenampilkanKeputusanPenilaianKandidat('Priotas Kesepuluh', TenthPriorirtyCandidate);
MenampilkanKeputusanPenilaianKandidat('Tidak masuk Prioritas', NotPriorityCandidate);

console.log(FinalResultForCandidate.join("\n"));

// function PerhitunganPenilaianKandidatBerdasarkanGPA(GPA) {
//     const CriteriaForMinimumGPA = 1.0;
//     const CriteriaForMaximumGPA = 4.0;

//     EachCandidateScorebyDomicile.push()
// }




//Jika tidak ada data untuk kota tersebut, maka saya memberikan nilai default 1000 km
// Sedangkan "?" Fungsinya untuk membuat if-else Contohnya :
// const DistanceKMforEachCandidate = DistanceKMforEachDomicileOption
// ? haversineDistance(DistanceKMforEachDomicileOption.lat, DistanceKMforEachDomicileOption.lon, HeadOfficeCoordinate.lat, DistanceKMforEachDomicileOption.lon)
// : 1000
// dalam bentuk if-else maka jadi seperti :
// let DistanceKMforEachCandidate;
//
// if (DistanceKMforEachDomicileOption) {
// DistanceKMforEachCandidate = haversineDistance(DistanceKMforEachDomicileOption.lat, DistanceKMforEachDomicileOption.lon, HeadOfficeCoordinate.lat, DistanceKMforEachDomicileOption.lon)
// } else {
// DistanceKMforEachCandidate = 1000
// }


// let Exe3Vessel = [];
// let GPArequirements = '';

// let GPAQualified = [];
// let GPAUnderQualified = [];
// let GPAQualifiedAgeUnderQualified = [];
// let GPAQUnderQualifiedAgeQualified = [];
// let GPAQualifiedInTangerang = [];

// function MenambahkanPendaftarkeDalamArray(ArrayPenampungGPA, ArrayDataPelamar) {
//     ArrayPenampungGPA.push(`Nama : ${ArrayDataPelamar.firstName} | Umur : ${ArrayDataPelamar.age} | GPA : ${ArrayDataPelamar.GPA} | Domisili : ${ArrayDataPelamar.Domicile}`);
// };

// for (let i = 0; i < Exe3.length; i++) {
//     const Exe3Looping = Exe3[i];
//     let NamaPelamar1 = Exe3Looping.firstName;
//     let DomisiliPelamar1 = Exe3Looping.Domicile;
//     let UmurPelamar1 = Exe3Looping.age;
//     let GPAPelamar1 = Exe3Looping.GPA;

//     if (UmurPelamar1 <= 28 && GPAPelamar1 >= 2.75 && DomisiliPelamar1 === 'Tangerang') {
//         MenambahkanPendaftarkeDalamArray(GPAQualifiedInTangerang, Exe3Looping);
//     } else if (UmurPelamar1 <= 28 && GPAPelamar1 >= 2.75 && DomisiliPelamar1 !== 'Tangerang') {
//         MenambahkanPendaftarkeDalamArray(GPAQualified, Exe3Looping);
//     } else if (UmurPelamar1 > 28 | GPAPelamar1 >= )
    
// }

// function ListofCandidate(DataKandidat, ExpectedGPA) {
//     for (let i = 0; i < ExpectedGPA.length; i++) {
//         const ExpectedGPAlooping = ExpectedGPA[i];
//         let CandidateGPA = 0;
//         let COUNT = 0;
        
//         for (let j = 0; j < DataKandidat.length; j++) {
//             const DataKandidatLooping = DataKandidat[j];
        
//             let DataKandidatLoopingNama = DataKandidatLooping.firstName;
//             let DataKandidatLoopingDomicile = DataKandidatLooping.Domicile;
//             let DataKandidatLoopingAge = DataKandidatLooping.age;
//             let DataKandidatLoopingGPA = DataKandidatLooping.GPA;

//             if (DataKandidatLoopingGPA >= 2.75) {
//                 CandidateGPA = DataKandidatLoopingGPA;
//                 COUNT++;
//                 Exe3Vessel.push(``)
//             };
//         };
//     }

//     for (let j = 0; j < DataKandidat.length; j++) {
//         const DataKandidatLooping = DataKandidat[j];
    
//         let DataKandidatLoopingNama = DataKandidatLooping.firstName;
//         let DataKandidatLoopingDomicile = DataKandidatLooping.Domicile;
//         let DataKandidatLoopingAge = DataKandidatLooping.age;
//         let DataKandidatLoopingGPA = DataKandidatLooping.GPA;
//     }

// }

// for (let i = 0; i < DataKandidat.length; i++) {
//     const DataKandidatLooping = DataKandidat[i];

//     let DataKandidatLoopingNama = DataKandidatLooping.firstName;
//     let DataKandidatLoopingDomicile = DataKandidatLooping.Domicile;
//     let DataKandidatLoopingAge = DataKandidatLooping.age;
//     let DataKandidatLoopingGPA = DataKandidatLooping.GPA;




//     Exe3Vessel += `${Exe3Simplify1} ${Exe3Simplify2} is ${Exe3Simplify3} years-old` + ", `"
// };

// console.log(Exe3Vessel);