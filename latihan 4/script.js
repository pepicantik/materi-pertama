//numbers - 64-bit 

let nilai = 10; //integer - nilai bilangan bulat 
let nilai_float = 10.123; //float - nilai bilangan desimal
let nilai_big_int = 237674723192839274232856435n; //bigint
console.log(typeof nilai_big_int);

//cara menggunakan data ini
let angka = 5.678;
let angka_int = parseInt(angka); //gampangnya ini untuk mengubah desimal menjadi bilangan bulat
console.log(angka_int);
console.log(typeof angka_int);

let angka_2 = 10;
let angka_2_float = parseFloat(angka_2);
console.log(angka_2_float);

//mengubah string
let data = "10.98";
// let data = "10.98" + 10;
// let data = "aku mau mangga sebanyak 10.98"; (dia bakal jadi NaN karna berusaha mengubah kalimat)
console.log(data); //hasilnya 10 akan ikut di belakang 8 menjadi 10.9810
console.log(parseInt(data)+10); //harus di parseInt biar bisa kejumlah
console.log(parseFloat(data)+10); //untuk nambah tpi jadi desimal

//contoh
let pembelian = "10000";
let pajak = 1200;
let bayar = parseInt(pembelian) + pajak;
console.log(bayar)