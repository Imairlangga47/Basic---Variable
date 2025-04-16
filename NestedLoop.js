const requiredKey = ['Red Key', 'Blue Key', 'Green key', 'Yellow Key', 'Golden Key', 'White Key', 'Black Key'];

for (const key of requiredKey) {
    for (const character of key) {
        console.log(character);
    };
}; // Hasil liat di Terminal

let enterkosong = ' ';
console.log(enterkosong);

for (const keys of requiredKey) {
    for (const iterator of keys) {
        console.log(keys);
    };
};// Hasil liat di Terminal

// Penjelasan : 
// Iterator = Fungsi untuk melooping 'sesuatu' sebanyak Index.length, dimana 'sesuatu' itu Array yang ingin dilooping
// (BY DEFAULT)
// Character = Fungsi ini melooping 'sesuatu' dan menjabarkan-nya per Character sesuai dengan seluruh isi konten
// didalam Array (BY DEFAULT) 

// Jadi Nested Loop ini fungsinya untuk melakukan proses secara berurutan sesuai dengan isi konten dalam Array,
// dan Melakukan Looping kembali terhadap hal yang sudah di looping.

// oleh karena itu proses pengulangan looping dilakukan kembali terhadap hal yang sudah dilooping.

// Pada Contoh pertama, Melakukan Looping sesuai dengan Character terlebih dahulu sesuai apa yang ada didalam 
// isi/konten dalam Array sebelum melakukan looping secara berurutan sesuai isi konten.
// Jadi melooping setiap per karakter dulu, baru looping ke sesuai urutan looping sesuai penempatan console.log()

// Pada Contoh kedua, melakukan Looping sesuai dengan Iterator terlebih dahulu sesuai apa yang ada didalam
// isi/konten dalam Array sebelum melakukan Looping secara berurutan sesuai dengan isi konten
// Jadi melooping setiap per Konten dari pertama sebanyak Index.Length dulu, baru looping ke sesuai 
// urutan Loooping sesuai penempatan console.log()

enterkosong = ' ';
console.log(enterkosong);

for (const key of requiredKey) {
    for (const character of key) {
    };
    console.log(key);
}; // Hasil liat di Terminal

enterkosong = ' ';
console.log(enterkosong);

// Kalau Console.log() dilakukan setelah Looping kedua, maka proses dari looping pertama tidak dihiraukan
// dan tidak bisa memasukan object/variable yang ada pada looping kedua.

enterkosong = ' ';
console.log(enterkosong);

for (const key of requiredKey) {
    for (const character of key) {
    };
    console.log(key);
}; // Hasil liat di Terminal

enterkosong = ' ';
console.log(enterkosong);

// Kalau Console.log() dilakukan setelah Looping kedua, maka proses dari looping pertama tidak dihiraukan
// dan tidak bisa memasukan object/variable yang ada pada looping kedua.

const PerbandinganNestedLoopFor = 'Perbandingan Nested Loop For ';
console.log(PerbandinganNestedLoopFor);

enterkosong = ' ';
console.log(enterkosong);

const NestedLoopForBenar = 'Nested Loop For Benar :';
console.log(NestedLoopForBenar);

enterkosong = ' ';
console.log(enterkosong);

let str = '';

for (let i = 0; i < 6; i++) {
    for (let j = 0; i < 6; i++) {
        str += "*";
        console.log(str);
    } 
}

enterkosong = ' ';
console.log(enterkosong);

const Penjelasan1 = 'Jadi untuk menggunakan Nested Loop sebaiknya, console.log() berada didalam Looping ke terakhir, jadi seperti looping biasa kalau hanya menggunakan 2 kali proses looping';
console.log(Penjelasan1);

enterkosong = ' ';
console.log(enterkosong);

const NestedLoopForSalah1 = 'Nested Loop For Salah :';
console.log(NestedLoopForSalah1);

enterkosong = ' ';
console.log(enterkosong);

let dex = '';

for (let i = 0; i < 6; i++) {
    for (let j = 0; i < 6; i++) {
        dex += "#";
    };
    console.log(dex);
};

enterkosong = ' ';
console.log(enterkosong);

const Penjelasan2 = 'Jika console.log() berada didalam Looping seebelumnya, itu Proses Looping yg terakhir diabaikan';
console.log(Penjelasan2);

// Jika console.log() berada didalam Looping seebelumnya, itu membuat Proses Looping yg terakhir diabaikan

enterkosong = ' ';
console.log(enterkosong);

let luk = '';

for (let i = 0; i < 6; i++) {
    for (let j = 0; i < 6; i++) {
        luk += "#";
        console.log(luk);
    } 
    console.log(luk);
}

enterkosong = ' ';
console.log(enterkosong);

const Penjelasan3 = 'Jika console.log() berada didalam Looping seebelumnya dan juga pada looping terakhir, maka console.log proses looping yang paling akhir. lalu memproses looping yang sebelumnya';
console.log(Penjelasan3);

// Jika console.log() berada didalam Looping seebelumnya dan juga pada looping terakhir, maka console.log()
// memproses looping yang paling akhir terlebih dahulu. lalu memproses, looping yang sebelumnya.

enterkosong = ' ';
console.log(enterkosong);

const NestedLoopExe1 = 'Print All Element of Array by Looping to become Number ';
console.log(NestedLoopExe1);

// Expected Output :
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9

enterkosong = ' ';
console.log(enterkosong);

let Exe1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let i = 0; i < Exe1.length; i++) {
    const Exe1Looping = Exe1[i];
    let SplitedExe1Looping = Exe1Looping.join('')
    
    for (let j = 0; j < SplitedExe1Looping.length; j++) {
        const Exe1Answer = SplitedExe1Looping[j];
        console.log(Exe1Answer);
    }
};

enterkosong = ' ';
console.log(enterkosong);

const NestedLoopExe2 = 'Print All Element of Array by Looping to become Number Ganjil ';
console.log(NestedLoopExe2);

// Expected Output :
// 1
// 3
// 5
// 7
// 9

enterkosong = ' ';
console.log(enterkosong);

let Exe2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let i = 0; i < Exe2.length; i++) {
    const Exe2Looping = Exe2[i];
    let Exe2LoopingGanjil = Exe2Looping.filter(num => num % 2 !== 0);
    let SplitedExe2Looping = Exe2LoopingGanjil.join('');
    
    
    for (let j = 0; j < SplitedExe2Looping.length; j++) {
        const Exe2Answer = SplitedExe2Looping[j];
        console.log(Exe2Answer);
    }
};

enterkosong = ' ';
console.log(enterkosong);

const NestedLoopExe3 = 'Sum of Column each sub-element of Array : ';
console.log(NestedLoopExe3);

// Expected Output :
// Sum of Column 1 = 12
// Sum of Column 2 = 15
// Sum of Column 3 = 18

enterkosong = ' ';
console.log(enterkosong);

let Exe3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let ColumnSums = [0, 0, 0];

for (let i = 0; i < Exe3.length; i++) {
    const Exe3Looping = Exe3[i];
    for (let j = 0; j < Exe3[i].length; j++) {
        const Exe3LoopingTwice = Exe3[i][j];
        console.log(Exe3LoopingTwice);
        ColumnSums[j] += Exe3LoopingTwice;
    }
}

for (let j = 0; j < ColumnSums.length; j++) {
    const Exe3Answer = ColumnSums[j];
    console.log(`Sum of Column ${j + 1} = ${Exe3Answer}`);
} // membalik urutan return via ColumsSums di dalam loop, berdasarkan proses looping sebelumnya [i][j]

enterkosong = ' ';
console.log(enterkosong);

let Exe3New = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let ColumnSumsNEW = [0, 0, 0];

for (let j = 0; j < Exe3New.length; j++) {
    const Exe3NewLooping = Exe3New[j];
    for (let i = 0; i < Exe3New[j].length; i++) {
        const Exe3NewLoopingTwice = Exe3New[j][i];
        console.log(Exe3New[j][i]);
        ColumnSumsNEW[j] += Exe3NewLoopingTwice;
    }
}

for (let j = 0; j < ColumnSumsNEW.length; j++) {
    const Exe3NewAnswer = ColumnSumsNEW[j];
    console.log(`Sum of Rows ${j + 1} = ${Exe3NewAnswer}`);
} // melanjutkan urutan return via ColumsSums di dalam loop, berdasarkan proses looping sebelumnya [j][i]

// Penjelasan Pertama : 
// 1). Jadi dalam JavaScript kalau kita sudah mendefinisikan sesuatu dalam looping itu yang digunakan.

// Karena pada Looping Pertama PENAMAAN Index Pertama dilabeli dengan 'i' (huruf atau kata apapun bisa), 
// dan Index Pertama itu selalu didefinisikan kearah baris

// Sedangkan pada Looping Kedua PENAMAAN Index Kedua dilabeli dengan 'j' (huruf atau kata apapun bisa),
// dan Index Kedua itu selalu didefinisikan kearah kolom

// 2). Penjelasan Exe3[I] :
// Exe3[0] = [1, 2, 3]
// Exe3[1] = [4, 5, 6]
// Exe3[2] = [7, 8, 9]

// 3). Penjelasan Exe3[i][j] :
// Exe3[0][0] = 1
// Exe3[0][1] = 2
// Exe3[0][2] = 3
// Exe3[1][0] = 4
// Exe3[1][1] = 5
// Exe3[1][2] = 6
// Exe3[2][0] = 7
// Exe3[2][1] = 8
// Exe3[2][2] = 9

// 4). Penjelasan Kenapa kok bisa ditrigger dari mem-proses dari baris (1, 2, 3, 4, 5, 6, 7, 8, 9), 
// bisa di trigger ke-kolom (1, 4 , 7 -> 2, 5, 8 -> 3, 6, 9) ?

