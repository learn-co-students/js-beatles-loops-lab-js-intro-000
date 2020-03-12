// add solution here
function theBeatlesPlay(musicians, instruments){
 let list = [];
 for (let i = 0; i < musicians.length; i++ ) {
   list.push(`${musicians[i]} plays ${instruments[i]}`);
 };
 return list;
}

function johnLennonFacts(arr){
  let list = [];
  let i = 0;
  while (i < arr.length){
    list.push(`${arr[i]}!!!`);
     i += 1
  }
  return list;

}

function iLoveTheBeatles(num){
  let list = [];
  let i = -1;

   num < 15 ? num-- : num;

  function incr(num) {
     if (num > 15){
       return num
     } else {
       return i++;
     };
  }

  do {
    list.push("I love the Beatles!");
  } while (incr(num) < num);
 return list
}
