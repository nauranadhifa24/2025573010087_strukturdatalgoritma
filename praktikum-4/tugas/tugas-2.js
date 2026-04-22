// ================================================
// TUGAS 2: CEK KURUNG SEIMBANG (STACK)
// ================================================

// ================================================
// CLASS STACK
// ================================================
class Stack {
    constructor() {
        this.data = [];
    }

    push(elemen) {
        this.data.push(elemen);
    }

    pop() {
        if (this.isEmpty()) return null;
        return this.data.pop();
    }

    isEmpty() {
        return this.data.length === 0;
    }
}

// ================================================
// FUNCTION CEK KURUNG
// ================================================
function cekKurungSeimbang(ekspresi) {
    const stack = new Stack();

    for (let char of ekspresi) {
        if (char === '(') {
            stack.push(char);
        } else if (char === ')') {
            if (stack.isEmpty()) {
                return false; // tidak ada pasangan
            }
            stack.pop();
        }
    }

    // kalau masih ada isi → tidak seimbang
    return stack.isEmpty();
}

// ================================================
// PENGUJIAN
// ================================================
const testCases = [
    '(2 + 3) * (4 - 1)',
    '((a + b)',
    ')(',
    '((()))',
    '(a + (b * c))'
];

console.log('=== HASIL PENGUJIAN ===');
testCases.forEach(t => {
    console.log(`${t} → Seimbang: ${cekKurungSeimbang(t)}`);
});