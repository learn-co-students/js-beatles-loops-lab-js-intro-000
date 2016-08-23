//declare function that takes two arrays as arguments
function theBeatlesPlay(musicians, instruments){
    //create empty array for sentences and counter variable
    var instrumentSentences = [];
    var i;

    //loops over musicians array and adds sentences to instrumentSentences array
    for (i = 0; i < musicians.length; i++){
      instrumentSentences.push(musicians[i] + " plays " + instruments[i]);
    }
    return instrumentSentences;
}

//declare function that accepts array of facts and writes them to new array with exclamation points
function johnLennonFacts(facts){
    var i = 0;
    var exclamationFacts = [];
    while (i < facts.length){
      exclamationFacts.push(facts[i] + "!!!");
      i = i + 1;
    }
  return exclamationFacts;
}

//declare function to write string to array * difference of num and 15
function iLoveTheBeatles(num){
    var arr = [];
      do{
      arr.push("I love the Beatles!")
      num = num + 1;
    } while(num < 15);

    return arr;
}
