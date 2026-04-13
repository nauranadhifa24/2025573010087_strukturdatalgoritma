function sapa (){
    console.log('Halo! Selamat datang di praktikum JavaScript.');
}
sapa();
sapa();

function sapaNama(nama){
    console.log('Halo, ${nama}! Selamat belajar.');
}
sapaNama('Budi');
sapaNama('Siti');

function tambah(angka1, angka2){
    const hasil = angka1 + angka2;
    return hasil;
}

const hasilPenjumlahan = tambah(10, 25);
console.log('10 + 25 =', hasilPenjumlahan);
console.log('7 + 13 =', tambah(7, 13));

function hitung(nilai, pangali = 2){
    return nilai * pangali;
}
console.log(hitung(5));
console.log(hitung(5, 3));

const pesanGlobal = 'saya ada di mana saja';

function cekScope(){
    const pesanLokal = 'saya hanya ada di dalam function ini';
    console.log(pesanGlobal);
    console.log(pesanLokal);
}

cekScope();
console.log(pesanGlobal);

//latihan
function kurang(a,b){
    const hasil = a - b;
    return hasil;
}
function kali(a,b){
    const hasil = a * b;
    return hasil;
}
function bagi(a,b){
    if(b === 0){
        console.log("Error: tidak bisa membagi dengan nol");
        return null;
    }
    return a/b;
}
function kalkulator(a,operator, b){
    if(operator === "+"){
        return a + b;
    }else if (operator === "-"){
        return a -  b;
    }else if (operator === "*"){
        return a * b;
    }else if (operator === "/"){
        return a / b;
    }else{
        return "Operator tidak dikenali";
    }
}
console.log(kalkulator(10, "+", 5));
console.log(kalkulator(10, "/", 2));
console.log(kalkulator(20, "-", 5));
console.log(kalkulator(6, "*", 3));
console.log(kalkulator(50, "/", 2));