// Itu dikarenakan Looping [i] sudah didefinisikan berdasarkan baris, dan [j] sudah didefinisikan sebagai kolom
// karena kita melakukan looping kembali untuk ColumnSums dengan keterangan secara kolom [j], maka proses urutan 
// looping yang sebelum-nya dibalikan kembali menjadi [j], dengan for untuk ColumnSums[j]

// 1 (proses looping terakhir/kedua)
// 2 (proses looping terakhir/kedua)
// 3 (proses looping terakhir/kedua)
// [ 1, 2, 3 ] (proses looping pertama/sebelumnya)
// 4 (proses looping terakhir/kedua)
// 5 (proses looping terakhir/kedua)
// 6 (proses looping terakhir/kedua)
// [ 4, 5, 6 ] (proses looping pertama/sebelumnya)
// 7 (proses looping terakhir/kedua)
// 8 (proses looping terakhir/kedua)
// 9 (proses looping terakhir/kedua)
// [ 7, 8, 9 ] (proses looping pertama/sebelumnya)

enterkosong = ' ';
console.log(enterkosong);

const Exe3PenjelasanStep = 'Penjelasan Step by Step';
console.log(Exe3PenjelasanStep);

enterkosong = ' ';
console.log(enterkosong);

const Exe3PenjelasanStep1 = 'Penjelasan Step 1 (ColumnSums2 += Exe3LoopingExplanation1; console.log(ColumnSums2) berada di dalam Looping Pertama) :';
console.log(Exe3PenjelasanStep1);

enterkosong = ' ';
console.log(enterkosong);

let ColumnSums2 = [0, 0, 0];

for (let a = 0; a < Exe3.length; a++) {
    const Exe3LoopingExplanation1 = Exe3[a];
    ColumnSums2 += Exe3LoopingExplanation1;
    console.log(ColumnSums2);
        
    for (let z = 0; z < Exe3LoopingExplanation1.length; z++) {
        const Exe3LoopingTwiceExplanation1 = Exe3LoopingExplanation1[z];
    } 
}

// 0,0,01,2,3 atau 0, 0, 0 + 1, 2, 3
// 0,0,01,2,34,5,6 atau 0, 0, 0 + 1, 2, 3 + 4, 5, 6
// 0,0,01,2,34,5,67,8,9 atau 0, 0, 0 + 1, 2, 3 + 4, 5, 6 + 7, 8, 9

enterkosong = ' ';
console.log(enterkosong);

const Exe3PenjelasanStep2 = 'Penjelasan Step 2 (ColumnSums3 += Exe3LoopingExplanation2; console.log(ColumnSums3) berada di dalam Looping Terakhir) :';
console.log(Exe3PenjelasanStep2);

enterkosong = ' ';
console.log(enterkosong);

let ColumnSums3 = [0, 0, 0];

for (let b = 0; b < Exe3.length; b++) {
    const Exe3LoopingExplanation2 = Exe3[b];
    for (let z = 0; z < Exe3LoopingExplanation2.length; z++) {
        const Exe3LoopingTwiceExplanation2 = Exe3LoopingExplanation2[z];
        ColumnSums3 += Exe3LoopingTwiceExplanation2;
        console.log(ColumnSums3);
    } 
}

// 0,0,01 atau 0, 0, 0 + 1
// 0,0,012 atau 0, 0, 0 + 1 + 2
// 0,0,0123 atau 0, 0, 0 + 1 + 2 + 3
// 0,0,01234 atau 0, 0, 0 + 1 + 2 + 3 + 4
// 0,0,012345 atau 0, 0, 0 + 1 + 2 + 3 + 4 + 5
// 0,0,0123456 atau 0, 0, 0 + 1 + 2 + 3 + 4 + 5 + 6
// 0,0,01234567 atau 0, 0, 0 + 1 + 2 + 3 + 4 + 5 + 6 + 7
// 0,0,012345678 atau 0, 0, 0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
// 0,0,0123456789 atau 0, 0, 0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9

enterkosong = ' ';
console.log(enterkosong);

const Exe3PenjelasanStep3 = 'Penjelasan Step 3 :';
console.log(Exe3PenjelasanStep3);

enterkosong = ' ';
console.log(enterkosong);

let ColumnSums4 = [0, 0, 0];

for (let c = 0; c < Exe3.length; c++) {
    const Exe3LoopingExplanation3 = Exe3[c];
    for (let z = 0; z < Exe3LoopingExplanation3.length; z++) {
        const Exe3LoopingTwiceExplanation3 = Exe3LoopingExplanation3[z];
        ColumnSums4 += Exe3LoopingTwiceExplanation3;
    } 
    console.log(ColumnSums4);
}

enterkosong = ' ';
console.log(enterkosong);

const Exe3PenjelasanStep4 = 'Penjelasan Step 4 :';
console.log(Exe3PenjelasanStep4);

enterkosong = ' ';
console.log(enterkosong);

let ColumnSums5 = [0, 0, 0];

for (let c = 0; c < Exe3.length; c++) {
    const Exe3LoopingExplanation4 = Exe3[c];
    for (let z = 0; z < Exe3LoopingExplanation4.length; z++) {
        const Exe3LoopingTwiceExplanation4 = Exe3LoopingExplanation4[z];
        ColumnSums5 += Exe3LoopingTwiceExplanation4;
        console.log(ColumnSums5);
    } 
    console.log(ColumnSums5);
}

enterkosong = ' ';
console.log(enterkosong);

const Exe3PenjelasanStep5 = 'Penjelasan Step 5 :';
console.log(Exe3PenjelasanStep5);

enterkosong = ' ';
console.log(enterkosong);


let ColumnSums6 = [
    [0, 0, 0],
    [1, 1, 1]
];

for (let j = 0; j < ColumnSums6.length; j++) {
    const Exe3AnswerExplanation5 = ColumnSums6[j];
    console.log(Exe3AnswerExplanation5);
};

// Mengiterasi ColumnSum :
// 0
// 0
// 0

enterkosong = ' ';
console.log(enterkosong);

const Exe3LastExplaination = 'Penjelasan Secara General Penggunaan Nested Looping :';
console.log(Exe3LastExplaination);

enterkosong = ' ';
console.log(enterkosong);

let Exe3LastExample = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let i = 0; i < Exe3LastExample.length; i++) {
    const Exe3LastExampleLooping = Exe3LastExample[i];
    for (let j = 0; j < Exe3LastExampleLooping.length; j++) {
        const Exe3LastExampleLoopingTwice = Exe3LastExampleLooping[j];
        console.log(Exe3LastExampleLoopingTwice);
    } 
    console.log(Exe3LastExampleLooping);
}

// 1 (proses looping terakhir/kedua)
// 2 (proses looping terakhir/kedua)
// 3 (proses looping terakhir/kedua)
// [ 1, 2, 3 ] (proses looping pertama/sebelumnya)
// 4 (proses looping terakhir/kedua)
// 5 (proses looping terakhir/kedua)
// 6 (proses looping terakhir/kedua)
// [ 4, 5, 6 ] (proses looping pertama/sebelumnya)
// 7 (proses looping terakhir/kedua)
// 8 (proses looping terakhir/kedua)
// 9 (proses looping terakhir/kedua)
// [ 7, 8, 9 ] (proses looping pertama/sebelumnya)

enterkosong = ' ';
console.log(enterkosong);

// Summary : 
// Jadi kemungkinan benar kalau Looping pertama itu memproses sebuah Array secara Baris

// Kalau Looping kedua itu memproses sebuah Looping pertama/sebelumnya (yang berupa proses secara baris), menjadi
// secara Kolom sesuai dengan ketentuan Looping Pertama.
// Contoh cara proses : 
// Baris ke-1 dalam Array di Proses dulu menjadi kolom atau mungkin secara kearah kolom
// Setelah itu Baris ke-2 dalam Array di Proses menjadi kolom atau mungkin sacara kearah kolom
// Habis itu Baris ke-3 dalam Array di Proses menjadi kolom atau mungkin secara kearah kolom
// Tanda += itu menambahkan proses yang udah dilooping ke proses berikut-nya


enterkosong = ' ';
console.log(enterkosong);

const NestedLoopExe5 = 'Print 2D Array in Matrix Format : ';
console.log(NestedLoopExe5);

// Expected Output :
// 1 2 3
// 4 5 6
// 7 8 9

enterkosong = ' ';
console.log(enterkosong);

let Exe5 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let Exe5Vessel = '';

for (let x = 0; x < Exe5.length; x++) {
    const Exe5Looping = Exe5[x];
    
    for (let y = 0; y < Exe5Looping.length; y++) {
        const Exe5LoopingTwice = Exe5Looping[y];
        Exe5Vessel += Exe5LoopingTwice;
    }
    console.log(Exe5Vessel);
}

// Jika meletakan 'Variable Wadah' sebelum proses looping, maka output yang didapatkan menjadi :
// 123
// 123 + 456
// 123 456 + 789

// Kenapa ini bisa terjadi? dikarenakan hal ini si Variable wadah yang tidak di looping, sehingga fungsi dari
// looping y digunakan untuk memproses berurutan Looping x, sedangkan Variable wadah akan menjadi hasil wadah
// dan hasil wadah akan ditambahkan dengan Proses Looping x secara satu persatu oleh proses looping y

// contoh :

// Exe5[a][0]
// Exe5[a][0]+Exe5[a][1]
// Exe5[a][0]+Exe5[a][1]+Exe5[a][2]

enterkosong = ' ';
console.log(enterkosong);

for (let a = 0; a < Exe5.length; a++) {
    const Exe5Looping2 = Exe5[a];
    let Exe5Vessel2 = '';
    
    for (let y = 0; y < Exe5Looping2.length; y++) {
        const Exe5LoopingTwice2 = Exe5Looping2[y];
        Exe5Vessel2 += Exe5LoopingTwice2;
    }
    console.log(Exe5Vessel2);
}

