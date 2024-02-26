// Question 1: Clean the room function: given an input of 
// [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that 
// organizes these into individual array that is ordered. For example 
// answer(ArrayFromAbove) should return: 
// [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 
// Bonus: Make it so it organizes strings differently from number types. 
// // i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]




let arrayOrganizer = function(array){
  let firstStagedArray =[];
  let secondStagedArray = [];
  let thirdStagedArray = [];
  let doneArray = [];
  let flattenArray = array.flat();
  let sortedArray = flattenArray.sort(); 
  let singleIndexedArray = 0;

  function initialSorter(){
    for (let index = 0; index < sortedArray.length; index++) {
      if (!isNaN(sortedArray[index]) && sortedArray[index] === sortedArray[index + 1]) {
       firstStagedArray.push(sortedArray[index]);
       } else if(!isNaN(sortedArray[index])){
         singleIndexedArray = sortedArray[index];
         firstStagedArray.push(singleIndexedArray);
         secondStagedArray.push(firstStagedArray);
         firstStagedArray =[];
         thirdStagedArray = [];
        }
      }
  }

  function nextSorter(){
    for (let index = 0; index < secondStagedArray.length; index++) {
      if(secondStagedArray[index].length > 1 ){
        thirdStagedArray.push(secondStagedArray[index])
      }else {
        thirdStagedArray.push(secondStagedArray[index][0]);
      }
    };
    flattenArray = thirdStagedArray.flat(Infinity);
    sortedArray = flattenArray.sort((a, b)=> a-b);
    secondStagedArray = [];
  };

  function finalSorter(){
    for (let index = 0; index < secondStagedArray.length; index++) {
      if(secondStagedArray[index].length > 1 ){
        doneArray.push(secondStagedArray[index])
      }else {
        doneArray.push(secondStagedArray[index][0]);
      }
    };
  };
  
  initialSorter();
  nextSorter();
  initialSorter()
  finalSorter();
  return "this is the final answer", doneArray; 
 };


//  Question 2: Write a javascript function that takes an array of numbers and a target number. 
// The function should find two different numbers in the array that, when added together, give 
// the target number. For example: answer([1,2,3], 4)should return [1,3]
// ['a', 'b', 'd', 2, 4, '2', '3', 'four', -24, 6, 12, -6]


  function tryThis (array, total){
    let flattenArray = array.flat(Infinity);
    let sortedArray = flattenArray.sort((a, b)=> a-b);
    let filteredArray = [];
    let storedNumber = 0;
    let addedPair = [];
      
    for (let i = 0; i < sortedArray.length; i++) {
          (Number.isInteger(sortedArray[i])) ? 
              filteredArray.push(sortedArray[i]) : " ";
    }
      
    for (let k = 0; k < filteredArray.length; k++) {
      storedNumber = filteredArray[k];
      for (let n = 0; n < filteredArray.length; n++) {
        (storedNumber + filteredArray[n] === total
          && storedNumber !== filteredArray[n]
          && addedPair.indexOf(storedNumber) === -1) ? addedPair.push(storedNumber, filteredArray[n]): ' ';
        }    
    }
    return console.log(`Pairs that equal ${total} `), addedPair;
  }
 
  // Question 3: Write a function that converts HEX to RGB. Then Make that function auto-detect the 
  // formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.

// What do the numbers and letters in a hex code mean?
// Hex color codes start with a pound sign or hashtag (#) and are followed by six letters and/or numbers. 
// The first two letters/numbers refer to red, the next two refer to green, and the last two refer to blue. 
// The color values are defined in values between 00 and FF (instead of from 0 to 255 in RGB).

// Numbers are used when the value is 1-9. Letters are used when the value is higher than 9. For example:

// A=10

// B=11

// C=12

// D=13

// E=14

// F=15

// To get a hexadecimal color, follow these three steps:

// Multiply the first number by 16.

// Multiply the second number by 1.

// Add the two totals together. 


// 1) create makeArray function that converts data into an array
// 2) create a function that detects RGB vs HEX
// 3) declare hexHead variable equal to '#'
// 4) declare rgbHead variable equal to 'RGB('
// 5) declare rgbTail variable equal to ')'
// 6) declare stringHolder variable equal to an empty array
// 7) create findPath function that takes in stringHolder variable and asks a conditional to determine
//          if we're going to convert from hex to rgb or rgb to hex
// 7a)
// 2) if RGB convert to Hex
// 3) if Hex convert to RGB
//    call makeArray function with data as an argument
//    b. 
// 4) create a function that converts a string into an array 





function colorConverter (data){
  let hexHead = '#';
  let rgbHead = 'RGB(';
  let rgbTail = ')';
  let stringHolder = [];

  function makeArray (){
    for (let index = 0; index < data.length; index++) {
      let slicedLetter = data.slice(index, index+1);
      console.log(slicedLetter);
      stringHolder.push(slicedLetter);
      console.log(stringHolder);
    }
    return stringHolder
  }

  function findPath (stringHolder){
    (stringHolder[0] === '#') ? makeRGB(stringHolder) : makeHex(stringHolder);
  }

  function makeRGB(data){
    makeArray(data);

  };
  
};





















