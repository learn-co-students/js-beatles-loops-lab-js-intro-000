function theBeatlesPlay (musicians, instruments) { 
var array = []; 
for(var i = 0; i < musicians.length; i++) { 

array.push(musicians[i] + " plays " + instruments[i]);
} 


return array ; 

} 


function johnLennonFacts (facts) { 
 var i = [0]
 var johnFacts = []
while(facts[i]) {

johnFacts.push(facts[i] + "!!!") 
i++

}
return johnFacts; 

} 



function iLoveTheBeatles(number) 
{ 

var numbers = []; 

do { 
numbers.push("I love the Beatles!")
 number++
 
 }
while (number < 15) 

return numbers; 

} 