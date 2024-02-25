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
// 1) create a function that has 2 parameters an array and a total 
// 2) declare a variable to flatten an array using flat() method
// 3) declare a variable sorting the flattened array into sequential order ex: [1, 2, 3,...]
// 4) declare a variable that is an empty array to hold the shorten array from the for loop 
// 5) create a for loop that iterates over the sorted array
// 5a) 1st for loop >> create a conditional that compares the sortedArray current index to the to the total number
//                     and if the sortedArray current index value is in the filtered array
//                     and if sortedArray current index is less than the total number.
// 5b) 1st for loop >> if the current sortedArray index satisfies the conditional push that number into filteredArray.
//                     if the current sortedArray index doesn't satisfy conditional console.log " number not needed" 
// 5c) 1st for loop >> assure the current sortedArray index is a number.
// 6) declare a variable to hold remainder.
// 7) declare a variable secondFilteredArray
// 7) 2nd for loop >> iterate over filteredArray, 
//                    if current filteredArray index is positive make the value of sortedRemainder the answer of subtract
//                    each filteredArray index from total else make the value of sortedRemainder the answer of add 
//                    each filteredArray index to total
//                    
// 7b) 2nd for loop >> use indexOf() method to see if remainder has an index in filteredArray
//                     if indexOf() remainder has an index in filteredArray push sortedRemainder into secondFilteredArray

function useArrayToMakeTotal (array, total){
  let flattenArray = array.flat(Infinity);
  let sortedArray = flattenArray.sort((a, b)=> a-b);
  let filteredArray = [];
  let sortedRemainder = 0;
  let secondFilteredArray =[];
  console.log(filteredArray[-1])
  for (let index = 0; index < sortedArray.length; index++) {
    (Number.isInteger(sortedArray[index]) && sortedArray[index] < total 
      && filteredArray.indexOf(sortedArray[index]) === -1) ? 
        filteredArray.push(sortedArray[index]) : console.log("number not needed");
  }
  console.log("this is the filteredArray ", filteredArray);

  for (let index = 0; index < filteredArray.length; index++) {
    (filteredArray[index] >= 0 || filteredArray[index] === total) ? 
      sortedRemainder = total - filteredArray[index] : sortedRemainder = filteredArray[index] + total;    
    console.log("this is current sortedRemainder", sortedRemainder);
    (sortedArray.indexOf(sortedRemainder) > -1) ? 
      secondFilteredArray.push(sortedRemainder) : console.log("remainder not needed");
      console.log("this is the finished secondFilteredArray ", secondFilteredArray);
  }
};