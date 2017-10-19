function theBeatlesPlay(array1, array2){
let songs = [];
for(let i=0;i<array1.length;i++){
let s = array1[i] + ' plays ' + array2[i]; 
songs[i] = s;
}
  return songs;
}
function johnLennonFacts(array){
for(let i=0;i<array.length;i++){
let s = array[i];
let exclamation = "!!!"
array[i] = s.concat(exclamation);
}
return array;
}
function iLoveTheBeatles(number){
let array = [];
do{
array.push('I love the Beatles!');
++number;
} while(number<15)
return array;
}
