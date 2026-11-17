// return value (pengembalian)
function tambah(angka1, angka2) {
    let hasil = angka1 + angka2;
    console.log("dalam fungsi")
    return hasil;
}

let y = tambah(3,1);
console.log("luar fungsi");
console.log(y);

function sambungKata(kata1, kata2) {
    let kata = kata1 + kata2;
    return kata;
}

console.log(sambungKata("oke", "gas"));

function luasKeliling(sisi) {
    let luas = sisi*sisi;
    let keliling = sisi*4;
    return [luas,keliling];
}

let hasil = luasKeliling(2);
console.log(hasil);
