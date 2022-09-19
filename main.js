// Codewars practice problems

//1//

var number=function(array){
  
    let output = []
    
    for(let i = 0; i < array.length; i++) {
      output.push((i + 1) + ": " + array[i])
    }
    return output
  }

  //2//

  const arr = N => Array.from({length: N}, (_,index) => index)
//.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.
  
  //3//

  function flyBy(lamps, drone){
    if(drone.length > lamps.length) return 'o'.repeat(lamps.length)
    
    return 'o'.repeat(drone.length) + 'x'.repeat(lamps.length-drone.length)
  }
    
  //4//

  function getAverage(marks){
    return Math.floor(marks.reduce((c,a) => c+a ) / marks.length) 
    }

//5//

function array(arr) {
    return arr.reverse()
}



// JS-Array-Exercises

//1//
//answer during review;
function array(str, i) {
    const result = [];
    for(let j = 0; j < i; j++){
        result.push(str);
    }
    return result
}
    


//2//

function array(arr) {
    const reversed1 = arr.slice().reverse(); //slices entire array and reverses the elements within the array

    return reversed1
}

//3//

function array(arr) { 
    return arr.filter(Boolean) //filters out elements that are false in the array and brings back array with only  true values
}

//4//

function answer1(arr) {
    const result = {}; // makes an empty object
    for(let i = 0; i < arr.length; i++){ //for loop to pass through each value in nested array 
        result[arr[i][0]] = arr[i][1]; // result brings in [name, "charlie"......]
    }
    return result
}

//5//
//Could have used .includes or indexof()
function array(arr) {
    let newArray = [new Set(arr)];

    return newArray
}


//6//
// for loop uncessary. Could have used the not operator to compare the two arrays 
function equal(arr1, arr2) { 
    let i = 0

    for (let i = 0; i < arr1 && arr2; i++) {
        if(arr1 === arr2) {
            return true
        }
    else {
        return false
    }
    }
}

//BONUS//

function array(arr1, arr2) {
    return arr1.concat(arr2) //used .concat to merge arrays together 
}

///////

function array(arr, size) {
    const res = [];

    for(let i = 0; i < arr.length; i += size) {
        const portion = arr.slice(i, i + size);
        res.push(size);
    }
    return res
}
