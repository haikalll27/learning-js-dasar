/*============ Angkot 1 PEMBELAJAAN WHILE ============*/
// var nilaiAwal = 1;
// while (nilaiAwal <= 10) {
//     console.log('Angkot No. ' + nilaiAwal + ' beroprasi dengan baik.');
// nilaiAwal++;
// }

/* atau bisa juga gini */
// var jmlAngkot = 10;
// var noAngkot = 1;
// while (noAngkot <= jmlAngkot) {
//     console.log('Angkot No. ' + noAngkot + ' beroprasi dengan baik.');
// noAngkot++;
// }


/*============ Angkot 1 PEMBELAJRAN PENGULANGAN FOR ============*/
// var jmlAngkot =
// var noAngkot =
// for (var nilaiAwal = 1; nilaiAwal <= 10; nilaiAwal++) {
//     console.log ('Hello World! ' + nilaiAwal + 'x');
// }


/*============ Latihan ke dud Juragan Angkot ============*/
// var jmlAngkot = 6;
// var noAngkot = 1;
// while (noAngkot <= jmlAngkot) {
//     console.log('Angkot No. ' + noAngkot + ' beroprasi dengan baik.');
// noAngkot++;
// }

// for(var jmlAngkot = 7; noAngkot <= 10; noAngkot++) {
//     console.log('Angkot No. ' + noAngkot + ' sedang tidak beroprasi.');
// }

// var jmlAngkot = 10;
// var angkotBeropasi = 6;
// var noAngkot = 1;
// while (noAngkot <= angkotBeropasi) {
//     console.log('Angkot No. ' + noAngkot + ' beroprasi dengan baik.');
// noAngkot++;
// }

// for( noAngkot = angkotBeropasi + 1; noAngkot <= jmlAngkot; noAngkot++) {
//     console.log('Angkot No. ' + noAngkot + ' sedang tidak beroprasi.');
// }


/*=========== PERKONDISIAN if dan else ===========*/
// var jmlAngkot = 10;
// var angkotBeropasi = 6;

// for( var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
//     if (noAngkot <= 6) {
//         console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik');
//     } else {
//         console.log('Angkot No. ' + noAngkot + ' sedang tidak beroprasi');
//     }
// }

// var jmlAngkot = 10;
// var angkotBeropasi = 6;

// for( var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
//     if (noAngkot <= 6) {
//         console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik');
//     } else if (noAngkot === 7) {
//         console.log('Angkot No. ' + noAngkot + ' sedang tidak beroprasi');
//         // console.log('Angkot No. ' + noAngkot + ' sedang lembur');
//     }else if (noAngkot === 8) {
//         console.log('Angkot No. ' + noAngkot + ' sedang lembur');
//         // console.log('Angkot No. ' + noAngkot + ' sedang tidak beroprasi');
//     } else if (noAngkot === 9) {
//         console.log('Angkot No. ' + noAngkot + ' sedang tidak beroprasi');
//     } else {
//         console.log('Angkot No. ' + noAngkot + ' sedang lembur');
//     }
// }

// for( var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
//     if (noAngkot <= 6) {
//         console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik');
//     } else if (noAngkot === 8) {
//         console.log('Angkot No. ' + noAngkot + ' sedang lembur');
//         // console.log('Angkot No. ' + noAngkot + ' sedang tidak beroprasi');
//         // console.log('Angkot No. ' + noAngkot + ' sedang lembur');
//     }else if (noAngkot === 10) {
//         console.log('Angkot No. ' + noAngkot + ' sedang lembur');
//         // console.log('Angkot No. ' + noAngkot + ' sedang tidak beroprasi');
//     } else {
//         console.log('Angkot No. ' + noAngkot + ' sedang tidak beroprasi');
//         // console.log('Angkot No. ' + noAngkot + ' sedang lembur');
//     }
// }

// for( var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
//     if (noAngkot <= 6 && noAngkot !== 5) {
//         console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik');
//     } else if (noAngkot === 8 || noAngkot === 10 || noAngkot === 5) {
//         console.log('Angkot No. ' + noAngkot + ' sedang lembur');
//     }
//      else {
//         console.log('Angkot No. ' + noAngkot + ' sedang tidak beroprasi');
//     }
// }


// for( var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
//     if (noAngkot <= 4) {
//         console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik');
//     } else if (noAngkot === 5 || noAngkot === 8 || noAngkot === 10) {
//         console.log('Angkot No. ' + noAngkot + ' sedang lembur');
//     } else if (noAngkot === 6) {
//         console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik');
//         // console.log('Angkot No. ' + noAngkot + ' sedang lembur');
//     }
//      else {
//         console.log('Angkot No. ' + noAngkot + ' sedang tidak beroprasi');
//     }
// }


/*===== INI ALERT =====*/
// var angka = prompt('masukan angka :')

// if (angka % 2 == 0) {
//     alert(angka + 'adalah bilangan Genap');
// } else {
//     alert(angka + 'adalah bilangan Ganjil');

// }

// var angka = prompt('masukan angka :')

// if (angka % 2 == 0) {
//     alert(angka + 'adalah bilangan Genap');
// } else if (angka % 2 == 1) {
//     alert(angka + 'adalah bilangan Ganjil');
// } else {
//     alert('yang anda mauskan bukan angka weyy!!!');
// }


/*=========== PERKONDISIAN MENGGUNAKAN SWITCH ===========*/
// var angka = prompt('masukan angka :');

// switch (angka) {
//     case '1':
//         alert('anda masukan angka 1')
//         break;
//     case '2':
//         alert('anda masukan angka 2')
//         break;
//     case '3':
//         alert('anda masukan angka 3')
//         break;

//     default:
//         alert('anda yang adan masukan salah')
//         break;
// }

// var item = prompt('masukan nama makanan / minuman : \n (cth: nasi, daging, susu, hamburger, softdrink)');

// switch (item) {
//     case 'nasi':
//         alert('makanan / minuman Sehat!')
//         break;
//     case 'daging':
//         alert('makanan / minuman Sehat!')
//         break;
//     case 'susu':
//         alert('makanan / minuman Sehat!')
//         break;
//     case 'hamburger':
//         alert('makanan / minuman Tidak Sehat!')
//         break;
//     case 'softdrink':
//         alert('makanan / minuman Tidak Sehat!')
//         break;

//     default:
//         alert('anda memasukan nama makanan / minuman yang salah')
//         break;
// }


/*=========== PENGULANGAN & PERKONDISIAN BERSARANG ===========*/
// var s = '';

// for ( var i = 0; i < 10; i++) {
//     for ( var j = 0; j < 5; j++) {
//         s += '*';
//     }
//     s += '\n';
// }
// console.log (s);

// *===== BINTANG SEGITIGA DI ATAS SEDIKIT DI BAWAH BANYAK =====*//
// var s = '';

// for ( var i = 0; i < 10; i++) {
//     for ( var j = 0; j <= i; j++) {
//         s += '*';
//     }
//     s += '\n';
// }
// console.log (s);



// *===== BINTANG SEGITIGA DI ATAS BANYAK KE BAWAH SEDIKIT =====*//
// var s = '';

// for ( var i = 10; i > 0; i--) {
//     for ( var j = 0; j < i; j++) {
//         s += '*';
//     }
//     s += '\n';
// }
// console.log (s);


// *=============== BELAJAR FUNCTION JS ===============*//
