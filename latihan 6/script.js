let angka_1, angka_2, hasil;

document.getElementById("button_jumlah").onclick = function() {
    angka_1 = document.getElementById("angka_1").value; //pakai value karna di html input nya tipe text
    console.log(`angka_1 = ${angka_1} tipe = ${typeof angka_1}`);
    angka_2 = document.getElementById("angka_2").valueAsNumber; //pakai valueAsNumber karna di html input nya tipe number
    console.log(`angka_2 = ${angka_2} tipe = ${typeof angka_2}`);

    hasil = parseFloat(angka_1) + angka_2; //cara hitung hasil harus di parse dlu angka_1 karna dia tipe awalnya string
    console.log(`hasil = ${hasil} tipe = ${typeof hasil}`);

    document.getElementById("hasil").textContent = hasil;
};