// addition
// no argument no return
 var a = 10;
 var b = 20;
 function add()
 {
    var first_value = 10,second_value =20;
     var addition = first_value + second_value;
     console.log("Addition is ", addition); 
 }
 add();

// subtraction
// no argument with return
 var x = 50;
 var y = 30;
 function sub()
 {
    var firstNumber = 50 , secNumber = 30;
    var minus = (firstNumber - secNumber);
    console.log("Subtraction is ", minus);
    return minus;
 }
 sub();

// Multiplication
//  With Argument no return
var c = 5, d = 3;
 function mul(a,b)
 {
    var a = 5 , b = 3;
   var multiplication = a * b;
    console.log("Multiplication is ", multiplication);
 }
 mul();

//  division
// with argument with return
 var first_val = 100;
 var sec_val = 25;
 var result =  div( first_val, sec_val);
 function div ( x , y)
 {
     var division = x / y;
     return division;
 }
console.log("Division is", result);