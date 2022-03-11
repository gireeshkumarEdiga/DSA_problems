
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function insertNodeAtTail(head, data) {
    let newNode = new LinkedListNode(data);
    if(!head){
        head=newNode;
        return head;
    }
    let current=head;
    while(current.next!=null){
        current = current.next;
    }
    current.next = newNode;
    return head
}

//link : https://oj.masaischool.com/contest/2647/problem/02