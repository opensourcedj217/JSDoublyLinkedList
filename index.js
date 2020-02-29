module.exports = class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            this.tail.next = newNode;
            newNode.prev = this.tail
            this.tail = newNode;
        }
        this.length++;
        return true;
    }
    pop(){
        if(!this.head) return null
        let current = this.tail;
        if(this.length==1){
            this.head = null;
            this.tail =null;
        }
        else{
            this.tail = current.prev
            this.tail.next = null;
            current.prev = null
        }
        this.length--;
        return current;
    }
    shift(){
        if(!this.head) return null
        let oldHead = this.head;
        if(this.length==1){
            this.head = null;
            this.tail =null;
        }
        else{
            this.head = oldHead.next;
            this.head.prev = null
            oldHead.next = null 
        }

        this.length--;
        return oldHead;  
    }
    unshift(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            newNode.next = this.head
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return true
    }
    get(index){
        if(index<0 || index>=this.length) return null;
        var count,current;
        if(index <= this.length/2){
             count = 0;
             current = this.head;
            while(count!=index){
                current = current.next;
                count++
            }
        }
        else{
            count = this.length-1;
            current = this.tail
            while(count!=index){
                current = current.prev 
                count--
            }
        }
        return current;

    }
    set(val,index){
        var nodeFound = this.get(index);
        if(nodeFound){
            nodeFound.val = val;
            return true;
        }
        return false;
    }
    insert(val,index){
        if(index<0 || index>this.length) return false;
        if(index == 0) return !!this.unshift(val)
        if(index == this.length) return !!this.push(val);
        var newNode = new Node(val)
        var prevNode = this.get(index-1);
        var nextNode = prevNode.next;
        prevNode.next = newNode;
        newNode.prev = prevNode;

        newNode.next = nextNode;
        nextNode.prev = newNode;
        this.length++
        return true;
    }
    remove(index){
        if(index<0 || index>=this.length) return null;
        if(index == 0) return this.shift()
        if(index == this.length-1) return this.pop();
        var removedNode = this.get(index);
        removedNode.prev.next = removedNode.next;
        removedNode.next.prev = removedNode.prev;
        removedNode.next = null;
        removedNode.prev = null;
        this.length--;
        return removedNode;
    }
    getList(){
      return this;
    }
}

class Node{
    constructor(val){
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}