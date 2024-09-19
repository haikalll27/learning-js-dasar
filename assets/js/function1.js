// *=============== BELAJAR FUNCTION JS ===============*//

// var a = 8;
// var b = 3;
// var c = 10;
// var d = 15;

// var volumeA;
// var volumeB;
// var total;

// volumeA = a * a * a;
// volumeB = b * b * b;

// total = volumeA + volumeB;

// console.log(total);

// BISA MENGGUNAKAN CARA DIBAWAH INI, CARA MENGGUNAKAN FUNCTION / CARA MEMBUAT FUNCTION
// function jumlahVolumeDuaKubus(a, b) {
//     var volumeA;
//     var volumeB;
//     var total;

//     volumeA = a * a * a;
//     volumeB = b * b * b;
//     total = volumeA + volumeB;

//     return total;
// }

// console.log(jumlahVolumeDuaKubus(8, 3));
// console.log(jumlahVolumeDuaKubus(10, 15));


// CARA MENGGUNAKAN FUNCTION / CARA MEMBUAT FUNCTION, MEMBUAT PARAMETER & ARGUMENT
// CONTOH SEDERHANA NYA DIBAWAH INI
// function tambah(a, b) {
//     return a + b;
// }
// var hasil = tambah(10, 10);
// console.log(hasil);

// function tambah(a, b) {
//     return a + b;
// }

// var a = 10;
// var b = 20;
// var hasil = tambah(a, b);
// console.log(hasil);

// function tambah(a, b) {
//     return a + b;
// }

// var a = parseInt(prompt('Masukan Nilai ke 1 :'));
// var b = parseInt(prompt('Masukan Nilai ke 2 :'));

// var hasil = tambah(a*2, b*2);
// console.log(hasil);

// function tambah(a, b) {
//     return a + b;
// }

// function kali(a, b) {
//     return a * b;
// }

// var hasil = kali(tambah(1,2), tambah(1,2));
// console.log(hasil);

// CARA MENGUNAKAN ARRAY
// function tambah() {
//     var hasil = 0;
//     for ( var i = 0; i < arguments.length; i++ ) {
//         hasil += arguments[i];
//     }

//     return hasil;
// };

// var tes = tambah(1,2,3,4)
// console.log(tes)