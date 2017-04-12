var musicians = ['john','ringo','paul','george']
var instruments = ['guitar','keyboard','bass','drums']

  function theBeatlesPlay (musicians, instruments){
var blank = []
var i = 0
    for (i=0; i<=musicians.length; i++)
    blank[i] = musicians[i] + " plays " + instruments[i]
    return blank; }