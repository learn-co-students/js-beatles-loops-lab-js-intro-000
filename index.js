// Associate musicians to their instruments
function theBeatlesPlay(musicians, instruments) {
    var array = [];
    for (var i = 0; i < musicians.length; i++) {
        array.push(`${musicians[i]} plays ${instruments[i]}`);
    }
    return array;
}

// Add "!!!" to the end of each string in an array
// It's a little ugly. I think that there is a cleaner way (some method!)
function johnLennonFacts(facts) {
    var count = facts.length;
    var index = 0;
    var temp_array = [];
    while (count > 0) {
        temp_array.push(facts[index] + "!!!");
        count--;
        index++;
    }
    facts = temp_array;
    return facts;
}

// Add to an array a string x number of times
function iLoveTheBeatles(number) {
    var array = [];
    do {
        array.push("I love the Beatles!");
        number++;
    } while (number < 15);
    return array;
}
