// Question 1: Clean the room function: given an input of 
// [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that 
// organizes these into individual array that is ordered. For example 
// answer(ArrayFromAbove) should return: 
// [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 
// Bonus: Make it so it organizes strings differently from number types. 
// // i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

// to do list
// 1) second for loop > if index length is larger than 1 push into finalNumber Array
// 2) second for loop > if index length is 1 push index[0] into finalNumberArray
// 3) second for loop > return finalNumberArray
// 4) third for loop > loop over finalNumberArray
// 5) third for loop > if index length is !isNaN = true


let arrayOrganizer = function(array){
  let numberArray =[];
  let letterArray =[];
  let secondStagedArray = [];
  let finalNumberArray = [];
  let doneArray = [];
  let flattenArray = array.flat();
  let sortedArray = flattenArray.sort(); 
  let lastMatched = 0;
  console.log('this is the sortedArray', sortedArray);

  function finalSorter(){
    for (let index = 0; index < secondStagedArray.length; index++) {
      if(secondStagedArray[index].length > 1 ){
        doneArray.push(secondStagedArray[index])
      }else {
        doneArray.push(secondStagedArray[index][0]);
        console.log("this is doneArray ", doneArray);
      }
    };
    return 'this is the final answer ', doneArray; 
  };

  function nextSorter(){
    for (let index = 0; index < secondStagedArray.length; index++) {
      if(secondStagedArray[index].length > 1 ){
        finalNumberArray.push(secondStagedArray[index])
      }else {
        finalNumberArray.push(secondStagedArray[index][0]);
        console.log("this is finalNumberArray ", finalNumberArray.sort());
      }
    }
    flattenArray = finalNumberArray.flat(Infinity);
    sortedArray = flattenArray.sort((a, b)=> a-b);
    secondStagedArray = [];
  }

  function initialSorter(){
    for (let index = 0; index < sortedArray.length; index++) {
      if (!isNaN(sortedArray[index]) && sortedArray[index] === sortedArray[index + 1]) {
       console.log("is the value at the current index a number?", !isNaN(sortedArray[index]));
       numberArray.push(sortedArray[index]);
       console.log("this is the value at the current index", sortedArray[index]);
       console.log("this is the numberArray " , numberArray);
       } else if(!isNaN(sortedArray[index])){
         lastMatched = sortedArray[index];
         numberArray.push(lastMatched);
         secondStagedArray.push(numberArray);
         numberArray =[];
         finalNumberArray = [];
         console.log('this is the secondStagedArray', secondStagedArray);
         console.log('this is the numberArray #2', numberArray);
        }
      }
  }
  
  initialSorter();
  nextSorter();
  initialSorter()
  finalSorter();
 };