function theBeatlesPlay(musicians,instruments){
   var music = [];
   for(let i=0; i < musicians.length; i++){
      music.push(musicians[i] + ' plays ' +instruments[i]);
   }
   return music;
}


function johnLennonFacts(arr){
   var lenarr = arr.length;
    while(lenarr > 0){
        lenarr--;
        arr[lenarr] += '!!!';
    }
    return arr;
}

function iLoveTheBeatles(no){
   var newarr =[];
   do{
       newarr.push('I love the Beatles!');
       no++;
   } while(no < 15);
   return newarr;
}
