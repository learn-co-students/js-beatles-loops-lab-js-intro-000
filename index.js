// add solution here
function theBeatlesPlay (array1, array2){var array3 = [];
for (let i = 0; i < 4; i++) {array3.push(`${array1[i]} plays ${array2[i]}`)}

return array3

}
function johnLennonFacts(array){var array3 = [];
let countdown = array.length;

while (countdown > 0) {array3.unshift(`${array[--countdown]}!!!`)}

return array3
}
function iLoveTheBeatles(num) {var array1 = []; var counter = num;
function incrementalVariable(){return ++counter}

do {array1.push("I love the Beatles!")} while (incrementalVariable() < 15);

return array1
}
