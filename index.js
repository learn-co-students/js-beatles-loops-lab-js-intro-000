// add solution here
function theBeatlesPlay(musicians,instruments){
  var arr=[];
  for(let i=0;i<musicians.length;i++){
    arr[i]=`${musicians[i]} plays ${instruments[i]}`
  }
  return(arr);
}
function johnLennonFacts(facts){
  var narr=[];
  let i=0;
  while(i < facts.length){
    narr[i]=`${facts[i]}!!!`;
    i++;
  }
  return(narr);
}
function iLoveTheBeatles(number){
  var arr=[];
  do{
    arr.push("I love the Beatles!");
    number++;
  }
  while(number<15)
  return(arr);
  }
