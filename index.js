// add solution here

// The first time through the loop, it should create a string using the 
// first index of the musicians array and the first index of the instruments array:
// "John Lennon plays guitar".
// Add this string to the empty array you created.
// The loop should make the same sentence for every member of the musicians array.
// The function should return the array of
// new strings containing what instruments each musician plays.
//
// Notes
// 1) What does it mean by "The first time through the loop, it should create a string "???
// 2) why "new strings" in the line of what the function returns???
function theBeatlesPlay(arrMus, arrInstr) {
  var arr = [];
  for (let i=0; i<arrMus.length; i++) {
    if (i === 0) {
      var str;   // makes no sense!
    }
    str = `${arrMus[i]} plays ${arrInstr[i]}`;
    arr.push(str);
  }
  return arr;
}


// This function will accept one argument, an array of facts about John Lennon
// Use a while loop to loop over the facts array and add "!!!" to the end of every fact.
// Return an array of strings with exclamation points.
//
// Notes
// 1) Have to be destructive or not? (we prefer not to disturbe the current status)
function johnLennonFacts(arr) {
  var arrRet = [];
  var i = 0;
  
  while (i<arr.length) {
    arrRet.push(arr[i]+'!!!');
    i++;
  }
  
  return arrRet;
}

// accepts a number as a parameter.
// The function should create a variable that stores an empty array.
// do-while loop that adds "I love the Beatles!" to the empty array.
// The loop should then increment the number passed in as a parameter.
// The condition of the loop should check that the parameter number is less than 15.
// It should contain a number of strings that represents 
// the difference between the input number and 15.
// Return the array with the strings "I love the Beatles!".
function iLoveTheBeatles(num) {
  var arrRet = [];
  
  do {
    arrRet.push('I love the Beatles!');
    num++;
  } while (num<15);
  
  return arrRet;
}