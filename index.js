function johnLennonFacts(array) {
	var newarr = []
    var i
    for (i = 0; i < array.length; ++i) {
        newarr.push(array[i] + "!!!");
    }
    return newarr
}

function theBeatlesPlay(musicians, instruments) {
    var newarr = []
    var i
    for (i = 0; i < musicians.length; ++i) {
        newarr.push(musicians[i] + " plays " + instruments[i])
    }
    return newarr
}

function iLoveTheBeatles(n) {
    var newarr = []
    var i = 0
    do {
        newarr.push("I love the Beatles!");
        i++
    } while (n < 15 && i <= n);

    return newarr
}