// Jika meletakan 'Variable Wadah' sebelum proses looping, maka output yang didapatkan menjadi :
// 123
// 456
// 789

// Kenapa ini bisa terjadi? dikarenakan hal ini si Variable wadah itu masuk proses looping X
// MAKA VARIABLE WADAH AKAN MENAMPUNG SETIAP HASIL LOOPING Y, UNTUK SETIAP PROSES LOOPING X[i] kedalam kolom
// Exe[O][y]
// Exe[1][y]
// Exe[2][y]

// Contoh :

// Dikarenakan Proses Pertama looping X atau Exe5[0] adalah [1, 2, 3]
// Maka looping y akan memproses setiap isi dari Looping X atau Exe5[0]
// Exe5[0][0] = 1 -> Hasil Exe5[0][0] -> Output : 1
// Exe5[0][1] = 2 -> Hasil Exe5[0][0]+Hasil Exe5[0][1] -> Output : 12
// Exe5[0][2] = 3 -> Hasil Exe5[0][0]+Hasil Exe5[0][1]+Hasil[0][2] -> Output : 123

// Dikarenakan Proses Pertama Looping X atau Exe5[1] adalah [4,5,6]
// Maka looping y akan memproses setiap isi dari Looping X atau Exe5[1]
// Exe5[0][0] = 1 -> Hasil Exe5[1][0] -> Output : 4
// Exe5[0][1] = 2 -> Hasil Exe5[1][0]+Hasil Exe5[1][1] -> Output : 45
// Exe5[0][2] = 3 -> Hasil Exe5[1][0]+Hasil Exe5[1][1]+Hasil[1][2] -> Output : 456

// Dikarenakan Proses Pertama Looping X atau Exe5[2] adalah [7,8,9]
// Maka looping y akan memproses setiap isi dari Looping X atau Exe5[2]
// Exe5[0][0] = 1 -> Hasil Exe5[2][0] -> Output : 7
// Exe5[0][1] = 2 -> Hasil Exe5[2][0]+Hasil Exe5[2][1] -> Output : 78
// Exe5[0][2] = 3 -> Hasil Exe5[2][0]+Hasil Exe5[2][1]+Hasil[2][2] -> Output : 789

enterkosong = ' ';
console.log(enterkosong);

const NestedLoopExe6 = 'Print 2D Array in Matrix Format : ';
console.log(NestedLoopExe6);

// Expected Output :
// 3 2 1
// 6 5 4
// 9 6 3

enterkosong = ' ';
console.log(enterkosong);

let Exe6 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let i = 0; i < Exe6.length; i++) {
    const Exe6Looping = Exe6[i];
    let Exe6Vessel = ' ';
    
    for (let j = Exe6Looping.length - 1; j >= 0; j--) {
        const Exe6LoopingTwice = Exe6Looping[j];
        Exe6Vessel += Exe6LoopingTwice + ' ';
    }
    console.log(`${Exe6Vessel}`);
};

enterkosong = ' ';
console.log(enterkosong);

const NestedLoopExe7 = 'Print 2D Array in Matrix Format : ';
console.log(NestedLoopExe7);

// Expected Output :
// 1 4 7
// 2 5 8
// 3 6 9

let Exe7 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

enterkosong = ' ';
console.log(enterkosong);

const Exe7Breakdown = 'Exe7 Breakdown (1) :';
console.log(Exe7Breakdown);

enterkosong = ' ';
console.log(enterkosong);

for (let a = 0; a < Exe7.length; a++) {
    const Exe7LoopingRow = Exe7[a];
    let Exe7Vessel = '';
    
    for (let b = 0; b < Exe7.length; b++) {
        const Exe7LoopingColumn = Exe7[b];
        Exe7Vessel += Exe7[b][a] + ' ';
        console.log(Exe7Vessel);
    }
}

enterkosong = ' ';
console.log(enterkosong);

const Exe7Breakdown2 = 'Exe7 Breakdown (2) :';
console.log(Exe7Breakdown2);

enterkosong = ' ';
console.log(enterkosong);

for (let g = 0; g < Exe7.length; g++) {
    const Exe7LoopingRow2 = Exe7[g];
    let Exe7Vessel2 = '';
    
    for (let h = 0; h < Exe7.length; h++) {
        const Exe7LoopingColumn = Exe7[h];
        Exe7Vessel2 += Exe7[h][g] + ' ';
    }
    console.log(Exe7Vessel2);
}

enterkosong = ' ';
console.log(enterkosong);

const Exe7Breakdown3 = 'Exe7 Breakdown (3) :';
console.log(Exe7Breakdown3);

enterkosong = ' ';
console.log(enterkosong);

for (let o = 0; o < Exe7.length; o++) {
    const Exe7LoopingRow3 = Exe7[o];
    let Exe7Vessel3 = '';
    
    for (let p = 0; p < Exe7.length; p++) {
        const Exe7LoopingColumn3 = Exe7[p];
        Exe7Vessel3 += Exe7[o][p] + ' ';
        console.log(Exe7Vessel3);
    }
}

enterkosong = ' ';
console.log(enterkosong);

const Exe7Breakdown4 = 'Exe7 Breakdown (4):';
console.log(Exe7Breakdown4);

enterkosong = ' ';
console.log(enterkosong);

for (let i = 0; i < Exe7.length; i++) {
    let Exe7Vessel4 = '';

    for (let j = 0; j < Exe7.length; j++) {
        Exe7Vessel4 += Exe7[i][j] + ' ';
    }
    console.log(Exe7Vessel4);
};

enterkosong = ' ';
console.log(enterkosong);

const Exe7Breakdown5 = 'Exe7 Breakdown (5):';
console.log(Exe7Breakdown5);

enterkosong = ' ';
console.log(enterkosong);

let Exe7Vessel5 = '';  

for (let c = 0; c < Exe7.length; c++) {
    for (let d = 0; d < Exe7.length; d++) {
        Exe7Vessel5 += Exe7[c][d] + ' ';
    }
    console.log(Exe7Vessel5);
};

enterkosong = ' ';
console.log(enterkosong);

const Exe7Breakdown6 = 'Exe7 Breakdown (6):';
console.log(Exe7Breakdown6);

enterkosong = ' ';
console.log(enterkosong);

let Exe7Vessel6 = '';  

for (let e = 0; e < Exe7.length; e++) {
    for (let f = 0; f < Exe7.length; f++) {
        Exe7Vessel6 += Exe7[f][e] + ' ';
    }
    console.log(Exe7Vessel6);
};

enterkosong = ' ';
console.log(enterkosong);

for (let m = 0; m < Exe7.length; m++) {
    for (let n = 0; n < Exe7.length; n++) {
        console.log(Exe7[m][n]);
    } 
    console.log(Exe7[m]);
};

// DARI CONTOH EXE 7, KITA BISA PAHAM MENGENAI POIN-POIN SEBAGAI BERIKUT :
// 1). Penempatan Console.log() itu penting, seperti contoh Breakdown 1 dan 2, Breakdown 3 dan 4, Breakdown 5 dan 6
// Jika Console.log() di dalam looping Index pertama maka Hasil-nya
// Exe7[i-0] dijabarkan satu per satu secara kolom, seperti :
// Exe7[i-0][j-0]
// Exe7[i-0][j-1]+Exe7[i-0][j-1]
// Exe7[i-0][j-1]+Exe7[i-0][j-2]+Exe7[i-0][j-2]

// Lalu dilanjutkan dengan Exe[i-1] dijabarkan satu2 per kolom dan secara kolom, dan abis itu dilanjutkan Exe[i-2]
// dan seterusnya

// 2). Seperti pada contoh Exe 6, kalau kita definisikan proses looping dengan Index yang berbeda. Maka :
// - Proses Looping Index Pertama itu mendefinisikan Baris
// - Proses Looping Index Kedua itu mendefinisikan Kolom

// Maka :

// VariableArray[Index-1][Index-2] : Memproses Baris terlebih dahulu, lalu memproses hal tersebut menjadi kolom
// Contoh :
// Baris Ke-1 = Kolom ke-1, Kolom-2, Kolom-3 [1, 2, 3]
// Baris Ke-2 = Kolom ke-1, Kolom-2, Kolom-3 [4, 5, 6]
// Baris Ke-3 = Kolom ke-1, Kolom-2, Kolom-3 [7, 8, 9]

// VariableArray[Index-2][Index-1] : Memproses Kolom terlebih dahulu, lalu memproses hal tersebut menjadi Baris
// Contoh :
// Kolom Ke-1 = Baris ke-1, Baris ke-2, Baris ke-3 [1, 4, 7]
// Kolom Ke-2 = Baris ke-1, Baris ke-2, Baris ke-3 [2, 5, 8]
// Kolom Ke-3 = Baris ke-1, Baris ke-2, Baris ke-3 [3, 6, 9]

enterkosong = ' ';
console.log(enterkosong);

const Exe8NestedLoop = 'Exe8 : HOW TO CHHANGE CONTENT/ELEMENT INSIDE ARRAY OF ARRAY WITH NESTED LOOP :';
console.log(Exe8NestedLoop);

enterkosong = ' ';
console.log(enterkosong);

const Exe8NestedLoopCase = 'Case : HOW TO FILL BIOSKOP SEATS :';
console.log(Exe8NestedLoopCase);

enterkosong = ' ';
console.log(enterkosong);

enterkosong = ' ';
console.log(enterkosong);

