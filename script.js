console.log("tes");

//variabel
let namaDepan = "Eka";
let namaBelakang = "Defiyanti";
const jurusan = "RPL";

console.log(namaDepan);
console.log(namaBelakang);
console.log(jurusan);

// jurusan = "TEI";
// console.log(jurusan); //hasil eror karna nilai jurusan adalah const (tetap), tidak bisa di ubah

namaDepan = "Pepi";
console.log(namaDepan); //variabel let bisa di ubah isi datanya

//tipe data
let nama = "bery"; //tipe data string
let angka = 5; //tipe data number
let desimal = 3.14; //tipe data number
let aktif = true; //tipe data boolean
let kosong = null; //null
let belumAda; //tipe data undefined (tidak ada data)

console.log(nama);
console.log(typeof nama); //periksa tipe data
console.log(angka);
console.log(typeof angka); //periksa tipe data
console.log(desimal);
console.log(typeof desimal); //periksa tipe data
console.log(belumAda); //akan muncul undefined

//variabel banyak sekaligus
let a = 1, b = 2, c = 3;
console.log(a,b,c);

let [x, y] = [10, 15];
console.log(x, y);

//number:nilai khusus
console.log(10 / 0); //infinity
console.log(-10 / 0); //-infinity
console.log("abc" * 2); //NaN (not a number)
console.log(typeof NaN); //number
console.log(NaN === NaN); //false
console.log(Number.isNaN(NaN)); //true

//mengganti tipe data (konversi)

//string to number
let umurTigor = "10";
console.log(umurTigor);
console.log(Number("10")); //dia akan berubah menjadi tipe data number

//number to string
let umurPima = 6;
console.log(umurPima);
console.log(String(6)); //berubah menjadi tipe data string

//string:literal
const s1 = "petik ganda";
const s2 = 'petik tunggal';
const s3 = `backtick`;

//memakai tanda petik di dalam string
let c1 = "Dia berkata 'halo'";
let c2 = 'Dia berkata "halo"';
let c3 = `Dia berkata "halo" dan 'hai'`;

console.log(c1);
console.log(c2);
console.log(c3);

//template literal
let namaLengkap = "Eka Defiyanti"
let umur = 17;
console.log(`${namaLengkap} umur ${umur}`); //interpolasi
console.log(`Tahun depan ${namaLengkap} berumur ${umur + 1}`); //ekspresi dalam ${}

//string:escape character
console.log("Bery berkata \"halo semua!\""); //petik ganda 
console.log('Bery berkata \'halo semua!\''); //petik tunggal
console.log("Bery ingin bermain sepeda diluar \nbersama Tigor"); //new line (baris kebawah)
console.log("Bery ingin \tbermain sepeda diluar \nbersama Tigor"); //nambah tab (Spasi)

//operasi string

//panjang dan akses karakter 
const contoh = "Eka Defiyanti";
console.log(contoh.length);
console.log(contoh[0]); //karakter ke 0
console.log(contoh[4]); //karakter ke 4
console.log(contoh.charAt(7)); //karakter ke 7

//huruf besar dan kecil
console.log(contoh.toUpperCase()); //huruf kapital semua
console.log(contoh.toLowerCase()); //huruf kecil semua

//menggabungkan string
let depan = "pepi"
let belakang = "cantik"
console.log(depan.concat(" ", belakang));
console.log(`${depan} ${belakang}`);

let contoh1 = "A";
contoh1 += "B";
contoh1 += "C";
console.log(contoh1);

//mengambil string 
let contoh2 = "NgodingIsFun";
console.log(contoh2.slice(0, 7)); //muncul ngoding
console.log(contoh2.slice(7, 0)); //gada yg muncul (kosong)
console.log(contoh2.slice(7)); //muncul IsFun

//mengganti isi string (replace)
let contoh3 = "apel, jeruk, mangga, jeruk";
console.log(contoh3);
console.log(contoh3.replace("apel", "pisang")); //dia akan mengganti apel menjadi pisang
console.log(contoh3.replace("jeruk", "anggur")); //dia akan mengganti jeruk yg pertama saja
console.log(contoh3.replaceAll("jeruk", "anggur")); //dia akan mengganti semua nama jeruk