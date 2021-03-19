function theBeatlesPlay(ar1, ar2){
  var ar3 = new Array();
  for(let i=0 ;i < ar1.length; i++){
    ar3.push(`${ar1[i]} plays ${ar2[i]}`);
  }
  return ar3;
}

function johnLennonFacts(ar){
  let i = 0;
  while(i<ar.length){
    ar[i] = ar[i]+"!!!";
    i++;
  }
  return ar;
}

function iLoveTheBeatles(n){
  var ar = new Array();
  do{
    ar.push("I love the Beatles!");
    n++;
  }while(n < 15);
  return ar;
}
