class Node {
    constructor (data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor () {
        this.root = null;
    }

    insertNode (node, newNode) {
        if (node.data > newNode.data) {
            if (node.left === null) node.left = newNode;
            else this.insertNode(node.left, newNode);
        } else {
            if (node.right === null) node.right = newNode;
            else this.insertNode(node.right, newNode);
        }
    }

    insert(data) 
    { 
        var newNode = new Node(data); 
        if(this.root === null) this.root = newNode; 
        else this.insertNode(this.root, newNode); 
    } 

    getRootNode () {
        console.log(this.root);
    }
}

var bt = new BinaryTree();
bt.insert(2);
bt.insert(12);
bt.insert(312);
bt.insert(1);
bt.insert(10);
bt.insert(80);
bt.insert(69);
bt.insert(32);
bt.insert(77);
bt.insert(88);

bt.getRootNode();

