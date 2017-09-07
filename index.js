function theBeatlesPlay(musicians,instruments){
  var empArr = [];
  for(var i = 0;i < musicians.length; i++){
        let add = `${musicians[i]} plays ${instruments[i]}`;
       empArr.push(add);
  }
  return empArr;
}
// ====================================================>>
function johnLennonFacts(facts){
  var arraycount = 0;
  while(arraycount<facts.length){
    facts[arraycount] += '!!!';
    arraycount += 1;
  }
  return facts;
}

function iLoveTheBeatles(number) {
  var myArr = [];
  do {
    myArr.unshift('I love the Beatles!');
    number++
  }while(number<15)
return myArr;
}