let BioskopSeats = [
 // ['00', '01', '02', '03', 04', '05', '06', '07', '08', '09','10', '011', '012', '013','14', '015', '016', '017', '018']
    ['A1', 'A2', 'A3', 'A4', '  ', 'A5', 'A6', 'A7', 'A8', '  ', 'A9', 'A10', 'A11', 'A12', ' ', 'A13', 'A14', 'A15', 'A16'], // 0
    ['B1', 'B2', 'B3', 'B4', '  ', 'B5', 'B6', 'B7', 'B8', '  ', 'B9', 'B10', 'B11', 'B12', ' ', 'B13', 'B14', 'B15', 'B16'], // 1
    ['C1', 'C2', 'C3', 'C4', '  ', 'C5', 'C6', 'C7', 'C8', '  ', 'C9', 'C10', 'C11', 'C12', ' ', 'C13', 'C14', 'C15', 'C16'], // 2
    ['D1', 'D2', 'D3', 'D4', '  ', 'D5', 'D6', 'D7', 'D8', '  ', 'D9', 'D10', 'D11', 'D12', ' ', 'D13', 'D14', 'D15', 'D16'], // 2
    ['E1', 'E2', 'E3', 'E4', '  ', 'E5', 'E6', 'E7', 'E8', '  ', 'E9', 'E10', 'E11', 'E12', ' ', 'E13', 'E14', 'E15', 'E16'], // 3
    ['F1', 'F2', 'F3', 'F4', '  ', 'F5', 'F6', 'F7', 'F8', '  ', 'F9', 'F10', 'F11', 'F12', ' ', 'F13', 'F14', 'F15', 'F16'], // 4
    ['G1', 'G2', 'G3', 'G4', '  ', 'G5', 'G6', 'G7', 'G8', '  ', 'G9', 'G10', 'G11', 'G12', ' ', 'G13', 'G14', 'G15', 'G16'], // 5
    ['H1', 'H2', 'H3', 'H4', '  ', 'H5', 'H6', 'H7', 'H8', '  ', 'H9', 'H10', 'H11', 'H12', ' ', 'H13', 'H14', 'H15', 'H16'], // 6
    ['I1', 'I2', 'I3', 'I4', '  ', 'I5', 'I6', 'I7', 'I8', '  ', 'I9', 'I10', 'I11', 'I12', ' ', 'I13', 'I14', 'I15', 'I16'], // 7
    ['J1', 'J2', 'J3', 'J4', '  ', 'J5', 'J6', 'J7', 'J8', '  ', 'J9', 'J10', 'J11', 'J12', ' ', 'J13', 'J14', 'J15', 'J16'], // 8
    ['K1', 'K2', 'K3', 'K4', 'K5', 'K6', 'K7', 'K8', 'K9', 'K10', 'K11', 'K12', 'K13', 'K14', 'K15', 'K16', 'K17', 'K18', 'K19'] // 9
  ];

const Exe8Hint = 'HINT :';
console.log(Exe8Hint);

enterkosong = ' ';
console.log(enterkosong);

let TypeofSeats = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'];
console.log(`Use this code as a reference type of seat, to make it easy the use of nested loop ${TypeofSeats}`)

enterkosong = ' ';
console.log(enterkosong);


// Function to select seats from specific ranges in a row
function selectedSeats(TypeofSeatOption, SeatOptionIndexRanges, KeteranganKursi) { // ('TIPE SEAT', 'Index/Kumpulan content', 'Keterangan')
    
    // Validasi/mencocokan Array yang akan disubtitusi dalam function, untuk Memastikan banyak-nya Indeks(i) yang antara
    // ->  ArrayAsli[Array Pengganti] 'BioskopSeats[TypeofSeatOption]' dan Array Acuan [TypeofSeat] memiliki Rentang Indeks (i) yg sama
    // Karena Indeks yang diinginkan 0 - 10, maka Indeks Array Pengganti tidak boleh lebih besar dari 10 dan lebih kecil dari 0
    if (TypeofSeatOption < 0 || TypeofSeatOption >= TypeofSeats.length) {
        return;
    };
    // Jadi Fungsi Return disini gunanya untuk membatasi Kriteria IF yang true agar tidak dieksekusi, dan mengapa return disini tidak
    //  tidak mengembalikan nilai apapun> Karena tidak ada proses yang diberikan setelahnya.
    // (Contoh : return TypeofSeats + 'L' + 'M' + 'N'), karena tidak ada hal tersebut. Maka Return gunanya untuk membatasi Kriteria IF yg
    // True agar tidak dieksekusi
    
    let SelectedTypeofSeat = TypeofSeats[TypeofSeatOption];
    // Misalnya, jika TypeofSeatIndex = 0, maka selectSeats akan berisi kursi-kursi di baris pertama dari BioskopSeats (Seluruh Kursi Seat A)
    // PENJELASAN ADA DI PERTANYAAN 1
    // Penjelasan :
    
    // Jadi SelectedTypeofSeat ini gunanya untuk memberikan label terhadap pemilihan TypeofSeats sesuai dengan Indeks-nya melalui Fungsi
    // Variable khusus 'SelectedTypeofSeat' yang berperan sebagai nilai Index [i], 
    // Kenapa [i]? Karena sebagai struktur dasar patokan Looping Luar untuk diproses secara berurutan (Looping) / Tipe Kursi

    let selectSeats = BioskopSeats[TypeofSeatOption];
    // Fungsi ini mendefinsikan Setiap elemen dalam array BioskopSeats per Tipe Kursi atau Per-Baris[n]
    // Penjelasan Output ada di KETERANGAN PERTANYAAN 2
    // Penjelasan :
    // Jadi selectSeats ini gunanya untuk memberikan label terhadap pemilihan Nomor Kursi  sesuai dengan Indeks-nya melalui Fungsi
    // Variable khusus 'TypeofSeatOption' yang berperan sebagai nilai Index [j], 
    // Kenapa [j]? Karena buat memproses secara berurutan setiap Baris[0] - [10], per kolom-nya secara satu-persatu untuk proses Looping
    // Dalam


    for (let i = 0; i < selectSeats.length ; i++) { // Pertanyaan ke-4
        let Contoh = selectSeats[i];
        for (let j = 0; j < SeatOptionIndexRanges.length; j++) { // Pertanyaan ke-5
            if (i === SeatOptionIndexRanges[j]) { // Pertanyaan ke-6
               selectSeats[i] = KeteranganKursi;
            };
        }; // Kenapa i, bukan selectSeats[i]? karena yg dibandingin itu no indeks kursi-nya, bukan isi content-nya
    }; // karena input-nya make no indeks-nya buat di function selectedSeats

// Jika no indeks dari selectSeats = no Indeks yang akan di-input (SeatOptionIndexRanges), maka 
// baris kursi yang akan diproses (BioskopSeats Array) JIKA NO Indeks SelectSeats = No Indeks yang mau
// di-input (SeatOptionIndexRanges), maka Variable 'KeteranganKursi' mengganti nilai kursi sesuai
// dengan keterangan yang diinginkan (contoh : Booked, Available, etc)
    
// PERTANYAAN KE-4 PENJELASAN :
// SelectSeats yang digunakan? karena selectSeat berisi tentang BioskopSeats yang telah di-match kan dengan Variable Khusus 
// 'TypeofSeatOption', maka BioskopSeat yang memiliki Content Berupa 'TypeofSeat' / Tipe Kursi dan indeks nomor kursi, sehingga
// Variable 'selectSeats' [i] akan merujuk kepada Indeks nomor Baris yang diinginkan, sesuai dengan Tipe Kursi 'TypeofSeats'
// Karena sudah di-match dengan Variable khusus function yang berupa 'TypeofSeatOption'

// PERTANYAAN KE-5 PENJELASAN :
// Kenapa 'SeatOptionIndexRanges' yang digunakan? karena Variable tersebut akan dijadikan sebagai penadah yang akan menyimpan yang
// akan dipilih, dengan melaksanakan selectedSeats(TypeofSeatOption, SeatOptionIndexRanges, KeteranganKursi)
// Oleh karena itu, kita menggunakan SeatOptionIndexRanges pada looping dalam untuk memeriksa apakah kursi tertentu perlu diperbarui 
// berdasarkan indeks kursi yang ada dalam selectSeats. 
// BERDASRKAN INDEKS KURSI DALAM SELECTSEATS BUKAN NILAI KURSI

// Di sini, kita menggunakan i untuk memeriksa apakah indeks kursi pada baris yang sedang diproses 
// (dalam selectSeats) sesuai dengan indeks yang dipilih dalam array SeatOptionIndexRanges.

// if (i === SeatOptionIndexRanges[j]):
// Memeriksa apakah indeks kursi (i) sesuai dengan indeks yang ada di SeatOptionIndexRanges[j]. 
// Yang dibandingkan adalah indeks kursi, bukan nilai kursinya. (misalnya : [0, 1, 2, 3])

// if (selectSeats[i] === SeatOptionIndexRanges[j]):
// Memeriksa apakah nilai kursi yang ada pada selectSeats[i] (misalnya 'A1') sesuai dengan nilai yang 
// ada di SeatOptionIndexRanges[j]. Yang dibandingkan adalah nilai kursi (misalnya 'A1', 'A2', dll.), 
// bukan indeks

// SeatOptionIndexRanges[j] INI SENDIRI MERUPAKAN INDEKS BUKAN NILAI KURSI KARENA BUAT RUN FUNCTION DIPERLUKAN
// YANG DIGUNAKAN ITU INDEKS KURSI (CONTOH : [0, 1, 2, 3]), BUKAN NILAI KURSI (CONTOH : ['A1', 'A2', 'A3'])


    let formattedselectSeats = '';  // Format output untuk kursi
    for (let x = 0; x < selectSeats.length; x++) {
        if (selectSeats[x].trim() !== '') {  // Hanya menampilkan kursi yang tidak kosong
            formattedselectSeats += selectSeats[x] + '  ';
        };
    };
    console.log(`Updated BioskopSeats (Row ${TypeofSeats[TypeofSeatOption]}):  ${formattedselectSeats}`);
};


selectedSeats(0, [0, 1, 2, 3, 5], 'Booked');
selectedSeats(1, [0, 1, 2, 3, 5], 'Booked');
selectedSeats(5, [6, 7, 8, 10, 11], 'Booked');

