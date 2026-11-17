// operator logika And, Or, Not

let data_bool = true;
console.log(data_bool);

// 1. Not
console.log(!data_bool); //ngeflip data boolean dri true ke false, false ke true
console.log(!!data_bool); 
console.log(!1); //ini juga boolean 
console.log(!0); //ini juga boolean

// 2. Or (operasi antara dua variabel boolean)

//A         true true false false
//B         true false true false

// hasil    true true  true false (salah satu true hasilnya akan true)

console.log(`A = true OR B = true, hasil = ${true || true}`); //simbol OR adalah ||
console.log(`A = false OR B = false, hasil = ${false || false}`);
console.log(`A = false OR B = true, hasil = ${false || true}`);

let makan = true;
let minum = false;
let sudah_nyantap = makan || minum;
console.log(`sudah menyantap = ${sudah_nyantap}`);

// 3. And -> && (operasi antara dua boolean)

//A         true  true   false  false
//B         true  false  true   false

// hasil    true  false  false  false (salah satu false hasilnya akan false)

console.log(`A = true OR B = true, hasil = ${true && true}`); //simbol AND adalah &&
console.log(`A = false OR B = false, hasil = ${false && false}`);
console.log(`A = false OR B = true, hasil = ${false && true}`);

let naspad = true;
let geprek = false;
let suka = naspad && geprek;
console.log(`suka naspad? ${suka}`);