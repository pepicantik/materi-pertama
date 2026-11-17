// global

// local
// berada di dalam {}

let nama = "bery";

function sayNama() {
    let nama = "pepi"; //variabel dgn local scope
    console.log(nama + " di local scope");
}

sayNama();
console.log(nama + " di global scope"); 

// studi kasus 1
let nama2 = "bery"; //variabel dgn global scope

function sayNama2() {
    nama2 = "pepi"; //variabel global karna tidak ada let nya
    console.log(nama2 + " di local scope");
}

sayNama2();
console.log(nama2 + " di global scope"); 

// studi kasus 2
function sayNama3() {
    if(true) {
        var nama3 = "tigor"; // function scope
        let nama4 = "browi"; //bracket scope
    }
    console.log(nama3);
    console.log(nama4);
}

sayNama3();