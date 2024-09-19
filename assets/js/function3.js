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


// *=============== BELAJAR FUNCTION JS REFACTORING ===============*//
// function jumlahVolumeDuaKubus(a, b) {
//     var volumeA;
//     var volumeB;
//     var total;

//     volumeA = a * a * a;
//     volumeB = b * b * b;

//     total = volumeA + volumeB;

//     return total;

// }

// alert(jumlahVolumeDuaKubus(8, 2));

// BISA JUGA MENGGUNAKAN CARA KAYA GINI CARA 1
// function jumlahVolumeDuaKubus(a, b) {
//      var total;

//      total = a * a * a + b * b * b;

//      return total;
// }

// alert(jumlahVolumeDuaKubus(8, 3));

// BISA JUGA MENGGUNAKAN CARA KAYA GINI CARA 2
// function jumlahVolumeDuaKubus(a, b) {
//     // var total;

//     return a * a * a + b * b * b;

//     // return total;
// }

// alert(jumlahVolumeDuaKubus(8, 3));



// *=============== BELAJAR FUNCTION JS VARIABLE SCOPE ===============*//
// var a = 1;

// function tes() {
//     console.log(a);
// }

// tes(a);
// console.log(a);



// *=============== BELAJAR FUNCTION JS REKURSIF ===============*//
// for ( var i = 10; i >= 1; i-- ) {
//     console.log(i);
// }

// MENGGUNAKAN BASE CASE
// function cetakAngka(n) {
//     if( n === 0 ) {
//         return;
//     }

//     console.log(n);
//     cetakAngka(n-1);
// }

// cetakAngka(10);

// MENGHITUNG SEBUAH NILAI FAKTORIAL
// function faktorial(n) {
//     if (n === 0) return 1;
//     return n * faktorial(n-1);
// }


// *=============== BELAJAR FUNCTION JS DECLARATION vs. EXPRESSION ===============*//
// FUNCTION DECLARATION
// contoh kecil

// CARA KE 1
// function tampilPesan(nama) {
//     alert('hallo ' + nama);
// }

// tampilPesan('hiakal');

// CARA KE 2
// tampilPesan('hiakal');

// function tampilPesan(nama) {
//     alert('hallo ' + nama);
// }


// FUNCTION EXPRESSION
// contoh kecil
// var tampilPesan = function (nama) {
//     alert('hallo ' + nama);
// }

// tampilPesan('hiakal');
