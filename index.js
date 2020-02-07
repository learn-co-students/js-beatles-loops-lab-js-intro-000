// add solution here

function theBeatlesPlay(musicians,instruments) {
    let newArray = []
    for (let i = 0; i < musicians.length; i++) {
        newArray.push(`${musicians[i]} plays ${instruments[i]}`)
    }
    return newArray
}

function johnLennonFacts(jfacts) {
    let i = 0
    let newArray = []
    while (i < jfacts.length) {
        newArray.push(jfacts[i++] + "!!!")
    }
    return newArray
}

function iLoveTheBeatles(num) {
    let  i = 0
    let newArray = []
    if (num < 15){
        do {
        newArray.push("I love the Beatles!")
        i++
        } while ( i <= num);
        return newArray
    }
    newArray.push("I love the Beatles!")
    return newArray
}