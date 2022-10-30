function isInRange(num, start, end) {
	if (num > start && num < end) {
        return true
    } else {
        return false
    }
}

isInRange(2, 1, 10)
console.log(isInRange(2, 1, 10));