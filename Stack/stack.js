let stack = []

stack.push(1)
console.log(stack)

stack.push(2)
console.log(stack)

stack.push(3)
console.log(stack)

stack.push(4)
console.log(stack)

stack.push(5)
console.log(stack)


stack.pop()
console.log(stack)

stack.pop()
console.log(stack)

stack.pop()
console.log(stack)

stack.pop()
console.log(stack)

stack.pop()
console.log(stack)


function reverse(str) {

    let string = str.toLowerCase()
    let stack = []

    for (let i = 0; i < string.length; i++) {
        stack.push(string[i])
    }
    let reverse = ""

    while (stack.length > 0) {
        reverse += stack.pop()
    }

    console.log(reverse)

}

reverse("FIRLI")

function reverseNumber(angka) {

    let stack = []
    for (let i = 0; i < angka.length; i++) {
        stack.push(angka[i])
    }

    let reverseAngka = []
    while (stack.length > 0) {
        reverseAngka.push(stack.pop())
    }
    return reverseAngka
}

console.log(reverseNumber([4, 1, 67, 12, 199, 200]))


// stack on linked list


class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

class SinglyLinked {
    constructor() {
        this.head = null
        this.size = 0
    }

    push(data) {
        if (this.head == null) {
            this.head = new Node(data, this.head)
            this.size++
                return
        }
        let current = this.head
        while (current.next != null) {
            current = current.next
        }
        let nodeBaru = new Node(data)
        current.next = nodeBaru
        this.size++
    }

    peekAll() {
        let current = this.head
        let data = []
        while (current != null) {
            data.push(current.data)
            current = current.next
        }
        console.log(data)
    }
    reverse() {
        let current = this.head
        let data = []
        while (current != null) {
            data.push(current.data)
            current = current.next
        }
        let reverse = []
        for (let i = data.length - 1; i >= 0; i--) {
            reverse.push(data[i])
        }
        console.log(reverse)

    }
    pop() {
        let current = this.head

        while (current.next.next != null) {
            current = current.next
        }
        current.next = null
        this.size--
    }
}

let ll = new SinglyLinked()

ll.push(1)
ll.push(2)
ll.push(3)
ll.push(4)
ll.pop()


console.log(ll)
console.log(`===`)
ll.peekAll()
ll.reverse()