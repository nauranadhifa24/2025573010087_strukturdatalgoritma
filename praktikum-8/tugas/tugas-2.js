class HashMapLinearProbing {
    constructor(capacity = 8) {
        this.capacity = capacity;
        this.size = 0;
        this.table = new Array(capacity).fill(null);

        // Tombstone marker
        this.DELETED = { deleted: true };
    }

    hash(key) {
        let hash = 0;

        const str = String(key);

        for (let i = 0; i < str.length; i++) {
            hash = (hash * 31 + str.charCodeAt(i)) % this.capacity;
        }

        return hash;
    }

    loadFactor() {
        return this.size / this.capacity;
    }

    resize() {
        const oldTable = this.table;

        this.capacity *= 2;
        this.table = new Array(this.capacity).fill(null);
        this.size = 0;

        for (const item of oldTable) {
            if (
                item !== null &&
                item !== this.DELETED
            ) {
                this.set(item.key, item.value);
            }
        }
    }

    set(key, value) {
        if (this.loadFactor() > 0.7) {
            this.resize();
        }

        let index = this.hash(key);

        while (
            this.table[index] !== null &&
            this.table[index] !== this.DELETED &&
            this.table[index].key !== key
        ) {
            index = (index + 1) % this.capacity;
        }

        if (
            this.table[index] === null ||
            this.table[index] === this.DELETED
        ) {
            this.size++;
        }

        this.table[index] = { key, value };
    }

    get(key) {
        let index = this.hash(key);
        let start = index;

        while (this.table[index] !== null) {
            if (
                this.table[index] !== this.DELETED &&
                this.table[index].key === key
            ) {
                return this.table[index].value;
            }

            index = (index + 1) % this.capacity;

            if (index === start) break;
        }

        return undefined;
    }

    delete(key) {
        let index = this.hash(key);
        let start = index;

        while (this.table[index] !== null) {
            if (
                this.table[index] !== this.DELETED &&
                this.table[index].key === key
            ) {
                this.table[index] = this.DELETED;
                this.size--;
                return true;
            }

            index = (index + 1) % this.capacity;

            if (index === start) break;
        }

        return false;
    }

    print() {
        console.log("=== HASH TABLE ===");

        this.table.forEach((item, index) => {
            if (item === null) {
                console.log(`${index}: EMPTY`);
            } else if (item === this.DELETED) {
                console.log(`${index}: DELETED`);
            } else {
                console.log(
                    `${index}: (${item.key}, ${item.value})`
                );
            }
        });
    }
}
const map = new HashMapLinearProbing();

map.set("A", 10);
map.set("B", 20);
map.set("C", 30);
map.set("D", 40);

console.log(map.get("B"));

map.delete("B");

console.log(map.get("B"));

map.print();