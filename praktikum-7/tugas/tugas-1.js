class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(data) {
        this.items.push(data);
    }

    dequeue() {
        if (this.isEmpty()) return null;
        return this.items.shift();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    print() {
        return this.items.map(item => item.nama).join(", ");
    }
}

class Pasien {
    constructor(id, nama, prioritas, waktuDaftar) {
        this.id = id;
        this.nama = nama;
        this.prioritas = prioritas; // darurat / biasa
        this.waktuDaftar = waktuDaftar;
    }
}

class AntrianRS {
    constructor() {
        this.antrianDarurat = new Queue();
        this.antrianBiasa = new Queue();
    }

    // O(1)
    daftar(pasien) {
        if (pasien.prioritas === "darurat") {
            this.antrianDarurat.enqueue(pasien);
        } else {
            this.antrianBiasa.enqueue(pasien);
        }
    }

    // O(1)
    layani() {
        let pasien = null;

        if (!this.antrianDarurat.isEmpty()) {
            pasien = this.antrianDarurat.dequeue();
        } else if (!this.antrianBiasa.isEmpty()) {
            pasien = this.antrianBiasa.dequeue();
        }

        if (pasien) {
            console.log(
                `Melayani: ${pasien.nama} (${pasien.prioritas})`
            );
        } else {
            console.log("Tidak ada pasien dalam antrian.");
        }
    }

    tampilkanAntrian() {
        console.log("\n=== Status Antrian ===");
        console.log(
            "Darurat :",
            this.antrianDarurat.isEmpty()
                ? "-"
                : this.antrianDarurat.print()
        );

        console.log(
            "Biasa   :",
            this.antrianBiasa.isEmpty()
                ? "-"
                : this.antrianBiasa.print()
        );
    }
}

// Simulasi
const rs = new AntrianRS();

const dataPasien = [
    "Andi", "Budi", "Citra", "Dina", "Eko",
    "Fajar", "Gita", "Hani", "Indra", "Joko"
];

for (let i = 0; i < 10; i++) {
    const prioritas =
        Math.random() < 0.4 ? "darurat" : "biasa";

    const pasien = new Pasien(
        i + 1,
        dataPasien[i],
        prioritas,
        Date.now()
    );

    rs.daftar(pasien);
}

rs.tampilkanAntrian();

console.log("\n=== Proses Pelayanan ===");
while (
    !rs.antrianDarurat.isEmpty() ||
    !rs.antrianBiasa.isEmpty()
) {
    rs.layani();
}

rs.tampilkanAntrian();