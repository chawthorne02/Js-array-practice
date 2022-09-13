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

function array(arr) {
    let i = 0

    for(let i = 0; i < arr.length; i++) {
        
    }
}



//2//

function array(arr) {
    const reversed1 = arr.slice().reverse();

    return reversed1
}

//3//

function array(arr) {
    return arr.filter(Boolean)
}

//4//




//5//

function array(arr) {
    let newArray = [new Set(arr)];

    return newArray
}


//6//

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
    return arr1.concat(arr2)
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
