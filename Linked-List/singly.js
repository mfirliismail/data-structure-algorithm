// ======================
// singlyLinked List

//=======================


class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    //insert first node

    insertFirst(data) {
        this.head = new Node(data, this.head)
        this.size++
    }

    insertLast(data) {
            let current = this.head
            let nodeBaru = new Node(data)

            if (this.head == null) {
                this.head = nodeBaru
            } else {
                while (current.next != null) {
                    current = current.next
                }

                current.next = nodeBaru
            }
            this.size++
        }
        //insert position
    insertAt(data, position) {
        if (position > this.size) {
            return
        }
        let current = this.head
        let count = 0

        while (count != position - 1) {
            current = current.next
            count++
        }
        let nodeBaru = new Node(data)
        nodeBaru.next = current.next
        current.next = nodeBaru

        this.size++
    }
    getAt(position) {
        let current = this.head
        let count = 0

        while (count != position) {
            current = current.next
            count++
        }
        if (current == null) {
            return
        }
        let data = current.data
        console.log(data)

    }
    removeFirst() {
        let current = this.head
        this.head = current.next
        current = null
        this.size--
    }

    removeLast() {
            let current = this.head
            if (this.size == 1) {
                this.head = null
                this.size--
                    return

            }
            while (current.next.next != null) {
                current = current.next
            }
            current.next = null
            this.size--
        }
        //print all
    printList() {
        let current = this.head

        while (current) {
            console.log(current.data)
            current = current.next
        }
    }

    removeAt(position) {
        let current = this.head
        let count = 0
        while (count != position - 1) {
            current = current.next
            count++
        }
        current.next = current.next.next
        this.size--
    }

}

const ll = new LinkedList()

ll.insertLast(1)
ll.insertLast(2)
ll.insertLast(3)
ll.removeFirst()
ll.removeLast()
ll.removeLast()
ll.insertLast(3)
ll.insertLast(2)
ll.insertLast(1)
ll.removeAt(1)

console.log(ll)
ll.printList()