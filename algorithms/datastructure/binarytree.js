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

    remove (data) {
        this.root = this.removeNode(this.root, data);
    }

    removeNode(node, key) {
        if (node === null) return;
        else if (key < node.data) {
            node.left = this.removeNode(node.left, key);
            return node;
        }else if(key > node.data) { 
            node.right = this.removeNode(node.right, key); 
            return node; 
        } else { 
            if(node.left === null && node.right === null) 
            { 
                node = null; 
                return node; 
            } 
            if(node.left === null) 
            { 
                node = node.right; 
                return node; 
            } 
              
            else if(node.right === null) 
            { 
                node = node.left; 
                return node; 
            } 
            var aux = this.findMinNode(node.right); 
            node.data = aux.data; 
            node.right = this.removeNode(node.right, aux.data); 
            return node; 
        } 
    }

    inorder(node) 
    { 
        if(node !== null) 
        { 
            this.inorder(node.left); 
            console.log(node.data); 
            this.inorder(node.right); 
        } 
    } 

    getRootNode () {
        return this.root
    }

    find (value) {
        this.findNode(value, this.root);
    }

    findNode (value, node) {
        if (node === null) return false;
        if (value === node.data) return true;
        if (value < node.data) return this.findNode(value,node.left);
        else if (value > node.data) return this.findNode(value,node.right);
    }

}

var bt = new BinaryTree();
bt.insert(15); 
bt.insert(25); 
bt.insert(10); 
bt.insert(7); 
bt.insert(22); 
bt.insert(17); 
bt.insert(13); 
bt.insert(5); 
bt.insert(9); 
bt.insert(27); 
console.log(bt.find(5));
console.log(bt.find(1000));

