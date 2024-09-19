// *=============== BELAJAR MEMBUAT PROGRAM PENGELOLAAN PENUMPANG ANGKOT dengan JS ===============*//
// var hapusPenumpang = ['haikal', undefined, 'mamas'];
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