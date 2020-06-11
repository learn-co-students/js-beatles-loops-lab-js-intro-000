// add solution here
function theBeatlesPlay(musicians,instruments){
  var arr=[];
  let newstr;
  for (let i=0;i<musicians.length;i++){
    newstr=`${musicians[i]} plays ${instruments[i]}`
    arr.push(newstr)
  }
  return arr
}
function johnLennonFacts(facts){
  let newstr;
  let arr=[]
  let i=0;
  while (i<facts.length){
    newstr=facts[i]+"!!!";
    arr.push(newstr);
    i++;
  }
  return arr
}


function iLoveTheBeatles(number){
  var arr=[];
  do {
    arr.push("I love the Beatles!");
    number+=1;
  } while (number<15)
  return arr
}