enterkosong = ' ';
console.log(enterkosong);

const Pembatas = ' - PEMBATAS -'
console.log(Pembatas);

enterkosong = ' ';
console.log(enterkosong);

console.log(BioskopSeats[2]); // KETERANGAN PERTANYAAN 1

enterkosong = ' ';
console.log(enterkosong);

//# Soal 1: Matriks Perkalian
//# Kasus: Program ini mencetak tabel perkalian untuk angka 1 sampai n.

// Input:
let Exe9 = [1, 2, 3];

let Exe9Wadah = [1, 2, 3];



// Expected Output:
// 1  2  3
// 2  4  6
// 3  6  9

// Hint:
// Gunakan dua loop: loop pertama untuk angka yang akan dikalikan (dari 1 sampai n),
// dan loop kedua untuk perkalian setiap angka.


for (let i = 0; i < 3; i++) {
    let Exe9AnswerBener = '';
    for (let j = 0; j < 3; j++) {
        Exe9AnswerBener += Exe9Wadah[i] * Exe9[j]  + ' ';
    };
    console.log(Exe9AnswerBener);
};

for (let i = 0; i < Exe9Wadah.length; i++) {
    let Exe9TrueAnswer = Exe9Wadah[i];
    console.log(Exe9TrueAnswer);
}

enterkosong = ' ';
console.log(enterkosong);

// Soal 6: Mencari Nilai Maksimum dan Minimum dalam Matriks
// Kasus: Program ini mencari nilai maksimum dan minimum dalam sebuah matriks.

// Input:
// Matriks:
// 3 5 9
// 2 8 6
// 7 1 4

// Expected Output:
// Maksimum: 9
// Minimum: 1

// Hint:
// Gunakan dua loop untuk mengiterasi setiap elemen dalam matriks dan simpan nilai maksimum dan minimum dengan 
// Wadah Vessel

let Exe11 = [
    [3, 5, 9],
    [2, 8, 6],
    [7, 1, 4]
];

let Exe11VesselMaximum = Exe11[0][0];// [0][0] INI MENJADIKAN VARIABLE PENAMPUNG UNTUK BARIS DAN KOLOM PADA ARRAY EXE11
let Exe11VesselMinimum = Exe11[0][0]; // [0][0] = [i][j] atau [j][i]

for (let i = 0; i < Exe11; i++) {
    const Exe11Looping = Exe11[i];
    for (let j = 0; j < Exe11Looping; j++) {
        const Exe11LoopingTwice = Exe11Looping[j];

        if (Exe11LoopingTwice > Exe11VesselMaximum) {
            Exe11VesselMaximum = Exe11LoopingTwice;
            // console.log(`Nilai Maksimum = ${Exe11VesselMaximum}`) TIDAK MAU DI COMMAND
        };
        // console.log(`Nilai Maksimum = ${Exe11VesselMaximum}`) TIDAK MAU DI COMMAND
        
        if (Exe11LoopingTwice < Exe11VesselMinimum) {
            Exe11VesselMinimum = Exe11LoopingTwice;
            // console.log(`Nilai Minimum = ${Exe11VesselMinimum}`) TIDAK MAU DI COMMAND
        };
        // console.log(`Nilai Minimum = ${Exe11VesselMinimum}`) TIDAK MAU DI COMMAND
    };
    // console.log(`Nilai Maksimum = ${Exe11VesselMaximum}`) TIDAK MAU DI COMMAND
    // console.log(`Nilai Minimum = ${Exe11VesselMinimum}`) TIDAK MAU DI COMMAND
};

console.log(`Nilai Maksimum = ${Exe11VesselMaximum}`)
console.log(`Nilai Minimum = ${Exe11VesselMinimum}`)

enterkosong = ' ';
console.log(enterkosong);


let Exe11NEW = [
    3, 5, 9,
    2, 8, 6,
    7, 1, 4
];

let Exe11VesselMaximum1 = Exe11NEW[0];// [0][0] INI MENJADIKAN VARIABLE PENAMPUNG UNTUK BARIS DAN KOLOM PADA ARRAY EXE11
let Exe11VesselMinimum1 = Exe11NEW[0]; // [0][0] = [i][j] atau [j][i]

for (let i = 0; i < Exe11NEW; i++) {
    const Exe11LoopingNEW = Exe11NEW[i];

        if (Exe11LoopingNEW > Exe11VesselMaximum1) {
            Exe11VesselMaximum1 = Exe11LoopingNEW;
            // console.log(`Nilai Maksimum = ${Exe11VesselMaximum}`) TIDAK MAU DI COMMAND
        };
        // console.log(`Nilai Maksimum = ${Exe11VesselMaximum}`) TIDAK MAU DI COMMAND
        
        if (Exe11LoopingNEW < Exe11VesselMinimum1) {
            Exe11VesselMinimum1 = Exe11LoopingNEW;
            // console.log(`Nilai Minimum = ${Exe11VesselMinimum}`) TIDAK MAU DI COMMAND
        };
        // console.log(`Nilai Minimum = ${Exe11VesselMinimum}`) TIDAK MAU DI COMMAND
    };
    // console.log(`Nilai Maksimum = ${Exe11VesselMaximum}`) TIDAK MAU DI COMMAND
    // console.log(`Nilai Minimum = ${Exe11VesselMinimum}`) TIDAK MAU DI COMMAND

console.log(`Nilai Maksimum = ${Exe11VesselMaximum1}`)
console.log(`Nilai Minimum = ${Exe11VesselMinimum1}`)

enterkosong = ' ';
console.log(enterkosong);


// Soal 1: Menyusun Data Penjualan Berdasarkan Kategori Produk
// Kasus: Program ini menghitung total penjualan untuk setiap kategori produk.

// Input:
// Data penjualan:
// [("Produk A", "Elektronik", 150), 
// ("Produk B", "Elektronik", 200),
// ("Produk C", "Fashion", 100),
// ("Produk D", "Fashion", 250)]

// Expected Output:
// Kategori Elektronik: 350
// Kategori Fashion: 350

// Hint:
// Gunakan dua loop: loop pertama untuk kategori dan loop kedua untuk iterasi melalui data produk untuk menambah penjualan sesuai kategori.

// Konsisten dengan nama properti dalam tipe ProdukItem
let DataItem = [
    {produk: 'A', tipe: 'Elektronik', harga: 150},
    {produk: 'B', tipe: 'Elektronik', harga: 100},
    {produk: 'C', tipe: 'Fashion', harga: 150},
    {produk: 'D', tipe: 'Fashion', harga: 200},
];

let i = 0;
let kategoriItem = ['Elektronik', 'Fashion'];

let TotalPenjualanElektronik = 0;
let TotalPenjualanFashion = 0;

for (let j = 0; j < kategoriItem.length; j++) {
    const TipeItem = kategoriItem[j];
    
    for (let i = 0; i < DataItem.length; i++) {
        const DataPenjualan = DataItem[i];
        if (TipeItem === DataPenjualan.tipe) {
            if (TipeItem === 'Elektronik') {
            TotalPenjualanElektronik += DataPenjualan.harga;
            
            }; if (TipeItem === 'Fashion') {
            TotalPenjualanFashion += DataPenjualan.harga;
            };
            // A
        };
        // B
    };
    // C
};

// D
    
console.log(`${kategoriItem[0]} : Rp. ${TotalPenjualanElektronik}`);
console.log(`${kategoriItem[1]} : Rp. ${TotalPenjualanFashion}`);
// Jika Anda ingin mendapatkan total penjualan yang benar setelah seluruh data diproses, 
// tempatkan console.log() di Lokasi D setelah loop selesai. KATA CHATGPT
// INTINYA KALAU MAU SUMMARY DARI SESUATU MAU FOR ATAU IF, TEMPATIN CONSOLE.LOG() PALING BAWAH

enterkosong = '';
console.log(enterkosong);

// Soal 2: Menghitung Rata-rata Nilai Pelajar dalam Kelas
// Kasus: Program ini menghitung rata-rata nilai per mata pelajaran dari data nilai siswa.

// Input:
// Matriks nilai siswa:

// Expected Output:
// Mata Pelajaran 1: 80.0
// Mata Pelajaran 2: 88.33
// Mata Pelajaran 3: 88.33

let NilaiMatematika = [
    {siswa: 'Budi', grade: [60, 85, 72, 94, 56, 78, 88]}, // NilaiMTK [0]
    {siswa: 'Anggi', grade: [85, 75, 90, 84, 72, 83, 92]}, // NilaiMTK [1]
    {siswa: 'Yono', grade: [70, 82, 77, 88, 63, 72, 84]}, // NilaiMTK [2]
    {siswa: 'Bambang', grade: [76, 83, 75, 93, 76, 78, 94]}, // NilaiMTK [3]
    {siswa: 'Yeni', grade: [80, 87, 82, 92, 76, 85, 95]}, // NilaiMTK [4]
];

let average = '';

for (let i = 0; i < NilaiMatematika.length; i++) {
    const NilaiMTK = NilaiMatematika[i];
    let passingGradesMTK = 0;

    let NilaiMTKgrade = NilaiMTK.grade;
    let NilaiMTKrange = NilaiMTK.grade.length; 

    const TotalNilaiMTK = NilaiMTKgrade.reduce((accumulation, grade) => accumulation + grade, 0);
    average = TotalNilaiMTK / NilaiMTKrange;

    console.log(`${NilaiMTK.siswa} : ${average}`)
}

let NilaiMatematika2 = [
    {siswa: 'Budi', grade: [60, 85, 72, 94, 56, 78, 88]}, // NilaiMTK [0]
    {siswa: 'Anggi', grade: [85, 75, 90, 84, 72, 83, 92]}, // NilaiMTK [1]
    {siswa: 'Yono', grade: [70, 82, 77, 88, 63, 72, 84]}, // NilaiMTK [2]
    {siswa: 'Bambang', grade: [76, 83, 75, 93, 76, 78, 94]}, // NilaiMTK [3]
    {siswa: 'Yeni', grade: [80, 87, 82, 92, 76, 85, 95]}, // NilaiMTK [4]
];

