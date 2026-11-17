let nama_depan, nama_belakang, nama_lengkap;

document.getElementById("button_merge").onclick = function(){ //mengambil sesuatu yang ada di html yaitu bagian button
    nama_depan = document.getElementById("nama_depan").value; //ngambil data dari input yang ada di html lalu dimasukin ke varianel js
    nama_belakang = document.getElementById("nama_belakang").value; 
    nama_lengkap = nama_depan + " " + nama_belakang;
    console.log(nama_lengkap);

    document.getElementById("nama_lengkap").textContent = nama_lengkap;
};