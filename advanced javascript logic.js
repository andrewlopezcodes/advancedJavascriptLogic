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


// 1) create makeArray function that converts stringHolder into an array
// 2) create a function that detects RGB vs HEX
// 3) declare hexHead variable equal to '#'
// 4) declare rgbHead variable equal to 'RGB('
// 5) declare rgbTail variable equal to ')'
// 6) declare stringHolder variable equal to an empty array
// 7) create function makeArray

// 7) create findPath function that takes in stringHolder variable and asks a conditional to determine
//          if we're going to convert from hex to rgb or rgb to hex
// 7a)      if RGB convert to Hex
//              meake a function called makeHex
//              
// 2) 
// 3)       if Hex convert to RGB
//              make a function called makdRGB
//  create a if else statement that sorts the stringHolder array by lengths of 3, 6, 8
    if length of stringHolder is equal to 3 or 5
      create a function named hex3ToRGB that says if the value of any index in the stringHolder array is a letter 
      or number, search the alphaNumericObj's keys and multiply the value by 16.
        declare variable prevIndex as a holder for the previous index
        conditional ?> is the length of stringHolder 3 or 5 ? call grow3 with stringHolder as the parameter : call remove2 with stringHolder as   
        the parameter

    if length of stringHolder is equal to 6 or 8
      create a function named hex6ToRGB
    if length of stringHolder is equal to 8
      create a function named hex8ToRGB
//              

//    call makeArray function with stringHolder as an argument
//    b. 
// 4) create a function that converts a string into an array 



// RGB(224, 105, 16) is E06910 

function colorConverter (data){
  let stringHolder = [];
  let finished;
  let alphaNumericObj = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    'a': 10,
    'A': 10,
    'b': 11,
    'B': 11,
    'c': 12,
    'C': 12,
    'd': 13,
    'D': 13,
    'e': 14,
    'E': 14,
    'f': 15,
    'F': 15,
  }

  function findPath (stringHolder){
    (stringHolder[0] === '#') ? makeRGB(stringHolder) : makeHex(stringHolder);
  }

  function makeHex(stringHolder){
    let stripedStringHolder;
    console.log(`this is the stringHolder for makHex before`, stringHolder);
    stripedStringHolder = stringHolder.substring(4, stringHolder.length -1);
    console.log(`this is stringHolder for makeHex after`, stripedStringHolder);
    console.log(stripedStringHolder.split(","));
    stringHolder = stripedStringHolder.split(',');
    let indexZeroHex = Number.parseInt(stringHolder[0], 0);
    let indexOneHex = Number.parseInt(stringHolder[1], 0);
    let indexTwoHex = Number.parseInt(stringHolder[2], 0);
    let hexRed = indexZeroHex.toString(16);
    let hexGreen = indexOneHex.toString(16);
    let hexBlue = indexTwoHex.toString(16);
    console.log(stringHolder[0]);
    console.log(indexZeroHex);
    finished = "#"+ hexRed + hexGreen + hexBlue;
    stringHolder = [];
  };

  function makeRGB(stringHolder){
    let miniRGB = [];
    stringHolder.shift();
    console.log(`this is stringholder after the .shfit()`, stringHolder);
    let indexZero = stringHolder[0];
    let indexOne = stringHolder[1];
    let indexTwo = stringHolder[2];
    let indexThree = stringHolder[3];
    let indexFour = stringHolder[4];
    let indexFive = stringHolder[5];
    console.log(`next step`);
    miniRGB[0] = 'RGB(' + ((alphaNumericObj[indexZero] * 16) + (alphaNumericObj[indexOne] * 1));
    miniRGB[1] = ((alphaNumericObj[indexTwo] * 16) + (alphaNumericObj[indexThree] * 1));
    miniRGB[2] = ((alphaNumericObj[indexFour] * 16) + (alphaNumericObj[indexFive] * 1)) + ')';
    finished = miniRGB.toString();
    console.log(`this is the RGB version of the hexadecimal color ${data} `, finished);
    stringHolder=[];
  }

  function makeArray (data){
    if(data[0] === '#'){
      for (let index = 0; index < data.length; index++) {
      let slicedLetter = data.slice(index, index+1);
      console.log(slicedLetter);
      stringHolder.push(slicedLetter);
      console.log(`this is stringHolder`, stringHolder);
    }
    findPath(stringHolder)
    } else {stringHolder = data, findPath(stringHolder)}
  }
makeArray(data);

return finished
};












