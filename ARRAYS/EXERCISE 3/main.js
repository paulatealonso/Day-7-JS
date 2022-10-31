let week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] 


//EXERCISE 3.1

//function wednesday (arr) {
    //week.indexOf("Wednesday")
   //if (arr[2].lenght > arr.indexOf("Wednesday")) {
    //week.reverse()

//}
//}
//wednesday(week)
//document.write(week);



//EXERCISE 3.2

// let compareArrays = week.sort(function (a, b) { return b.length - a.length; })[0];
// console.log(compareArrays);



// EXERCISE B

//function compare(arr) {
    //if (arr[0].length < arr[1].length){
        //return (week.slice(0,3))
   // }
//}
//compare(week)



//EXERCISE 3.3

function compareArrays(arr) {
    if (arr.includes("Sunday") === true) {
        return "That's nice!"
    }
    else {
        week.push("Sunday")
        return "Oh no"
    }
}
compareArrays(week)


