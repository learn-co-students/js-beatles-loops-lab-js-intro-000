function theBeatlesPlay(musicians, instruments){

  var beatles = new Array()
  for (let i = 0;i<musicians.length; i++)

      beatles.push(`${musicians[i]} plays ${instruments[i]}`)

        return beatles;

}





function johnLennonFacts(facts){

  var excitingFacts = new Array();
    let i = 0
    while (i < facts.length){

      excitingFacts.push(`${facts[i]}!!!`)
      i++;
    }
      return excitingFacts;
  }



  function iLoveTheBeatles(number){
    var beatleLove = new Array();
    let i = number

    do{
      beatleLove.push(`I love the Beatles!`)
      i++
    }

    while(i < 15 )



    return beatleLove;



  }
