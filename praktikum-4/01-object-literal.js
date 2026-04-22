const mahasiswa = {
    nama    : 'Budi Santoso',
    umur    : 20,
    jurusan : 'Teknik Informatika',
    ipk     : 3.75,
    aktif   : true,
};

console.log('=== Akses Property ===');
console.log('Nama       :', mahasiswa.nama);
console.log('Jurusan    :', mahasiswa['jurusan']);

const keyYangDicari = 'ipk';
console.log('IPK    :', mahasiswa[keyYangDicari]);

mahasiswa.email = 'budi@email.com';
mahasiswa.umur  = 21;

console.log('\nSetelah diubah:', mahasiswa);

delete mahasiswa.aktif;
console.log('Setelh delete:', mahasiswa);

const dosen ={
    nama        : 'Dr. Ahmad Fauzi',
    mataKuliah  : 'Struktur Data',
    pengalaman  : 10, //tahun

    perkenalan(){
        return `Halo, saya ${this.nama}, mengajar ${this.mataKuliah}.`;
    },
    StatusSenior(){
        if (this.pengalaman >= 10){
            return `${this.nama} adalah dosen senior.`;
        }
        return `${this.nama} adalah dosen junior.`;
    }
};
console.log('\n=== Method Object ===');
console.log(dosen.perkenalan());
console.log(dosen.StatusSenior());

console.log('\n=== Iterasi Object ===');
for(const key in dosen){
    if(typeof dosen[key] !== 'function'){
        console.log(`   ${key}: ${dosen[key]}`);
    }
}
//object.keys(), Object.values(), Object.entries()
console.log('Keys   :',Object.keys(mahasiswa));
console.log('Values :',Object.values(mahasiswa));

//latihan
const buku = {
    judul: 'Sang Pemimpi',
    pengarang: 'Andrea Hirata',
    tahunTerbit: 2006,
    harga: 79000,
    tersedia: true,

    info(){
        return `Judul: ${this.judul}, Pengarang: ${this.pengarang}, tahun: ${this.tahunTerbit}, Harga: ${this.harga}, Tersedia: ${this.tersedia}`;
    },
    diskon(persen){
        return this.harga * (1 - persen / 100);
    }
};
console.log('\n=== Info Buku ===');
console.log(buku.info());
console.log('Harga setelah diskon 10%:', buku.diskon(10));

const koleksiBuku = [
    {
        judul: 'Laut Bercerita',
        pengarang: 'Leila S.Chudori',
        tahunTerbit: 2017,
        harga: 50000,
        tersedia: true,
        info(){
            return `${this.judul} oleh ${this.pengarang}`;
        }
    },
    {
        judul: 'Bumi Manusia',
        pengarang: 'Pramoedya Ananta Toer',
        tahunTerbit: 1980,
        harga: 75000,
        tersedia: true,
        info(){
            return `${this.judul} oleh ${this.pengarang}`;
        }
    },
    {
        judul: 'Dear Nathan',
        pengarang: 'Erisca Febriani',
        tahunTerbit: 2016,
        harga: 67000,
        tersedia: false,
        info(){
            return `${this.judul} oleh ${this.pengarang}`;
        }
    }
];
console.log('\n=== Semua Buku ===');
koleksiBuku.forEach(b => {
    console.log(b.info());
});
const bukuTersedia = koleksiBuku.filter(b => b.tersedia === true);

console.log('\n=== Buku Tersedia ===');
bukuTersedia.forEach(b => {
    console.log(b.info());
});
