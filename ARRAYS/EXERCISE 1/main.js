let months = ["January", "February", "Marj", "April", "Mei"]

months.splice(2, 1, 'March');
console.log(months);

months.splice(4, 1, 'May');
console.log(months);

let newMonths = ["June", "July", "August", "September"]

let allMonths = months.concat(newMonths);
console.log(allMonths);

let count = allMonths.push("October", "Noember", "December");


// EXERCISE 2


function changeArray(num1, num2, num3) {

    if (num1 > num2) {
        totalMonths.pop()
        return
    }
    else if (num2 > num3 && num2 < 10) {
        totalMonths.shift()
        return
    }
    else if (num2 > num1 || num2 > num3) {
        totalMonths.push("October")
        return 
    }
    else {
        document.write("</br> Bad luck!")
    }
}

changeArray(9, 7, 5)
changeArray(4, 7, 5)
changeArray(5, 24, 8)
changeArray(7, 7, 7)
document.write(totalMonths)



