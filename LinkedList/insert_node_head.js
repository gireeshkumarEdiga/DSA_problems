
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function insertNodeAtHead(head, data) {
    let newNode = new LinkedListNode(data);
    if(!head){
        head = newNode;
        return head;
    }else{
        newNode.next = head;
        head = newNode; 
    }
    return head;
}



//link : https://oj.masaischool.com/contest/2647/problem/01