function adaDuplikatLambat(arr){
    for (let i = 0; i < arr.length; i++)
        for(let j = i+1; j < arr.length; j++)
            if (arr[i] === arr[j]) return true;
    return false;
}
function adaDuplikatCepat(arr){
    const seen = new Set();
    for (const x of arr){
        if (seen.has(x)) return true;
        seen.add(x);
    }
    return false;
}
function frekuensiLambat(arr){
    const unik = [];
    const hitung = [];
    for (const x of arr){
        const idx = unik.indexOf(x);
        if (idx === -1){ unik.push(x);} 
    }
    return Object.fromEntries(unik.map((u,i) => [u, hitung]));
}
function frekuensiCepat(arr){
    const counter = {};
    for (const x of arr) counter[x] = (counter[x] || 0) + 1;
    return counter;
}
const besar = Array.from({length: 20000}, () => Math.floor(Math.random()* 1000));
let t = Date.now();
adaDuplikatLambat(besar);

console.log('Duplikat LAMBAT O(n2):', Date.now()-t, 'ms');
t = Date.now();
adaDuplikatCepat(besar);
console.log('Duplikat CEPAT O(n) :', Date.now()-t, 'ms');
const kata = ['a','b','a','c','b','a','d'];
console.log('\nFrekuensi:', frekuensiCepat(kata));

//Latihan
function cariPasanganLambat(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr [j] === target) {
                return [arr[i], arr [j]];
            }
        }
    }
    return null;
}

function cariPasanganCepat(arr, target) {

    const seen = new Set();

    for (let num of arr) {
        const pasangan =  target - num;

        if (seen.has(pasangan)) {
            return [pasangan, num];
        }
        seen.add(num);
    }

    return null;
}

const arr1 = [2, 7, 11, 15];
const target = 9;

console.log('=== Test Kecil ===');
console.log('Lambat:', cariPasanganLambat(arr1, target));
console.log('Cepat:', cariPasanganCepat(arr1, target));

function generateArray(n) {
    const hasil = [];
    for (let i = 0; i < n; i++) {
        hasil.push(Math.floor(Math.random() * 50000));

    }
    return hasil;
}

function ukurWaktu(label, fn, arr, target) {
    const mulai = Date.now();
    fn(arr, target);
    const selesai = Date.now();
    console.log(`${label}: ${selesai - mulai} ms`)
}
const arrBesar = generateArray(50000);
const targetBesar = -1; 

console.log('\n=== Test Besar (50.000 data) ===');
ukurWaktu('Lambat', cariPasanganLambat, arrBesar, targetBesar);
ukurWaktu('Cepat', cariPasanganCepat, arrBesar, targetBesar);