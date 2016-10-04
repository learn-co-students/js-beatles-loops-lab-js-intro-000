function theBeatlesPlay(musicians, instruments){
    var len= musicians.length;
    var  muin=[];
    for(var i=0; i<len;i++){
      muin[i]= musicians[i]+  ' plays ' + instruments[i];

    }
    return muin;
}

function johnLennonFacts(array){

    var len=array.length;
    for(var i=0;i<len;i++){
      array[i]=array[i]+ '!!!';

    }
    return array;

}

function iLoveTheBeatles(n){
   var array=[];
   var k=0;
   do {
     array[k]='I love the Beatles!';

     k++;
   } while (n<15 && k<=n);
   return array;

}
