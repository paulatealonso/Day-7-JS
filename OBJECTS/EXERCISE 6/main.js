//EXERCISE 6

function checkVoting(obj) {
    if (obj.canVote == true) {
        return true
    }
    else {
        checkCitizenship(obj)
        return false
    }
}
// console.log(checkVoting(citizen2));
// console.log(citizen2);


//EXERCISE 7

function showValues (obj) {
    return Object.values(obj)
    }
    // console.log(showValues(citizen1));

    
//EXERCISE 8

function deleteLastProp (obj) {
    if (Object.keys(obj) > 4){
        return obj.pop()
    }
    else {
        return false
    }
}

// console.log(deleteLastProp(citizen2));



//EXERCISE 9

function deleteLastProp(obj) {
    if (Objects.values) {
        deleteLastProp.Objects
    } else {
        return false
    }
}