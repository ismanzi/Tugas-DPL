var i = 5;
for (i = 0; i < 10; i++)
if (i % 2 == 1){
    console.log("nilai adalah " + i)
}else{};

var input = require ("readline-sync");
var bilangan = input.question ("input angka = ")

if (bilangan > 10){
console.log("Bilangan melebihi angka 10, silahkan input angka kembali");
}else{
    if(bilangan <= 0){
        console.log("input bilangan diatas 0");
    }
}