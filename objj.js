    //t[i]+' ')
}
}
// More Practice
// 1.Write a function called removeNumbersLargerThan that takes two parameters, a number and an object. It then removes all properties with values larger than the specified number.
function removeNumbersLargerThan(number, object) {
    for (var key in object) {
      if (typeof object[key] === 'number' && object[key] > number) {
        delete object[key];
      }
    }
}
// 2.Write a function called removeAllEvenValues that takes an object as a parameter. It then removes all properties with values that are an even number.
function removeAllEven(object) {
    for(var key in object){
        if(typeof object[key]==='number' && object[key]%2===0){
            delete object[key]
        }
       
    }return object}

// 3.Write a function called removePropertiesNotEqualTo10 that takes an object as a parameter. It then removes all properties that are not equal to 10.
function removePropertiesNotEqualTo10(object) {
        var obj2={}
        for(var key in object){
          if(typeof object[key]==='number' && object[key]===10){
              obj2[key]=object[key]
          }
    
        }return obj2
    }
// 4.Write a function called removeStringsLongerThan that takes two parameters, a number and an object. It then removes all strings with lengths larger than the number parameter.

function removeStringsLongerThan(object,number){
    for(var key in object){
         if( object[key].length>number ){
            delete object[key]
}
}return object}

// 5.Write a function called removeAllNumbers that takes an object as a parameter. It then removes all properties in the object that have number values.
function removeAllNumbers(object) {
    for(var key in object){
        if(typeof object[key]==='number'){
            delete object[key]
        }}
        return object
}
// 6.Write a function called removeArrays that takes an object as a parameter. It then removes all properties that have array values.
function removeArrays(object) {
    for(var key in object){
        if(typeof object[key]!=='number'&&typeof object[key]!=='string'){
            delete object[key]
        }
    }
    return object
}
// 7.Write a function called getFirstElementOfProperty that takes an object and a key and returns the first element in the array at the given key. If the array is empty it should return undefined. If the property at the given key is not an array it should return undefined. If there is no property at the key it should return undefined.






