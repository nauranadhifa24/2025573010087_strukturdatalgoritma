const nilaiMahasiswa = [75, 90, 55, 82, 68, 95, 58, 77];

console.log('=== forEach: Tampilkan Semua Nilai ===');
nilaiMahasiswa.forEach((nilai, indeks) => {
    console.log('   Mahasiswa-${indeks + 1}: ${nilai}');
});

const gradeHuruf = nilaiMahasiswa.map(nilai => {
    if (nilai >= 90) return 'A';
if (nilai >= 80) return 'B';
if (nilai >= 70) return 'C';
if (nilai >= 60) return 'D';
return 'E';
});

console.log('\n=== map: Nilai ke Grade ===');
console.log('Nilai  :', nilaiMahasiswa);
console.log('Grade  :', gradeHuruf);

const nilaiLULUS = nilaiMahasiswa.filter(nilai => nilai >= 60);
const nilaiGAGAL = nilaiMahasiswa.filter(nilai => nilai < 60);

console.log('\n=== filter   : Lulus dan Tidak Lulus ===');
console.log('Semua nilai    :', nilaiMahasiswa);
console.log('Nilai lulus    :', nilaiLULUS);
console.log('Nilai gagal    :', nilaiGAGAL);
   
const totalNilai = nilaiMahasiswa.reduce((akumulator, nilai) => {
return akumulator + nilai;
}, 0); 

const rataRata = totalNilai / nilaiMahasiswa.length;
console.log('\n=== reduce: Statistik Nilai ===');
console.log('Total nilai :', totalNilai);
console.log('Rata-rata :', rataRata.toFixed(2));

const rataRataNilaiLulus = nilaiMahasiswa
.filter(nilai => nilai >= 60) 
.reduce((acc, val, idx, arr) => {
return acc + val / arr.length; 
}, 0);

console.log('\n=== Method Chaining ===');
console.log('Rata-rata nilai lulus:', rataRataNilaiLulus.toFixed(2));

//latihan
const produk = [{nama:'Laptop', harga:8500000, stok:5},
    {nama:'Mouse', harga:150000,stok:0},{nama:'Keyboard',
    harga:450000,stok:12},{nama:'Monitor',harga:3200000,stok:0},
    {nama:'Headset',harga:350000,stok:8}];
const tersedia = produk.filter(produk => produk.stok > 0);
console.log("prokduk tersedia:", tersedia);

const namaProduk = tersedia.map(produk => produk.nama);
console.log("Nama produk tersedia :", namaProduk);

const totalTersedia = tersedia.reduce((total, produk) => {
return  total + (produk.harga * produk.stok);
}, 0); 
console.log("Total semua produk yang tersedia:", totalTersedia);

console.log('=== forEach: Tampilkan Semua produk ===');
produk.forEach((produk, harga) => {
    if (produk.stok > 0){
        console.log(`[TERSEDIA] ${produk.nama} - Rp${produk.harga} (${produk.stok} unit)`);
    } else {
        console.log(`[HABIS] ${produk.nama} - Rp${produk.harga}`);
    }
});


