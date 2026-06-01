class Node {

    constructor(data) {
        this.data = data;

        // Pointer ke node berikutnya
        this.next = null;

        // Pointer ke node sebelumnya
        this.prev = null;
    }
}

class DoublyLinkedList {

    constructor() {

        // Node pertama
        this.head = null;

        // Node terakhir
        this.tail = null;

        // Jumlah node
        this.size = 0;
    }

    append(data) {

        const newNode = new Node(data);

        // Jika list kosong
        if (!this.head) {

            this.head = newNode;
            this.tail = newNode;
        }

        // Jika list memiliki isi
        else {

            // Hubungkan tail lama ke node baru
            this.tail.next = newNode;

            // Hubungkan node baru ke tail lama
            newNode.prev = this.tail;

            // Pindahkan tail ke node baru
            this.tail = newNode;
        }

        this.size++;
    }

   
    prepend(data) {

        const newNode = new Node(data);

        // Jika kosong
        if (!this.head) {

            this.head = newNode;
            this.tail = newNode;
        }

        // Jika ada isi
        else {

            // Hubungkan node baru ke head lama
            newNode.next = this.head;

            // Hubungkan head lama ke node baru
            this.head.prev = newNode;

            // Pindahkan head
            this.head = newNode;
        }

        this.size++;
    }

    insertAt(data, index) {

        // Validasi index
        if (index < 0 || index > this.size) {
            return false;
        }

        // Jika insert di awal
        if (index === 0) {
            this.prepend(data);
            return true;
        }

        // Jika insert di akhir
        if (index === this.size) {
            this.append(data);
            return true;
        }

        const newNode = new Node(data);

        let current = this.head;

        // Traversal ke index
        for (let i = 0; i < index; i++) {
            current = current.next;
        }

        // Hubungkan node baru
        newNode.prev = current.prev;
        newNode.next = current;

        current.prev.next = newNode;
        current.prev = newNode;

        this.size++;

        return true;
    }

    delete(data) {

        // Jika kosong
        if (!this.head) {
            return false;
        }

        let current = this.head;

        while (current) {

            // Jika data ditemukan
            if (current.data === data) {

                // Jika node head
                if (current === this.head) {

                    this.head = current.next;

                    // Jika masih ada node
                    if (this.head) {
                        this.head.prev = null;
                    }

                    // Jika list menjadi kosong
                    else {
                        this.tail = null;
                    }
                }

                // Jika node tail
                else if (current === this.tail) {

                    this.tail = current.prev;

                    this.tail.next = null;
                }

                // Jika node tengah
                else {

                    current.prev.next = current.next;

                    current.next.prev = current.prev;
                }

                this.size--;

                return true;
            }

            current = current.next;
        }

        return false;
    }

    reverse() {

        let current = this.head;
        let temp = null;

        while (current) {

            // Tukar next dan prev
            temp = current.prev;

            current.prev = current.next;

            current.next = temp;

            // Pindah node
            current = current.prev;
        }

        // Tukar head dan tail
        temp = this.head;
        this.head = this.tail;
        this.tail = temp;
    }

   
    printForward() {

        let current = this.head;
        let result = "";

        while (current) {

            result += current.data + " <-> ";

            current = current.next;
        }

        result += "null";

        console.log(result);
    }

    printBackward() {

        let current = this.tail;
        let result = "";

        while (current) {

            result += current.data + " <-> ";

            current = current.prev;
        }

        result += "null";

        console.log(result);
    }
}


console.log("=== DOUBLY LINKED LIST ===");

const dll = new DoublyLinkedList();

// Append data
dll.append(10);
dll.append(20);
dll.append(30);

console.log("Setelah append:");
dll.printForward();

// Prepend data
dll.prepend(5);

console.log("\nSetelah prepend:");
dll.printForward();

// Insert data
dll.insertAt(15, 2);

console.log("\nSetelah insertAt(15, 2):");
dll.printForward();

// Print backward
console.log("\nPrint backward:");
dll.printBackward();

// Delete data
dll.delete(20);

console.log("\nSetelah delete(20):");
dll.printForward();

// Reverse list
dll.reverse();

console.log("\nSetelah reverse:");
dll.printForward();

// Print backward setelah reverse
console.log("\nPrint backward setelah reverse:");
dll.printBackward();

// Size
console.log("\nJumlah node:", dll.size);