let average1 = '';
let NilaiTotalMTK = 0;

for (let i = 0; i < NilaiMatematika2.length; i++) {
    const NilaiMTK2 = NilaiMatematika2[i];
    let NilaiMTKgrade2 = NilaiMTK2.grade;
    let NilaiMTKrange2 = NilaiMTK2.grade.length;

    for (let j = 0; j < NilaiMTKgrade2.length; j++) {
        const test = NilaiMTKgrade2[j];
        NilaiTotalMTK += test;
        average = NilaiTotalMTK / NilaiMTKrange2;
    }
    console.log(average);
}

enterkosong = ' ';
console.log(enterkosong);

// Soal 3: Mengelompokkan Pengguna Berdasarkan Usia
// Kasus: Program ini mengelompokkan pengguna berdasarkan rentang usia.


let Exe13 = [
    {NamaPegawai: "Alice", age: 17}, // Exe13Looping [0]
    {NamaPegawai: "Bob", age: 22}, // Exe13Looping [1]
    {NamaPegawai: "Charlie", age: 45}, // Exe13Looping [2]
    {NamaPegawai: "Diana", age: 68} // Exe13Looping [3]
];

// Expected Output:
// Kelompok 0-18: Alice
// Kelompok 19-35: Bob
// Kelompok 36-60: Charlie
// Kelompok 60+: Diana

// # Hint:
// # Gunakan loop untuk memeriksa usia setiap pengguna dan kelompokkan berdasarkan rentang usia.

// if age > 36 && age <=60
// if age >= 18
// if age > 18 && age < 36
// sisanya Else


let PengelompokanUmur = 0;

let RangeUmur = ['0 - 18', '19 - 35', '36 - 60', '60+']


    for (let i = 0; i < Exe13.length; i++) {
        const Exe13Looping = Exe13[i];

        let Exe13NamaPegawai = Exe13Looping.NamaPegawai;
        let Exe13age = Exe13Looping.age;

        if (Exe13age <= 18) {
            PengelompokanUmur = Exe13NamaPegawai;
        } else if (Exe13age > 18 && Exe13age < 36) {
            PengelompokanUmur = Exe13NamaPegawai;
        } else if (Exe13age >= 36 && Exe13age <= 60) {
            PengelompokanUmur = Exe13NamaPegawai;
        } else if (Exe13age > 60) {
            PengelompokanUmur = Exe13NamaPegawai;
        }
        console.log(`Kelompok umur ${RangeUmur[i]}  ${PengelompokanUmur}`);
    };

// DISINI KITA SADAR YANG PALING SIGNIFIKAN DARI LOOPING ADALAH VARIABLE INDEKS UNTUK LOOPING YANG BIASA
// DISEBUT [i], JADI SETIAP KITA MELAKUKAN Console.log(ArrayDiLuarLooping[i]), ArrayDiluarLooping YANG BAHKAN
// TIDAK DIMASUKAN KEDALAM RUMUS for (), TETEP DINDEKS-KAN SESUAI [i] selama ArrayDiluarLooping range-nya 
// tidak melebihi Indeks range [i] yang didefinisikan oleh VariableArray yg dignakan oleh For

// Soal 4: Penyaringan Data Pemesanan Barang
// Kasus: Program ini menyaring pemesanan berdasarkan status pemesanan.

// Input:
// Data pemesanan:


// Expected Output:
//  Dikirim:
// - Alice: Laptop
// - Charlie: Smartphone
// Belum Dikirim:
// - Bob: Kamera
// - Diana: Headphone

// Hint:
// Gunakan dua loop: satu untuk iterasi status pemesanan dan satu lagi untuk mencari nama dan barang berdasarkan status tersebut.

enterkosong = ' ';
console.log(enterkosong);

let Exe14 = [
    {customer: "Alice", deliverypackage: "Laptop", statusdelivery: "delivered"},
    {customer: "Bob", deliverypackage: "Kamera", statusdelivery: "not yet delivered"},
    {customer: "Charlie", deliverypackage: "Smartphone", statusdelivery: "delivered"},
    {customer: "Diana", deliverypackage: "Headphone", statusdelivery: "not yet delivered"}
];

// JIKA (IF) EXE14.STATUSDELIVERY === "delivered", maka Menampilkan Customer dan Paket-nya
// JIKA (IF) EXE14.STATUSDELIVERY === "not yet delivered" maka Menampilkan Customer dan Paket-nya

let SummaryStatusDelivery = 0;

for (let i = 0; i < Exe14.length; i++) {
    const Exe14Looping = Exe14[i];

    let Exe14Customer = Exe14Looping.customer;
    let Exe14DeliveryPackage =  Exe14Looping.deliverypackage;
    let Exe14Status = Exe14Looping.statusdelivery;

    if (Exe14Status === "delivered") {
        SummaryStatusDelivery = `- ${Exe14Customer} : ${Exe14DeliveryPackage} (${Exe14Status})`
    } else if (Exe14Status === 'not yet delivered') {
        SummaryStatusDelivery = `- ${Exe14Customer} : ${Exe14DeliveryPackage} (${Exe14Status})`
    }
    console.log(SummaryStatusDelivery);
}

// # Soal 5: Menghitung Jumlah Barang dalam Daftar Pembelian
// # Kasus: Program ini menghitung jumlah barang yang dibeli dalam sebuah transaksi.

// # Input:
// # Data pembelian:
// # [("Laptop", 1), ("Kamera", 2), ("Laptop", 3), ("Headphone", 1)]

// # Expected Output:
// # Laptop: 4
// # Kamera: 2
// # Headphone: 1

// # Hint:
// # Gunakan dua loop: loop pertama untuk iterasi barang yang sudah terdaftar, loop kedua untuk menjumlahkan pembelian setiap barang.

enterkosong = ' ';
console.log(enterkosong);

Exe15 = [["Laptop", 1], ["Kamera", 2], ["Laptop", 3], ["Headphone", 1]];

let barangTerdaftar = [];

for (let i = 0; i < Exe15.length; i++) {
    let NamaBarang = Exe15[i][0]; // Looping [i] Untuk Urutan Sub-Array secara berurutan
    let JumlahBarang = Exe15[i][1]; 
// [0] berati mengambil Element/Content pertama dalam tiap Sub-Array sesuai ketentuan [i] atau Nama Barang
// [1] berati mengambil Element/Content kedua dalam tiap Sub-Array sesuai ketentuan [i] atau Bnayak Jumlah

    // Jika barang belum terdaftar, tambah ke barangTerdaftar
    let ditemukan = false;
// untuk menandai bahwa barang yang sedang diproses dalam loop belum ditemukan di dalam Array barangTerdaftar
// Karena Array barangTerdaftar = []; (Itu penjelasan dari False)

// Apabila barang yang sedang diproses dalam loop sudah ada/ditemukan di dalam Array barangTerdaftar, maka
// proses rumus-rumus dalam looping dalam dihentikan dengan .break (Itu penjelasan dari True)

// Looping untuk Mencari Barang :
    for (let j = 0; j < barangTerdaftar.length; j++) {
        if (barangTerdaftar[j][0] === NamaBarang) { 
            barangTerdaftar[j][1] += JumlahBarang;
            ditemukan = true;
            break;
        }
    }
// barangTerdaftar [j][0] = hasil push dari proses if (!ditemukan), yang berupa NamaBarang
// barangTerdaftar [j][1] = hasil push dari proses if (!ditemukan), yang berupa JumlahBarang    

    if (!ditemukan) {
        barangTerdaftar.push([NamaBarang, JumlahBarang]);
    }

// Karena pada Variable barangTerdaftar memiliki Array yang kosong, sehingga memaksa NamaBarang, dan JumlahBarang
// ([i][0] dan [i][1]) dari Array Exe15 dimasukan kedalam Array barangTerdaftar melalui .push 
}

for (let i = 0; i < barangTerdaftar.length; i++) {
    console.log(`${barangTerdaftar[i][0]}: ${barangTerdaftar[i][1]}`);
};

enterkosong
console.log(enterkosong);

// # Input:
// # Data pembelian:
// # [("Elektronik", "Laptop", 1500, 2),
// #  ("Elektronik", "Kamera", 500, 3),
// #  ("Fashion", "T-shirt", 50, 5)]

// # Expected Output:
// # Elektronik: 7500
// # Fashion: 250

// # Hint:
// # Gunakan dua loop: loop pertama untuk kategori barang dan loop kedua untuk menghitung total pembayaran untuk setiap barang dalam kategori tersebut.

Exe16 = [
    ["Elektronik", "Laptop", 1500, 2],
    ["Elektronik", "Kamera", 500, 3],
    ["Fashion", "T-shirt", 50, 7],
    ["Fashion", "Denim", 100, 3],
    ["Supplies", "Soap", 5, 8],
    ["Supplies", "Sampoo", 50, 7],
    ["Fashion", "Jacket", 115, 2],
    ["Supplies", "Soap", 5, 4]
];

let TotalBelanjaan = [];

for (let i = 0; i < Exe16.length; i++) {
    let TipeBelanjaan = Exe16[i][0];
    let NamaBelanjaan = Exe16[i][1];
    let HargaBelanjaan = Exe16[i][2];
    let JumlahBelanjaan = Exe16[i][3];

    let TotalBelanjaanPerItem = HargaBelanjaan * JumlahBelanjaan;

    let KeranjangBelanjaan = false;

    for (let j = 0; j < TotalBelanjaan.length; j++) {
        const TotalBelanjaanLooping = TotalBelanjaan[j];
        if (TotalBelanjaan[j][0] === TipeBelanjaan && TotalBelanjaan[j][1] === NamaBelanjaan) { // Kalo Tipe-nya sama Maka Hasil Jumlah * Harga
            TotalBelanjaan[j][2] += TotalBelanjaanPerItem
            KeranjangBelanjaan = true;
            break;
        };
    };
    if (!KeranjangBelanjaan) {
        TotalBelanjaan.push([TipeBelanjaan, NamaBelanjaan, TotalBelanjaanPerItem])
    }
};

