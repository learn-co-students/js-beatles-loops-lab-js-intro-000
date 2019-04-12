// add solution here
const theBeatlesPlay = (musicians, instruments) =>{
  let ret = [];
  for(let i = 0; i < musicians.length; i++){
    ret.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return ret;
};

const johnLennonFacts = facts =>{
  let index = 0;
  let ret = [];
  while(index < facts.length){
    ret[index] = facts[index]+'!!!';
    index++;
  }
  return ret;
};

const iLoveTheBeatles = num =>{
  let ret = [];
  do{
    ret.push('I love the Beatles!');

  }while(num++<14);
  return ret;
}
