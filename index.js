// add solution here
function theBeatlesPlay(musicians, instruments) {
    var output = []
    for (let i = 0; i < musicians.length; i++) {
        const element = `${musicians[i]} plays ${instruments[i]}`
        output.push(element)   
    }
    return output
}
function johnLennonFacts(facts) {
    var output = []
    for (let i = 0; i < facts.length; i++) {
        const element = `${facts[i]}!!!`;
        output.push(element) 
    }
        return output;
}

function iLoveTheBeatles(number) {
      const arr = [];

        do {
            arr.push('I love the Beatles!');
            number++;
        } while (number < 15);

        return arr;
}