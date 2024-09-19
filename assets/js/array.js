// *=============== BELAJAR ARRAY JS ===============*//
// contoh sederhana
// CARA KE 1
// var binatang = ['Sapi', 'Kerbau', 'Kucing', 'Ayam', 'Monyet', 'Kuda', 'Paus', 'Tikus',];

// console.log(binatang);

// CARA KE 1
// var binatang = [];
// binatang = ['Sapi', 'Kerbau', 'Kucing', 'Ayam', 'Monyet', 'Kuda', 'Paus', 'Tikus',];

// console.log(binatang[1]);



// *=============== BELAJAR MANIPULASI ARRAY JS ===============*//
// ANIPULASI ARRAY
// 1. Menambahkan Isi Array
// var arr = ["a", 1, true];
// console.log(arr);

// var arr = [];
// arr[0] = "Ikal";
// arr[1] = "Mamas";
// arr[2] = "Anjing";
// arr[3] = "Blok";
// arr[4] = "Dungo";

// console.log(arr);

// 2. MENGHAPUS ISI ARRY
// var arr = ["satu", "dua", "tiga"]
// arr[1] = undefined;
// console.log(arr);


// 3. MENAMPILKAN ISI ARRY DENGAN BENAR
// // MENGHITUNG DI MULAI DARI 0
// var arr = ["satu", "dua", "tiga"]

// for ( var i = 0; i < 3; i++ ) {
//     console.log(arr[i]);
// }



// MENGHITUNG DI MULAI DARI 1
// var arr = ["Ikal", "Gantang", "Sekali"];

// for ( var i = 0; i < 3; i++ ) {
//     console.log('Mahasiswa ke-' + (i+1) + ':' + arr[i]);
// }

// MENGHITUNG DI MULAI DARI 1, DAN MENGGUNAKAN LENGTH AGAR JS NYA MENGHITUNG SENDIRI JIKA ARRAY NYA DI TAMBAHKAN
// var arr = ["Ikal", "Gantang", "Sekali", "Mamas", "Jore"];

// for ( var i = 0; i < arr.length; i++ ) {
//     console.log('Mahasiswa ke-' + (i+1) + ':' + arr[i]);
// }


// *=============== BELAJAR METHOD PADA ARRAY JS ===============*//
// 1. JOIN MERUBAH ISI ARRAY MENJADI STRING
// var arr = ["Ikal", "Gantang", "Sekali", "Mamas", "Jore"];
// console.log(arr.join(' - '));

// 2. PUSH & POP
// PUSH ITU FUNGSINYA MENDORONG ATUA MEMASUKAN ELEMNT BARU DI AKHIR ARRAY NYA
// var arr = ["Ikal", "Gantang", "Sekali", "Mamas", "Jore"];
// arr.push('Dimas');
// console.log(arr.join(' - '));


// POP ITU FUNGSINYA MENGHILANGKAN ELEMNT AKHIR DI DALAM ARRAY NYA
// var arr = ["Ikal", "Gantang", "Sekali", "Mamas", "Jore"];
// arr.pop();
// console.log(arr.join(' - '));


// 3. UNSHIFT & SHIFT
// UNSHIFT ITU FUNGSINYA UNTUK MENAMBAHKAN DATA ARRAY DI AWAL
// var arr = ["Ikal", "Gantang", "Sekali", "Mamas", "Jore"];
// arr.unshift("mamas pea", "tambahLagi");
// console.log(arr.join(' - '));


// SHIFT ITU FUNGSINYA UNTUK MENGHILANGAKAN DATA ARRAY DI AWAL
// var arr = ["Ikal", "Gantang", "Sekali", "Mamas", "Jore"];
// arr.shift();
// console.log(arr.join(' - '));