// ================================================
// TUGAS 1: PRODUK, INHERITANCE, ARRAY METHOD
// ================================================

// ================================================
// PARENT CLASS: Produk
// ================================================
class Produk {
    constructor(id, nama, harga, stok) {
        this.id = id;
        this.nama = nama;
        this.harga = harga;
        this.stok = stok;
    }

    info() {
        return `ID: ${this.id} | Nama: ${this.nama} | Harga: Rp${this.harga} | Stok: ${this.stok}`;
    }

    tersedia() {
        return this.stok > 0;
    }

    jual(jumlah) {
        if (jumlah <= 0) {
            console.log('Jumlah tidak valid');
            return;
        }
        if (jumlah > this.stok) {
            console.log(`Stok ${this.nama} tidak mencukupi`);
            return;
        }
        this.stok -= jumlah;
        console.log(`${this.nama} terjual ${jumlah}`);
    }
}

// ================================================
// CHILD CLASS: ProdukDigital
// ================================================
class ProdukDigital extends Produk {
    constructor(id, nama, harga, ukuranFile, formatFile) {
        super(id, nama, harga, 9999); // stok besar (tidak terbatas)
        this.ukuranFile = ukuranFile;
        this.formatFile = formatFile;
    }

    info() {
        return `${super.info()} | Ukuran: ${this.ukuranFile}MB | Format: ${this.formatFile}`;
    }

    download() {
        console.log(`Mengunduh ${this.nama} (${this.formatFile})...`);
    }

    // override jual (tidak mengurangi stok)
    jual(jumlah) {
        console.log(`${this.nama} berhasil dibeli (produk digital)`);
    }
}

// ================================================
// CHILD CLASS: ProdukFisik
// ================================================
class ProdukFisik extends Produk {
    constructor(id, nama, harga, stok, beratGram, dimensi) {
        super(id, nama, harga, stok);
        this.beratGram = beratGram;
        this.dimensi = dimensi;
    }

    info() {
        return `${super.info()} | Berat: ${this.beratGram}g | Dimensi: ${this.dimensi}`;
    }

    hitungOngkir(tarifPerKg) {
        const beratKg = this.beratGram / 1000;
        return beratKg * tarifPerKg;
    }
}

// ================================================
// MEMBUAT INSTANCE
// ================================================

// Produk Digital
const digital1 = new ProdukDigital(1, 'Ebook JavaScript', 50000, 5, 'PDF');
const digital2 = new ProdukDigital(2, 'Template Website', 75000, 20, 'ZIP');

// Produk Fisik
const fisik1 = new ProdukFisik(3, 'Keyboard', 150000, 10, 800, '30x10x5 cm');
const fisik2 = new ProdukFisik(4, 'Mouse', 80000, 5, 200, '10x5x3 cm');

// Gabungkan semua
const daftarProduk = [digital1, digital2, fisik1, fisik2];

// ================================================
// (a) Menampilkan semua info produk
// ================================================
console.log('\n=== Semua Produk ===');
daftarProduk.forEach(p => {
    console.log(p.info());
});

// ================================================
// (b) Produk yang tersedia
// ================================================
console.log('\n=== Produk Tersedia ===');
const tersedia = daftarProduk.filter(p => p.tersedia());
tersedia.forEach(p => console.log(p.nama));

// ================================================
// (c) Array nama produk saja
// ================================================
console.log('\n=== Nama Produk ===');
const namaProduk = daftarProduk.map(p => p.nama);
console.log(namaProduk);

// ================================================
// UJI TAMBAHAN
// ================================================
console.log('\n=== Uji Method ===');
fisik1.jual(3);
console.log('Ongkir Keyboard:', fisik1.hitungOngkir(10000));

digital1.download();
digital1.jual(1);