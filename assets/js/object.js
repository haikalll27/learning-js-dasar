// *=============== BELAJAR OBJECT dengan JS PART 1 ===============*//
// CONTOH SEDERHANA
// var mhs = {
//     nama    : "haikal",
//     umur    : 17,
//     ips     : [3.00, 31.0, 33,5],
//     alamat  : {
//         jalan       : "JL. Citoh, NO. 123",
//         kec         : "Cibungbulang",
//         provinsi    : "Bogor",
//     }
// };



// *=============== BELAJAR OBJECT dengan JS PART 2 ===============*//
// MEMBUAT OBJECT
// CARA MENGGUNAKAN OBJECT LIBERAL
// var mhs1 = {
//     nama    : "Haikal Apriansyah",
//     nrp     : '0987654321',
//     email   :"haikal@gmail.com",
//     jurusan :"Rekayasa Perangkat Lunak", 
// };

// var mhs2 = {
//     nama    : "Haikal Apriansyah",
//     nrp     : '0987654321',
//     email   :"haikal@gmail.com",
//     jurusan :"Rekayasa Perangkat Lunak", 
// };


// // CARA MENGGUNAKAN FUNCTION DECLARATION
// function objectMahasiswa (nama, nrp, email, jurusan) {
//     var mhs = {};
//     mhs.nama = nama;
//     mhs.nrp = nrp;
//     mhs.email = email;
//     mhs.jurusan = jurusan;

//     return mhs;
// };

// // BISA DI BUAT BERULANG-ULANG
// var mhs3 = objectMahasiswa('Haikal Apriansyah3', '09876543211', 'haikal3@gmail.com', 'Tektik Informatika');

// var mhs4 = objectMahasiswa('Haikal Apriansyah3', '09876543211', 'haikal3@gmail.com', 'Tektik Informatika');


// // CARA MENGGUNAKAN FUNCTION CONSTRUCTOR
// function Mahasiswa(nama, nrp, email, jurusan) {
//     this.nama = nama;
//     this.nrp = nrp;
//     this.email = email;
//     this.jurusan = jurusan;
// };

// var mhs5 = new Mahasiswa('Haikal constructor', '123456789010', 'ikal@gmail.com', 'Tektik Informatika');



// *=============== BELAJAR THIS dengan JS ===============*//
//==== KONSEP THIS ADALAH SEMBUAH KEYWORD SPECIAL SECARA OTOMATIS DI DEFINISIKAN OLEH FUNCTION
//==== Contoh
// console.log(this);
// var a = 10;
// console.log(this.a);


// MEMBUAT OBJECT

// 1. CARA KE 1 - MENGGUNAKAN FUNCTION DECLARATION
// function hallo() {
//     console.log(this);
//     console.log('halo');
// }
// this.hallo();
// THIS MENGEMBALIKAN OBJECT GELOBAL


// 1. CARA KE 2 - OBJECT LITERAL
// var obj = {a : 10, nama : 'Haikal'};
// obj.hallo = function() {
//     console.log(this);
//     console.log('hallo');
// };
// obj.hallo();
// THIS MENGEMBALIKAN OBJECT YANG BERSANGKUTAN



// 1. CARA KE 3 - MENGGUNAKAN
// function Hallo() {
//     console.log(this);
//     console.log('hallo');
// };
// new Hallo();
// var obj1 = new Hallo();
// var obj1 = new Hallo();
// THIS MENGEMBALIKAN OBJECT YANG baru di buat





// *=============== BELAJAR MEMBUAT OBJECT ANGKOT dengan JS ===============*//
// *=============== BELAJAR TERAKHIR DENGAN JS ===============*//
function Angkot(sopir, trayek, penumpang, kas) {
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    this.penumpangNaik = function(namaPenumpang) {
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    }

    this.penumpangTurun = function(namaPenumpang, bayar) {
        if ( this.penumpang.length === 0 ) {
            alert('Angkot masih kosong');
            return false;
        }

        for ( var i = 0; i < this.penumpang.length; i++ ) {
            if ( this.penumpang[i] == namaPenumpang ) {
                this.penumpang[i] = undefined;
                this.kas += bayar;
                return this.penumpang;
            };
        }
    }
};

var angkot1 = new Angkot ('Haikal Apriansyah', ['Cinangneng', 'Cibatok'], [], 0);

var angkot2 = new Angkot ('Mamas Anjing', ['Leuwiliang', 'Dramaga'], [], 0);

