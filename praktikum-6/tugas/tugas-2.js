class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }

        current.next = newNode;
    }

    print() {
        let current = this.head;
        let result = "";

        while (current) {
            result += current.data + " -> ";
            current = current.next;
        }

        result += "null";
        console.log(result);
    }
}

// ======================
// 1. palindromeLinked
// ======================
function palindromeLinked(list) {
    let arr = [];
    let current = list.head;

    while (current) {
        arr.push(current.data);
        current = current.next;
    }

    let reversed = [...arr].reverse();

    return JSON.stringify(arr) === JSON.stringify(reversed);
}

// ======================
// 2. hapusDariAkhir
// ======================
function hapusDariAkhir(head, n) {
    let arr = [];

    let current = head;
    while (current) {
        arr.push(current.data);
        current = current.next;
    }

    arr.splice(arr.length - n, 1);

    let listBaru = new LinkedList();
    arr.forEach(x => listBaru.append(x));

    return listBaru;
}

// ======================
// 3. tengahLinkedList
// ======================
function tengahLinkedList(head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow.data;
}

// ======================
// UJI PALINDROME
// ======================
console.log("=== palindromeLinked ===");

let list1 = new LinkedList();
[1,2,3,2,1].forEach(x => list1.append(x));

console.log("List 1:");
list1.print();
console.log("palindrome?", palindromeLinked(list1));

let list2 = new LinkedList();
[1,2,2,1].forEach(x => list2.append(x));

console.log("List 2:");
list2.print();
console.log("palindrome?", palindromeLinked(list2));

let list3 = new LinkedList();
[1,2,3,4,5].forEach(x => list3.append(x));

console.log("List 3:");
list3.print();
console.log("palindrome?", palindromeLinked(list3));

let list4 = new LinkedList();
list4.append(1);

console.log("List 4:");
list4.print();
console.log("palindrome?", palindromeLinked(list4));


// ======================
// UJI HAPUS DARI AKHIR
// ======================
console.log("\n=== hapusDariAkhir ===");

let h1 = new LinkedList();
[1,2,3,4,5].forEach(x => h1.append(x));

console.log("sebelum 1:");
h1.print();

let hasil1 = hapusDariAkhir(h1.head, 1);

console.log("sesudah 1:");
hasil1.print();

let h2 = new LinkedList();
[1,2,3,4,5].forEach(x => h2.append(x));

console.log("sebelum 2:");
h2.print();

let hasil2 = hapusDariAkhir(h2.head, 2);

console.log("sesudah 2:");
hasil2.print();

let h3 = new LinkedList();
[1,2,3].forEach(x => h3.append(x));

console.log("sebelum 3:");
h3.print();

let hasil3 = hapusDariAkhir(h3.head, 1);

console.log("sesudah 3:");
hasil3.print();

let h4 = new LinkedList();
h4.append(50);

console.log("sebelum 4:");
h4.print();

let hasil4 = hapusDariAkhir(h4.head, 1);

console.log("sesudah 4:");
hasil4.print();


// ======================
// UJI TENGAH LINKED LIST
// ======================
console.log("\n=== tengahLinkedList ===");

let t1 = new LinkedList();
[1,2,3,4,5].forEach(x => t1.append(x));

console.log("List 1:");
t1.print();
console.log("tengah:", tengahLinkedList(t1.head));

let t2 = new LinkedList();
[1,2,3,4].forEach(x => t2.append(x));

console.log("List 2:");
t2.print();
console.log("tengah:", tengahLinkedList(t2.head));

let t3 = new LinkedList();
t3.append(1);

console.log("List 3:");
t3.print();
console.log("tengah:", tengahLinkedList(t3.head));

let t4 = new LinkedList();
t4.append(33);

console.log("List 4:");
t4.print();
console.log("tengah:", tengahLinkedList(t4.head));