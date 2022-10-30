let lado1 = prompt("Introduzca el primer lado")
let lado2 = prompt("Introduzca el segundo lado")
let lado3 = prompt("Introduzca el tercer lado")

if(lado1===lado2 && lado2===lado3) {
    document.write(' El triangulo es equilatero ');
    equilatero=equilatero+1;
    return "El triangulo es equilatero"
} else if(lado1===lado2 || lado2===lado3 || lado1===lado3) {
    document.write(' El triangulo es isosceles ');
    isosceles=isosceles+1;
    return "El triangulo es isosceles"
} else (lado1!=lado2 && lado2!=lado3); { 
    document.write(' El triangulo es escaleno ');
    escaleno=escaleno+1;
    return "El triangulo es escaleno"
}




//function triangles(num1, num2, num3) {
    //if (num1 === num2 === num3) {
        //document.write("The triangle is equilateral")
        //return "The triangle is equilateral"
    //}
    //else if (num1 === num2 || num1 === num3 || num2 === num3) {
        //document.write("The triangle is isosceles")
        //return "The triangle is isosceles"
    //}
    //else {
       //document.write("The triangle is scalene")
       //return "The triangle is scalene"
    //}
//}