function theBeatlesPlay(musicians, instruments){

 var array=[]
   for (let i = 0; i < musicians.length; i++) {

// you need to add in the space for plays phsyically.
   array.push(musicians[i] +  " plays " + instruments[i]);
 }
   return array
}


function johnLennonFacts(johnLennonFacts) {
    var facts = []; //declearing an array when using loops.
    var i = 0;
    while (i < johnLennonFacts.length) {
     facts.push(johnLennonFacts[i] + "!!!"); //['He was the last Beatle to learn to drive!!!', "He was never a vegetarian!!!",...]
      i++;
    };
    return facts;
}


function iLoveTheBeatles(n){
  var emptyArray = [];// create  an empty array

  do { // create a do- while loop
    emptyArray.push('I love the Beatles!'); //pass I love Beatles into empty array
 n++; //n stand for number so we increment by NUMBER PASSED IN
} while (n < 15); // check that tha parameter number is < then 15

 return emptyArray;
}
