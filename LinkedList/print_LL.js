const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
}

// Complete the function below

function print(head) {
    var curr = head;
    while(curr !== null ){
        console.log(curr.data)
        curr = curr.next;
    }
}
