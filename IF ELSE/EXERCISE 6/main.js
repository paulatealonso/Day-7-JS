function isLeapYear(year) {
    if (year % 400 === 0) {
        return true
    }
    if (year % 100 === 0) {
        return false
    }

    if (year % 4 === 0) {
        return true
    }
    else {
        return false
    }
}
isLeapYear()

function leapDay(month, year) {
    isLeapYear = year

    if (month == 1 || 3 || 5 || 7 || 8 || 10 || 12) {
        return 31, year
    }
    else if (month == 4 || 6 || 9 || 11) {
        return 30, year
    }
    else {
        return 28, year
    }
}

// console.log(leapDay(9, isLeapYear(2000)))