function evalOperation(num1, num2, operation) {

    if (operation == "add") {
        return num1 + num2
    }
    if (operation == "subtract") {
        return num1 - num2
    }
    if (operation == "multiply") {
        return num1 * num2
    }
    if (operation == "divide") {
        return num1 / num2
    }
    if (operation == "modulus") {
        return num1 % num2
    }
}
// console.log(evalOperation(15, 90, "add"));