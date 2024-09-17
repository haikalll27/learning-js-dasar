// // BUNGKUS DENGAN WHILE AGAR GAME NYA TIDAK BERHENTI, DAN BISA BERHENTI JIKA DI BERHENTIKAN
// var tanya = true
// while ( tanya ) {
//     // Menangkap pilihan player
//     var p = prompt('pilih : gajah, semut, orang');

//     // Menangkap Pilihan Computer
//     // Membangkitkan Bilanan Random
//     var comp = Math.random();

//     if (comp < 0.34) {
//         comp = 'gajah';
//     } else if ( comp >= 0.34 && comp < 0.67 ) {
//         comp = 'orang';
//     } else {
//         comp = 'semut';
//     }

//     var hasil = '';
//     // Menentukan Rules
//     if (p == comp) {
//         hasil = 'SERII!';
//     } else if( p == 'gajah' ){
//         // if (comp == 'orang') {
//         //     hasil = 'MENANGG!';
//         // } else {
//         //     hasil = 'KALAHH!';
//         // }
//         hasil = ( comp == 'orang' ) ? 'MENANG!' : 'KALAH!';
//     } else if ( p == 'orang') {
//         hasil = ( comp == 'gajah') ? 'KALAH!' : 'MENANG';
//     } else if ( p == 'semut' ) {
//         hasil = ( comp == 'orang') ? 'KALAH!' : 'MENANG';
//     } else {
//         hasil = 'Masukan Pilihan Yang Salah!!';
//     }

//     // TAMPILKAN HASILNYA
//     alert('Kamu memilih : ' + p + ' dan komputer memilih : ' + comp + '\nMaka hasilnya : Kamu ' + hasil);

//     tanya = confirm('lagi ?');
// }

// alert('TERIMAKSIH SUDAH BERMAIN GAME SUWIT!.')