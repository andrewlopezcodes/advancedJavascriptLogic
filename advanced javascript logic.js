// Question 1: Clean the room function: given an input of 
// [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that 
// organizes these into individual array that is ordered. For example 
// answer(ArrayFromAbove) should return: 
// [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 
// Bonus: Make it so it organizes strings differently from number types. 
// // i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]




let arrayOrganizer = (array) => {
  let flattenArray = array.flat();
  let sortedArray = flattenArray.sort(); 
  let firstStagedArray =[];
  let secondStagedArray = [];
  let thirdStagedArray = [];
  let doneArray = [];
  let singleIndexedArray = 0;

  initialSorter = () => {
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

  nextSorter = () => {
    for (let index = 0; index < secondStagedArray.length; index++) {
      (secondStagedArray[index].length > 1 ) ?
        thirdStagedArray.push(secondStagedArray[index]) :
        thirdStagedArray.push(secondStagedArray[index][0])
      }
    flattenArray = thirdStagedArray.flat(Infinity);
    sortedArray = flattenArray.sort((a, b)=> a-b);
    secondStagedArray = [];
  };

  finalSorter = () => {
    for (let index = 0; index < secondStagedArray.length; index++) {
      (secondStagedArray[index].length > 1 ) ? 
        doneArray.push(secondStagedArray[index]) :
        doneArray.push(secondStagedArray[index][0]);
    }
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
    stripedStringHolder = stringHolder.substring(4, stringHolder.length -1);
    stringHolder = stripedStringHolder.split(',');
    let indexZeroHex = Number.parseInt(stringHolder[0], 0);
    let indexOneHex = Number.parseInt(stringHolder[1], 0);
    let indexTwoHex = Number.parseInt(stringHolder[2], 0);
    let hexRed = indexZeroHex.toString(16);
    let hexGreen = indexOneHex.toString(16);
    let hexBlue = indexTwoHex.toString(16);
    finished = "#" + hexRed + hexGreen + hexBlue;
    stringHolder = [];
  };

  function makeRGB(stringHolder){
    let miniRGB = [];
    stringHolder.shift();
    let indexZero = stringHolder[0];
    let indexOne = stringHolder[1];
    let indexTwo = stringHolder[2];
    let indexThree = stringHolder[3];
    let indexFour = stringHolder[4];
    let indexFive = stringHolder[5];
    miniRGB[0] = 'RGB(' + ((alphaNumericObj[indexZero] * 16) + (alphaNumericObj[indexOne] * 1));
    miniRGB[1] = ((alphaNumericObj[indexTwo] * 16) + (alphaNumericObj[indexThree] * 1));
    miniRGB[2] = ((alphaNumericObj[indexFour] * 16) + (alphaNumericObj[indexFive] * 1)) + ')';
    finished = miniRGB.toString();
    stringHolder=[];
  }

  function makeArray (data){
    if(data[0] === '#'){
      for (let index = 0; index < data.length; index++) {
      let slicedLetter = data.slice(index, index+1);
      stringHolder.push(slicedLetter);
    }
    findPath(stringHolder)
    } else {stringHolder = data, findPath(stringHolder)}
  }
makeArray(data);

return finished
};

//this code was written by @andrewlopezcodes 02/27/2024











