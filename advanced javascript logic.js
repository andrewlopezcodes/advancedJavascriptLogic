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
 


