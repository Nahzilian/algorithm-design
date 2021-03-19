class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class SingleLinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    // Insert first node
    insertFirst (data) {
        this.head = new Node(data, this.head);
        this.size ++;
    }

    // Insert last node
    insertLast (data) {
        let node = new Node(data);
        let current;
        // If empty, make head
        if (!this.head) this.head = node;
        else {
            current = this.head;
            while(current.next) {
                current = current.next;
            }

            current.next = node;
        }
        this.size ++;
    }
    // Insert by index
    insertAt (data, index) {
        // Index out of range
        if(index > 0 && index > this.size) return;
        
        if (index === 0) {
            this.insertFirst(data);
            return;
        }

        const node = new Node(data);
        let current, previous;
        current = this.head;
        let count = 0;
        while (count < index){
            previous = current; // Node before the index
            count ++;
            current = current.next; // Node after the index
        }
        node.next = current;
        
        previous.next = node;
        this.size++;
    }
    // Get at index
    getAt (index) {
        if(index > 0 && index > this.size) return;
        let current = this.head;
        let count = 0;
        while(current) {
            if(count === index) {
                console.log(current.data);
            }
            count ++;
            current = current.next;
        }

        return;
    }
    getSize() {
        console.log(this.size);
    }
    // Remomve at index
    removeAt (index) {
        if (index > this.size) return;

        let current = this.head;
        let previous;
        let count = 0;

        if (index === 0) this.head = current.next;
        else {
            while (count < index) {
                console.log('here')
                count++;
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }
        this.size --;
    }
    // Clear list

    // Print list data
    printListData () {
        let current = this.head;
        
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const linkedList = new SingleLinkedList();
linkedList.insertFirst(100);
linkedList.insertFirst(500);
linkedList.insertFirst(300);
linkedList.insertLast(499);
//linkedList.insertAt(33,2);
// linkedList.getAt(3);
// linkedList.getAt(0);
linkedList.getSize();
linkedList.removeAt(2);
linkedList.printListData();