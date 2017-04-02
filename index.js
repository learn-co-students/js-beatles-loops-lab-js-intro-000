function theBeatlesPlay(array_musician, array_instrument){
var array = [];
for(let i = 0; i<array_musician.length;i++){
  var string = `${array_musician[i]} plays ${array_instrument[i]}`;
  array.push(string);
}
return array;  
}

function johnLennonFacts(array_facts){
  var i = 0;
  var new_facts_array = [];
  while(i<array_facts.length){
    new_facts_array.push(array_facts[i]+"!!!");
    i++;
  }
  return new_facts_array;  
}

function iLoveTheBeatles(number){
  var array = [];
  do{
    array.push("I love the Beatles!");
    number++;
  }while(number<15);  
  return array;
}