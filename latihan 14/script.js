//array

let array_siswa = ["bery", "pepi", "browi"];
console.log(array_siswa);

//penjelasan
//1. indexing (mengambil data di dalam array berdasarkan index atau dari 0)
console.log(array_siswa[0]);
console.log(array_siswa[1]);
console.log(array_siswa[2]);
console.log(array_siswa[3]); //undefined karna gada data ke 3

//2. length
let panjang_array = array_siswa.length;
console.log(`panjang array = ${panjang_array}`);

//3. tambah dan hapus 
array_siswa.push("tigor"); //push untuk menambahkan (mendorong) data baru
console.log(`tigor di tambahkan -> ${array_siswa}`);

array_siswa.pop("tigor"); //mengambil data atau di tarik kembali
console.log(`tigor di hapus -> ${array_siswa}`);

array_siswa.unshift("tigor"); //menambah data di depan
console.log(`tigor di tambah -> ${array_siswa}`);

array_siswa.shift("tigor"); //mengambil data di depan atau menghapus data di depan
console.log(`tigor di hapus -> ${array_siswa}`);