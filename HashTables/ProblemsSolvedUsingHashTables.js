/*Google Problem --> 1 
Given an Array of Integers, return the first recurring one. 
Example 1: [2, 5, 6, 2, 3, 9]  
    return 2
Example 2: [1, 2, 3, 4, 5]
    return undefined
*/

/* Solution */
function findRecurranceInArray(array){
    var values = {};
    for(var i = 0; i<array.length; i++){
        if(values[array[i]] != undefined){
            return array[i];
        }else{
            values[array[i]] = true;
        }
    }
    return undefined;
}

var valueReturned = findRecurranceInArray([1, 2, 3, 4, 5]);
console.log(valueReturned);

//  End  //