function theBeatlesPlay(arrayM,arrayI){
  var newarray = [];
  for (let i = 0;i<arrayM.length; i++){
    var musician = arrayM.slice(i,i+1);
    var instrument = arrayI.slice(i,i+1);
    newarray.push(`${musician} plays ${instrument}`);
  }
  return newarray;
}

function johnLennonFacts(array){
  var newarray = [];
  var i = 0;
  while (i < array.length){
    newarray.push(array.slice(i,i+1) + "!!!");
    i = i+1;
  }
  return newarray;
}

function iLoveTheBeatles(n){
  var newarray = []
  do{
    newarray.push("I love the Beatles!");
    n++;
  } while (n<15);
  return newarray
}
