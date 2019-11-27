// add solution here
function theBeatlesPlay(musicians,instruments){
  var sentences = [];
  for (let i = 0; i < musicians.length; i++){
    var string = `${musicians[i]} plays ${instruments[i]}`;
    sentences.push(string);
  }
  return sentences;
}

function johnLennonFacts(facts){
  let i = 0;
  while (i < facts.length){
    facts[i] += "!!!";
    i += 1;
  }
  return facts;
}

function iLoveTheBeatles(num){
  var output = [];
  do{
    output.push("I love the Beatles!");
    num += 1;
  } while (num < 15);
  return output;
}
