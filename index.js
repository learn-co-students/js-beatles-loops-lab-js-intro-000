function theBeatlesPlay(musicians, instruments) {
    var output = [];
    for (let i = 0; i < musicians.length; i++) {
        output.push(`${musicians[i]} plays ${instruments[i]}`)
    };
    return output;
}

function johnLennonFacts(array) {
    var output = array.slice(0);
    var i = 0;
    while (i < output.length) {
        output[i] = output[i] + "!!!";
        i++;
    }
    return output;
}

function iLoveTheBeatles(number) {
    var output = [];
    do {
        output.push("I love the Beatles!");
        number++;
    } while (number < 15);
    return output
}
