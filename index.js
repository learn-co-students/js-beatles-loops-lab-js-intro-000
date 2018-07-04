// add solution here
function theBeatlesPlay(musicians, instruments) {
    var hola = [];
    for(var i = 0; i < musicians.length; i++){
        hola.push(musicians[i] + " plays " + instruments[i]);
    }

    return hola;
}


function johnLennonFacts(facts) {
    var i = 0;

    while(i < facts.length){
        facts[i] += "!!!";
        i++;
    }

    return facts;
}

function iLoveTheBeatles(number) {
    var hola = [];
    do {
        hola.push("I love the Beatles!");
        number++;
    } while(number < 15);

    return hola;
}
