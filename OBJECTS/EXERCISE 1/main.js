//EXERCISE 1

const citizen1 = {
	name: "Paris",
	lastname: "OG",
	age: 22,
}

//EXERCISE 2

citizen1.city = ["Madrid"];
citizen1.age = 25;

console.log(citizen1);
console.log(citizen1.age);


//EXERCISE 3

function checkCitizenship (obj){
    if (obj.age >= 18) {
        obj.canVote = true
    }
    else{
        obj.canVote = false
    }
}

checkCitizenship(citizen1)