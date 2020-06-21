/***************************************************************************************************************************************

Class : ArrayImplementation

Comments : Arrays are essentially objects in JS, where data is stored as value and integer value keys are used as reference for Arrays.
Modification logs:
Log 1 : (20 June 2020) --> Increased readibility and updated comments.

****************************************************************************************************************************************
Developer           Date            Version         Description
****************************************************************************************************************************************
Deepanshu        14 June 2020        V1.1           Implementation of Array DataStructure in Java Script.


***************************************************************************************************************************************/

class ArrayImplementation{
    //Initializing the constructor with length and data(JS object for storing the array values)
    constructor(){
        this.length = 0;
        this.data = {};
    }

    /*
    Method Type : Main Method
    Description : This method is used to fetch data from a specified index in Array.
    Time Complexity : O(1)
    Space Complexity : O(1)
    @param : index (From where the element needs to be fetched.)
    */
    get(index){
        return this.data[index];
    }

    /*
    Method Type : Main Method
    Description : This method is used to push an element at the end of an array.
    Time Complexity : O(1)
    Space Complexity : O(1)
    @param : elementToBePushed (Element to be pushed at the end)
    */
    push(elementToBePushed){
       this.length++;
       this.data[this.length-1] = elementToBePushed;
    }

    /*
    Method Type : Main Method
    Description : This method is used to delete last element of an array.
    Time Complexity : O(1)
    Space Complexity : O(1)
    @param : N/A
    */
    pop(){
        var elementDeleted = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return elementDeleted;
    }

    /*
    Method Type : Main Method
    Description : This method is used to delete an  element at specific index in array.
    Time Complexity : O(n)
    Space Complexity : O(1)
    @param : index (At which element needs to be deleted)
    */
    delete(index){
        var elementDeleted = this.data[index];
        this._shiftElementsLeft(index);
        delete this.data[this.length-1];
        this.length--;
    }

    /*
    Method Type : Main Method
    Description : This method is used to insert an  element at a specific index in array.
    Time Complexity :   O(n)
    Space Complexity :  O(1)
    @param : index (Where element needs to be inserted)
    @param : element (Value to be inserted)
    */
    insert(index, element){
        this._shiftElementsRight(index);
        this.data[index] = element;
        this.length++;
    }

    /*
    Method Type : Internal Utility Method
    Description : This method is used to shift elements one index right and delete the last element copy. Mainly used for inserting an element in an array at a specific location.
    Time Complexity : O(n)
    Space Complexity :  O(1)
    @param : index
    */
    _shiftElementsRight(index){
        for(var i = (this.length-1); i >=index ; i--){
            this.data[i+1] = this.data[i];
        }
    }

    /*
    Method Type : Internal Utility Method
    Description : This method is used to shift elements one index left and delete the last element copy. Mainly used for deleting an element in an array at a specific location.
    Time Complexity : O(n)
    Space Complexity :  O(1)
    @param : index
    */
    _shiftElementsLeft(index){
        for(var i = index; i<this.length ; i++){
            this.data[i+1] = this.data[i];
        }
    }
}