console.log(TotalBelanjaan)

TotalPengeluaran = 0; // Kalau kayak ini = 0 ata = ''; atau = undefined itu cuman bisa menyimpan 1 nilai
TotalPengeluaranPerNamaProduk = {};
TotalPengeluaranPerTipeProduk = {};
// Sedangkan dengan = {}, kita bisa menyimpan lebih dari 1 nilai seperti Tiap Tipe Produk yang memiliki 3 Nilai
// yang berbeda

for (let i = 0; i < TotalBelanjaan.length; i++) {
    let ListNamaProduk = TotalBelanjaan[i][1];
    let ListTipeProduk = TotalBelanjaan[i][0]
    let HargaTotalBelanjaanPerItem = TotalBelanjaan[i][2];

    if (TotalPengeluaranPerTipeProduk[ListTipeProduk]) { 
        TotalPengeluaranPerTipeProduk[ListTipeProduk] += HargaTotalBelanjaanPerItem;
    // if (Suatu Variable atau Tipe Produk dalam contoh ini)
    // ini digunakan untuk memeriksa apakah produk tersebut sudah ada dalam objek TotalPengeluaranPerTipeProduk
    } else {
        TotalPengeluaranPerTipeProduk[ListTipeProduk] = HargaTotalBelanjaanPerItem;
    };
    // Karena Kita menginginkan menambah Nilai Harga untuk Setiap Tipe Produk, dan juga ingin memasukan nilai
    // Array TotalBelanjaan kedalam Objek TotalPengeluaranPerTipeProduk
    // Maka apabila Nilai Harga dengan Tipe produk yang sama akan di-akumulasikan, sedangkan
    // yang belum ada sama sekali dimasukan kedalam objek TotalPengeluaranPerTipeProduk untuk dapat diproses
    
    if (TotalPengeluaranPerNamaProduk[ListNamaProduk]) {
        TotalPengeluaranPerNamaProduk[ListNamaProduk] += HargaTotalBelanjaanPerItem; // yang udah ada ditambah harga-nya
    } else {
        TotalPengeluaranPerNamaProduk[ListNamaProduk] = HargaTotalBelanjaanPerItem; // yang belum ada, dimasukin dulu ke objek
    }

    TotalPengeluaran += HargaTotalBelanjaanPerItem;
};
console.log(enterkosong);
console.log("Total Belanjaan Berdasarkan Tipe Produk :")
Object.entries(TotalPengeluaranPerTipeProduk).forEach(([TipeProduk, TotalHarga]) => {
    console.log(`${TipeProduk}: ${TotalHarga}`);
});

// Untuk mengubah Object dan Mendefinisikan Object ke dalam Array itu menggunakan Object.entries, caranya :
// Object.entries(VariableObject).forEach([Mendefinisikan Element Objek Pertama -> Array[0],Mendefinisikan Element Objek kedua -> Array[1]])
console.log(enterkosong);
console.log("Total Belanjaan Berdasarkan Nama Produk :")
Object.entries(TotalPengeluaranPerNamaProduk).forEach(([NamaProduk, HargaTotal]) => {
    console.log(`${NamaProduk}: ${HargaTotal}`);
});
console.log(enterkosong);
console.log("Total Belanjaan Keseluruhan Produk :")
console.log(TotalPengeluaran);

console.log(enterkosong);
console.log(enterkosong);
// # Soal 7: Pencarian Data Pengguna Berdasarkan Kriteria
// # Kasus: Program ini mencari pengguna yang memenuhi kriteria usia lebih dari 30 tahun dan tinggal di kota Jakarta.

// # Input:
// # Data pengguna:
// # [("Alice", 25, "Jakarta"), 
// #  ("Bob", 32, "Surabaya"), 
// #  ("Charlie", 40, "Jakarta")]

// # Expected Output:
// # Pengguna yang memenuhi kriteria:
// # - Charlie: 40, 

// # Pengguna yang memenuhi kriteria Kota:
// # - Charlie: 40, Jakarta

// # Hint:
// # Gunakan loop untuk memeriksa setiap pengguna dan cek apakah mereka memenuhi kriteria.

Exe17 = [
    ['Alice', 25, 'Jakarta'],
    ['Bob', 32, 'Surabaya'],
    ['Charlie', 40, 'Jakarta'],
    ['Rose Gold Meteor', 34, 'Bandung'],
    ['Ujang', 32, 'Jakarta'],
    ['Bono', 23, 'Bojonegoro'],
    ['Ulie', 46, 'Padang']
];

let PendaftarQualified = []; // Penampung Isi dalam Array Exe17 yg Qualified
let PendaftarQualifiedUmur = []; // Penampung Isi dalam Array Exe17 yg Qualified Umur
let PendaftarQualifiedDomisili = []; // Penampung Isi dalam Array Exe17 yg Qualified Domisili
let PendaftarTidakQualified = []; // Penampung Isi dalam Array Exe17 yg  Tidak Qualified

let PenampungHasilAkhir = []; // Penampung Hasil Akhir AGAR bisa diproses menggunakan 1 Console.Log()

function TambahPendaftar(ArrayPenampung, ArrayDataPendaftar) {
    ArrayPenampung.push(ArrayDataPendaftar);
};

// Pertama-tama buat dulu fungsi yang dapat digunakan untuk Memasukkan Data Exe17 ke Array Penampung
// 

// function KategoriPendafaftar(ArrayDataPendaftar, Kategori) {
//     const Kategori = {'Qualified', ' Qualified Umur', 'Qualified Domisili', 'Tidak Qualified'};
//     PenampungHasilAkhir.push()
// };

for (let i = 0; i < Exe17.length; i++) {
    const Exe17Looping = Exe17[i];
    let NamaPendaftar = Exe17Looping[0];
    let UmurPendaftar = Exe17Looping[1];
    let DomisiliPendaftar = Exe17Looping[2];

    if (UmurPendaftar >= 30 && UmurPendaftar <= 45 && DomisiliPendaftar === 'Jakarta') {
        TambahPendaftar(PendaftarQualified, Exe17Looping);
    } else if (UmurPendaftar >= 30 && UmurPendaftar <= 45 && DomisiliPendaftar !== 'Jakarta') {
        TambahPendaftar(PendaftarQualifiedUmur, Exe17Looping);
    } else if (UmurPendaftar < 30 || UmurPendaftar > 45 && DomisiliPendaftar === 'Jakarta') {
        TambahPendaftar(PendaftarQualifiedDomisili, Exe17Looping);
    } else if (UmurPendaftar < 30 || UmurPendaftar > 45 && DomisiliPendaftar !== 'Jakarta') {
        TambahPendaftar(PendaftarTidakQualified, Exe17Looping);
    };
    // console.log(TambahPendaftar(PendaftarQualified, Exe17Looping, 'Lulus Kualifikasi'));
    // console.log(TambahPendaftar(PendaftarQualifiedUmur, Exe17Looping, 'Dipertimbangkan Umur'));
    // console.log(TambahPendaftar(PendaftarQualifiedDomisili, Exe17Looping, 'Dipertimbangkan Domisili'));
    // console.log(TambahPendaftar(PendaftarTidakQualified, Exe17Looping, 'Tidak Lulus Kualifikasi'));
};

function MenampilkanHasilKualifikasi(NamaKategori, ArrayPenampung) {
    PenampungHasilAkhir.push(`${NamaKategori} :`);
    ArrayPenampung.forEach(SetiapDataDalamArrayPenampung => {
        PenampungHasilAkhir.push(`- ${SetiapDataDalamArrayPenampung.join(', ')}`);
    });
    PenampungHasilAkhir.push(""); // Untuk menampilkan setiap kategori secara per baris, newline
};


// const tampilkanKategori = (NamaKategori, ArrayPenampung) => {
//     PenampungHasilAkhir.push(`${NamaKategori} :`);
//     ArrayPenampung.forEach(SetiapDataDalamArrayPenampung => {
//         PenampungHasilAkhir.push(`- ${SetiapDataDalamArrayPenampung.join(', ')}`);
//     });
// };

// Kegunaan "=>" dalam Const const tampilkanKategori = (NamaKategori, ArrayPenampung) => {} itu adalah
// sama kayak function tampilkanKategori(NamaKategori, ArrayPenampung) {}
// Jadi kalau mau make fungsi tapi dengan const, bisa make "const NamaVariable = (Params-1, Params-2) => {}"

MenampilkanHasilKualifikasi('Lulus Kualifikasi', PendaftarQualified);
MenampilkanHasilKualifikasi('Dipertimbangkan Umur', PendaftarQualifiedUmur);
MenampilkanHasilKualifikasi('Dipertimbangkan Domisli', PendaftarQualifiedDomisili);
MenampilkanHasilKualifikasi('Tidak Lulus Kualifikasi', PendaftarTidakQualified);

console.log(PenampungHasilAkhir.join("\n"));

// for (let i = 0; i < Exe17.length; i++) {
//     const Exe17Looping = Exe17[i];
//     let NamaPendaftar = Exe17Looping[0];
//     let UmurPendaftar = Exe17Looping[1];
//     let DomisiliPendaftar = Exe17Looping[2];

//     let kualifikasi = false;

//     for (let x = 0; x < PendaftarQualified.length; x++) {
//         const KandidatTerpilih = PendaftarQualified[x];

