// *=============== BELAJAR MEMBUAT PROGRAM PENGELOLAAN PENUMPANG ANGKOT dengan JS ===============*//
var penumpang = [];
var tambahPenumpang = function(namaPenumpang, penumpang) {
    // JIKA ANGKOT KOSONG
    if ( penumpang.length == 0 ) {
        // TAMBAHKAN PENUMPANG DI AWAL ARRAY
        penumpang.push(namaPenumpang);
        // KEMBALIKAN ISI ARRAY * KELUAR DARI FUNCTION
        return penumpang;
    } else {
        // TERUSURI SELURUH KURSI DARI AWAL
        for ( var i = 0; i < penumpang.length; i++ ) {
            // JIKA ADA KUSRI KOSONG
            if ( penumpang[i] == undefined ) {
                // TAMBAHKAN PENUNGPANG DI KURSI TERSEBUT
                penumpang[i] = namaPenumpang;
                // KEMBALIKAN ISI ARRAY * KELUAR DARI FUNCTION
                return penumpang;
            }
            // JIKA SUDAH ADA NAMA YANG SAMA
            else if ( penumpang[i] == namaPenumpang ) {
                // TAMPILKAN PESAN KESALAHANYA
                console.log(namaPenumpang + ' Sudah ada di dalam angkot')
                // KEMBALIKAN ISI ARRAY * KELUAR DARI FUNCTION
                return penumpang;
            }
            // JIKA SELURUH KURSI TERISI
            else if ( i == penumpang.length - 1 ) {
                // TAMBAH PENUMPANG DI AKHIR ARRAY
                penumpang.push(namaPenumpang);
                // KEMBALIKAN ISI ARRAY * KELUAR DARI FUNCTION
                return penumpang;
            }
        }
    }
}

var hapusPenumpang = function(namaPenumpang, penumpang) {
    if ( penumpang.length == 0 ) {
        console.log('Angkot masih kosong.');
    } else {
        for ( var i = 0; i < penumpang.length; i++ ) {
            if ( penumpang[i] == namaPenumpang ) {
                penumpang[i] = undefined;
                // return penumpang;
            }
            else if ( i == penumpang.length - 1 ) {
                console.log(namaPenumpang + ' Tidak ada di dalam angkot')
            }
        }
    }

    return penumpang;
}