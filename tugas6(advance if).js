// Soal no 2
const a = 1;
console.log(a === 1 ? "ini true" : "ini false");


// Soal no 4

// ini akan bernilai true
// karena hanya membandingkan nilai saja
const c = "4"  
console.log(c == 4)

// sedangkan ini akan bernilai false
// karena 4 (string) dan 4 integer type datanya berbeda
const d = "4" === 4; 
console.log( d === 4 )

var boole1 = true;
var boole2 = false;
var boole3 = false;
var boole4 = true;

console.log(boole1 || boole2)
console.log(!boole3)
console.log( boole3 && boole4)
console.log(boole1 || boole2 && !boole3 && !boole4)