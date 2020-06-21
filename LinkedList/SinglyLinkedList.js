/***************************************************************************************************************************************

Class : SinglyLinkedList

Comments : The Linked List is implemented with objects in JS, here an object is contained within another object.
Modification logs:

****************************************************************************************************************************************
Developer           Date            Version         Description
****************************************************************************************************************************************
Deepanshu        20 June 2020        V1.0           Implementation of Singly Linked List DataStructure in Java Script.


***************************************************************************************************************************************/
class SinglyLinkedList{
    //Constructor is used to initialize the Linked List with first element
    constructor(value){
            this.head = {
                value : value,
                next : null
            };
            this.tail = this.head;
            this.length = 1;
    }

    /*
    Method Type : Main Method
    Description : This method is used to insert an element at the last of linked list.
    Time Complexity :   O(1)
    Space Complexity :  O(1)
    @param : value (To be appended)
    */
    append(value){
        var newNode = new newNodeCreation(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    /*
    Method Type : Main Method
    Description : This method is used to insert element at first index of linked list
    Time Complexity :   O(1)
    Space Complexity :  O(1)
    @param : value (To be inserted at index 0)
    */
    prepend(value){
        var newNode = new newNodeCreation(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    /*
    Method Type : Main Method
    Description : This element is used to insert element at the desired index
    Time Complexity :   O(1) --> Best Case(If index is first or last.)
                        O(n) --> Worst Case(If index is not first or last.)
    Space Complexity :  O(1)
    @param : index (Where element is to be inserted.)
    @param : value (Value to be inserted)
    */
    insert(index, value){
        if(index === 0){
            this.prepend(value);
        }else if(index >= this.length){
            this.append(value);
        }else{
            var newNode = new newNodeCreation(value);
            var previousNode = this._traverseForward(index - 1); 
            newNode.next = previousNode.next;
            previousNode.next = newNode;
            this.length++;
        }
    }

    /*
    Method Type : Main Method
    Description : This method is used to delete an element at specified index
    Time Complexity :   O(n)
    Space Complexity :  O(1)
    @param : index (Where element needs to be deleted)
    */
    delete(index){
        var previousNode = this._traverseForward(index - 1); 
        var currentNode = previousNode.next;
        var nextNode = currentNode.next;
        previousNode.next = nextNode;
        this.length--;
    }

    /*
    Method Type : Main Method
    Description : This method is used to get all the elements of Linked list
    Time Complexity :   O(n)
    Space Complexity :  O(n)
    @param : N/A
    */
    getAll(){
        var elements = [];
        var currentElement = this.head;
        while(currentElement !== null){
            elements.push(currentElement.value);
            currentElement = currentElement.next;
        }
        return elements;
    }

    /*
    Method Type : Main Method
    Description : This method is used to get the element at specified index
    Time Complexity :   O(n)
    Space Complexity :  O(1)
    @param : index (From where the element is to be fetched)
    */
    get(index){
        return this._traverseForward(index).value;
    }

    /*
    Method Type : Main Method
    Description : This method is used to get the reverse of linked list.
    Time Complexity :   O(n)
    Space Complexity :  O(n)
    @param : N/A
    */
    reverse(){
        var listElements = this.getAll();
        var counter = 1;
        var reverseLinkedList;
        for(var i = listElements.length - 1; i>=0; i--){
            if(counter === 1){
                reverseLinkedList = new SinglyLinkedList(listElements[i]);
                counter++;
            }else{
                reverseLinkedList.append(listElements[i]);
            }
        }
        return reverseLinkedList;
    }

    /*
    Method Type : Utility Method
    Description : This is a utility method used to traverse linked list right
    Time Complexity :   O(n)
    Space Complexity :  O(1)
    @param : index (Upto where this method needs to traverse)
    */
    _traverseForward(index){
        var currentNode = this.head;
        for(var i = 1; i<=index; i++){
            currentNode = currentNode.next;
        }
        return currentNode;
    }
}

//This class is used to create new node - as this is recurring thus this class is created.
class newNodeCreation{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
