// add solution here
let musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
let instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
let emptyarray=[]

function theBeatlesPlay(musicians,instruments){
    for (let i=0;i<musicians.length;i+=1){
        emptyarray.push(`${musicians[i]} plays ${instruments[i]}`);
    }
return emptyarray;
}

function johnLennonFacts(array){
    let newarray=[];
    for (let i=0;i<array.length;i++){
        newarray.push(`${array[i]}!!!`);
    }
    return newarray;
}

function iLoveTheBeatles(number){
    let brandnewarray=[];
    function numbercheck(number){
	if(number-1<15){
		return number;}
	else{
		number = 16;
    }}
    do{
        brandnewarray.push("I love the Beatles!")
        number=number+1;
        }while (numbercheck(number)<15);
return brandnewarray;
}
