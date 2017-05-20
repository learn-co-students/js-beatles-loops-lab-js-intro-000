var theBeatlesPlay = (musicians, instruments) => {
    var strings = [];
    for(let i = 0; i < musicians.length; i++) {
        strings.push(`${musicians[i]} plays ${instruments[i]}`);
    }
    return strings;
};

var johnLennonFacts = facts => {
    var strings = [];
    var i = 0;
    while (facts.length != i) {
        strings.push(`${facts[i++]}!!!`);
    }
    return strings;
}

var iLoveTheBeatles = num => {
    var strings = [];
    do {
        strings.push('I love the Beatles!');
        num++;
    } while (num < 15);
    return strings;
}
