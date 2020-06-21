/***************************************************************************************************************************************

Class : HashTablesImplementation

Comments : Hash Tables is implemented with help of multi-dimensional arrays.
Modification logs: 
Log : 1 (20 June 2020) --> Increased readibility and updated complexities

****************************************************************************************************************************************
Developer           Date            Version         Description
****************************************************************************************************************************************
Deepanshu        17 June 2020        V1.1           Implementation of HashTable DataStructure in Java Script.


***************************************************************************************************************************************/
class HashTablesImplementation{
    //Creating an array of size defined by the user
    constructor(size){
        this.data = new Array(size);
    }

    /*
    Method Type : Internal Utility Method
    Description : This method is used to create a hash code which will be treated as address location.
    Time Complexity :   O(1)
    Space Complexity :  O(1)
    @param : key (for which hash code needs to be generated)
    */
    _hash(key){
        var hash = 0;
        for(var i = 0; i<key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    /*
    Method Type : Main Method
    Description : This method is used to create a new key-value pair in hash table.
    Time Complexity :   O(1)
    Space Complexity :  O(1)
    @param : key (Which is to be inserted)  
    @param : Value (corresponding to the key)
    */
    set(key, value){
        //Getting the address where the key will be stored
        var address = this._hash(key);
        if(!this.data[address]){
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
        return this.data[address];
    }

    /*
    Method Type : Main Method
    Description : This method is used to get a value corresponding to the key passed.
    Time Complexity :   O(1)
                        O(n) --> With collision
    Space Complexity :  O(1)
    @param : key (Value to be fetched)
    */
    get(key){
        var addressOfKey = this._hash(key);
        var keyBucket = this.data[addressOfKey];
        if(keyBucket){
            for(var i = 0; i<keyBucket.length; i++){
                if(keyBucket[i][0] === key){
                    return keyBucket[i][1];
                }
            }
        }
        return undefined;
    }

    /*
    Method Type : Main Method
    Description : This method is used to extract all keys from Hash Table
    Time Complexity : O(n)  
    Space Complexity :  O(n)
    @param : N/A
    */
    keys(){
        var keys = [];
        for(var i = 0; i<this.data.length; i++){
            if(this.data[i] != undefined){
                if(this.data[i].length>1){
                    for(var j = 0; j<this.data[i].length; j++){
                        keys.push(this.data[i][j][0])
                    }
                }else{
                    keys.push(this.data[i][0][0]);
                }
            }
        }
        return keys;
    }
}

// var hashTable = new HashTablesImplementation(50);
// hashTable.set('Deepanshu', 1);
// hashTable.set('Anurag', 2);
// hashTable.set('Ram', 3);
// var value = hashTable.get('Ram');
// console.log(value);
// var keys = hashTable.keys();
// console.log(keys);