// Question 1: Clean the room function: given an input of 
// [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that 
// organizes these into individual array that is ordered. For example 
// answer(ArrayFromAbove) should return: 
// [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 
// Bonus: Make it so it organizes strings differently from number types. 
// // i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]


let arrayOrganizer = function(array){
  let numberArray =[];
  let letterArray =[];
  let secondStagedArray = [];
  let finalNumberArray = [];
  let flattenArray = array.flat();
  let sortedArray = flattenArray.sort(); 
  let lastMatched = 0;
   console.log('this is the sortedArray', sortedArray);
  // !isNaN(sortedArray[index]) && 
  // sortedArray[index] !== sortedArray[index + 1] && 
  

  for (let index = 0; index < sortedArray.length; index++) {
       if (!isNaN(sortedArray[index]) && sortedArray[index] === sortedArray[index + 1]) {
        console.log("is the value at the current index a number?", !isNaN(sortedArray[index]));
        numberArray.push(sortedArray[index]);
        indexScore = index;
        console.log("this is the value at the current index", sortedArray[index]);
        console.log("this is the numberArray " , numberArray);
        } else if(!isNaN(sortedArray[index])){
          lastMatched = sortedArray[index];
          numberArray.push(lastMatched);
          secondStagedArray.push(numberArray);
          numberArray =[];
          console.log('this is the secondStagedArray', secondStagedArray);
          console.log('this is the numberArray #2', numberArray);
          console.log('this is finalNumberArray', finalNumberArray);
        }
        
  }

  for (let index = 0; index < secondStagedArray.length; index++) {
    if(secondStagedArray[index].length === 1 ){
      console.log('happy');
  };
  }
};