//         if (1111111111
//             KandidatTerpilih[0] === NamaPendaftar && 
//             KandidatTerpilih[1] === UmurPendaftar && 
//             KandidatTerpilih[2] === DomisiliPendaftar
//             ) {
//                 if (UmurPendaftar >= 30 && UmurPendaftar <= 45 && DomisiliPendaftar === 'Jakarta') {
//                     console.log(`Kandidat yang Memiliki semua Kualifikasi : ${KandidatTerpilih}`)
//                     Kualifikasi = true;
//                     break;
//                 };      
//             };
//     };
    
//     if (!kualifikasi) {
//         PendaftarQualified.push(NamaPendaftar, UmurPendaftar, DomisiliPendaftar)
//         console.log(`Kandidat yang Memiliki semua : ${[NamaPendaftar, UmurPendaftar, DomisiliPendaftar]}`)
//     };

//     let kualifikasiUmur = false;

//     for (let y = 0; y < PendaftarQualifiedUmur.length; y++) {
//         const KandidatDiPertimbangkanUmur = PendaftarQualifiedUmur[y];

//         if (11
//             KandidatDiPertimbangkanUmur[0] === NamaPendaftar && 11
//             KandidatDiPertimbangkanUmur[1] === UmurPendaftar &&111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
//             KandidatDiPertimbangkanUmur[2] === DomisiliPendaftar11
//         ) {
//             if (UmurPendaftar >= 30 && UmurPendaftar <= 45 && DomisiliPendaftar !== 'Jakarta') {
//                 console.log(`Kandidat yang Dipertimbangkan berdasarkan Umur : ${KandidatDiPertimbangkanUmur}`)
//                 kualifikasiUmur = true;
//                 break;
//             };
//         };
        
//         if(!kualifikasiUmur) {
//             PendaftarQualifiedUmur.push(NamaPendaftar, UmurPendaftar, DomisiliPendaftar);
//             console.log(`Kandidat yang Dipertimbangkan karena Domisili : ${[NamaPendaftar, UmurPendaftar, DomisiliPendaftar]}`)
//         };
//     };
    
//     for (let z = 0; z < PendaftarQualifiedDomisili.length; z++) {
//         const KandidatDiPertimbangkanDomisili = PendaftarQualifiedDomisili[z];
        
//         let kualifikasiDomisili = false;

//         if (
//             KandidatDiPertimbangkanDomisili[0] === NamaPendaftar && 
//             KandidatDiPertimbangkanDomisili[1] === UmurPendaftar && 
//             KandidatDiPertimbangkanDomisili[2] === DomisiliPendaftar
//         ) {
//             if (UmurPendaftar < 30 && UmurPendaftar > 45 && DomisiliPendaftar === 'Jakarta') {
//                 console.log(`Kandidat yang Dipertimbangkan berdasarkan Umur : ${KandidatDiPertimbangkanDomisili}`)
//                 kualifikasiDomisili = true;
//                 break;
//             }; 
//         };

//         if (!kualifikasiDomisili) {
//             PendaftarQualifiedDomisili.push(NamaPendaftar, UmurPendaftar, DomisiliPendaftar);
//             console.log(`Kandidat yang Dipertimbangkan karena Domisili : ${[NamaPendaftar, UmurPendaftar, DomisiliPendaftar]}`)
//         };
//     };
    
//     for (let w = 0; w < PendaftarTidakQualified.length; w++) {
//         const KandidatTidakTerpilih = PendaftarTidakQualified[w];

//         let MohonMaafTidakTerkualifikasi = false;

//         if (
//             KandidatTidakTerpilih[0] === NamaPendaftar &&
//             KandidatTidakTerpilih[1] === UmurPendaftar &&
//             KandidatTidakTerpilih[2] === DomisiliPendaftar
//         ) { 
//             if (UmurPendaftar < 30 && UmurPendaftar > 45 && DomisiliPendaftar !== 'Jakarta') {
//             console.log(`Kandidat yang Tidak masuk Kualifikasi: ${KandidatTidakTerpilih}`);
//             MohonMaafTidakTerkualifikasi = true;
//             break;
//             };
//         };

//         if (!MohonMaafTidakTerpilih) {
//             PendaftarTidakQualified.push(NamaPendaftar, UmurPendaftar, DomisiliPendaftar);
//             console.log(`Kandidat yang Tidak Terpilih : ${[NamaPendaftar, UmurPendaftar, DomisiliPendaftar]}`)
//         }
//     };  
// };

// console.log('Kandidat yang Memiliki semua Kualifikasi :');
// console.log(KandidatTerpilih);
// console.log(enterkosong);


// # Soal 8: Menghitung Jumlah Kunjungan pada Setiap Halaman Website
// # Kasus: Program ini menghitung total kunjungan pada setiap halaman website.

// # Input:
// # Data log kunjungan:
// # [("2025-04-01", "Home"), 
// #  ("2025-04-01", "Contact"), 
// #  ("2025-04-02", "Home"), 
// #  ("2025-04-02", "About"), 
// #  ("2025-04-02", "Home")]

// # Expected Output:
// # Home: 3
// # Contact: 1
// # About: 1

// # Hint:
// # Gunakan dua loop: loop pertama untuk iterasi melalui halaman, loop kedua untuk menghitung berapa kali halaman tersebut dikunjungi.
console.log(enterkosong);

let array = ["apple", "banana", "apple", "orange", "banana", "apple"];
let countMap = {};

array.forEach(item => {
  countMap[item] = (countMap[item] || 0) + 1;
});

// Menampilkan jumlah kemunculan untuk setiap item
// console.log("Jumlah Apple:", countMap["apple"]);   // Output: 3
// console.log("Jumlah Banana:", countMap["banana"]); // Output: 2
// console.log("Jumlah Orange:", countMap["orange"]); // Output: 1

let Exe18 = [
    ['2025-04-01', 'Home'],
    ['2025-04-01', 'Home'],
    ['2025-04-02', 'Contact'],
    ['2025-04-02', 'Contact'],
    ['2025-04-02', 'Contact'],
    ['2025-04-01', 'About']
];

let TotalKlikHome = [];
let TotalKlikContact = [];

let TotalClick = {
    'Home': {},
    'About': {},
    'Contact': {},
};
// Kalau Home

for (let i = 0; i < Exe18.length; i++) {
    const Exe18Looping = Exe18[i];

    let OpsiHalamanWeb = Exe18Looping[1];
    let TanggalKunjungan = Exe18Looping[0];

    let verifikasiKunjungan = false;

    if (TotalClick[OpsiHalamanWeb]) {
        TotalClick[OpsiHalamanWeb][TanggalKunjungan] = (TotalClick[OpsiHalamanWeb][TanggalKunjungan] || 0) + 1;
    };
};

console.log('Total klik Home pada 2025-04-01: ' + TotalClick['Home']['2025-04-01']);
console.log('Total klik Contact pada 2025-04-02: ' + TotalClick['Contact']['2025-04-02']);
console.log('Total klik About pada 2025-04-01: ' + TotalClick['About']['2025-04-01']);

// for (let i = 0; i < TotalKlikHome.length; i++) {
//     console.log(`${TotalKlikHome[i][0]}: ${TotalKlikHome[i][1]}`);
// };



console.log(enterkosong);

// # Soal 9: Menyusun Data Pengiriman Barang Berdasarkan Tujuan
// # Kasus: Program ini menyusun pengiriman berdasarkan tujuan.

// # Input:
// # Data pengiriman:
// # [("Alice", "Laptop", "Jakarta"),
// #  ("Bob", "Smartphone", "Surabaya"),
// #  ("Charlie", "Tablet", "Jakarta"),
// #  ("Diana", "Headphone", "Bali")]

// # Expected Output:
// # Jakarta:
// # - Alice: Laptop
// # - Charlie: Tablet
// # Surabaya:
// # - Bob: Smartphone
// # Bali:
// # - Diana: Headphone

// # Hint:
// # Gunakan loop untuk menyaring dan menyusun pengiriman berdasarkan tujuan.

let Exe19 = [
    ['Alice', 'Laptop', 'Jakarta'],
    ['Bob', 'Smartphone', 'Surabaya'],
    ['Charlie', 'Tablet', 'Jakarta'],
    ['Diana', 'Headphone', 'Bali'],
];

let WadahInfoPesanan = {
    Jakarta: [],
    Surabaya: [],
    Bali: [],
};

for (let i = 0; i < Exe19.length; i++) {
    const Exe19Looping = Exe19[i];

    let NamaPemesan = Exe19Looping[0];
    let BarangPesanan = Exe19Looping[1];
    let LokasiPesanan = Exe19Looping[2];


    if (LokasiPesanan === 'Jakarta') {
        WadahInfoPesanan['Jakarta'].push(`- ${NamaPemesan}: ${BarangPesanan}`)
    } else if (LokasiPesanan === 'Surabaya') {
        WadahInfoPesanan['Surabaya'].push(`- ${NamaPemesan}: ${BarangPesanan}`)
    } else if (LokasiPesanan === 'Bali') {
        WadahInfoPesanan['Bali'].push(`- ${NamaPemesan}: ${BarangPesanan}`)
    };
};    

for (let lokasi in WadahInfoPesanan) {
    console.log(`${lokasi}`)
    WadahInfoPesanan[lokasi].forEach(RequestPesanan => {
    console.log(`- ${RequestPesanan}`)
    });
};
// Sama kayak fungsi Variable[1] atau Variable['APA AJA'] buat let Array = ['COK', 'APA AJA', 'JAM']
// yang berarti Variable[1] atau Variable['APA AJA'], berati ngambil element atau content APA AJA

// Dengan menggunakan ['Jakarta'], kita mengakses properti yang bernama 'Jakarta' dari objek 
// WadahInfoPesanan. Artinya, kita mengambil array yang ada di dalam properti Jakarta dari objek tersebut


