 
    //                                                            // CHAPTER 1 : ALERTS

    //     // Q1
    //                                 alert("Welcome in my Website");


    //     // Q2
    //                                alert("Error! Please enter a valid password.");


    //     // Q3
    //                                alert("Welcome to JS Land...\nHappy Coding!");


    //     // Q4
    //                                alert("Welcome to JS Land...");
    //                                alert("Happy Coding!");


    //     // Q5
    //                                alert("Hello... I can run JS through my web browser's console");


    //     // Q6
    //                                alert("Welcome to JS Land...");
    //                               function showAlert() {
    //                               alert("Happy Coding!");
    //                               }   

    //     // Q7
    //                                alert("This alert is from the body section");
       
    //     // Q8
    //                                alert("This alert is from the HEAD section");

    //     //
    //     // CHAPTER 2 : VARIABLES FOR STRINGS
    //     //
   

    // // Q1
    //                            var username;


    // // Q2
    //                            var myName = "Your Full Name";


    // // Q3
    //                            var message = "Hello World";
    //                            alert('message');


    // // Q4
    //                            var studentName = "Ali Khan";
    //                            var studentAge = "20 years old";
    //                            var studentCourse = "Web Development";


    //                            alert('studentName');
    //                            alert('studentAge');
    //                            alert('studentCourse');


    // // Q5
    //                            var pizza = "PIZZA\nPIZZ\nPIZ\nPI\nP";
    //                            alert('pizza');


    // // Q6
    //                            var email = "example@example.com";
    //                            alert("My email address is " + email);






    // //
    // // CHAPTER 3 : VARIABLES FOR NUMBERS
    // //


    // // Q1
    //                            var age = 20;
    //                            alert("I am " + age + " years old");


    // // Q2
    //                            var visitCount = 5;
    //                            alert("You have visited this site " + visitCount + " times");


    // // Q3
    //                              var birthYear = 2004;
    //                              document.write("My birth year is " + birthYear + "<br>");
    //                              document.write("Data type of my declared variable is number <br><br>");


    // // Q4
    //                              var visitorName = "John Doe";
    //                              var productTitle = "T-shirt";
    //                              var quantity = 5;
    //                              document.write(visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store <br><br>");






    // //
    // // CHAPTER 4 : VARIABLE NAMES (LEGAL & ILLEGAL)
    // //


    // // Q1
    //                                   var name1, name2, name3;


    // // Q2 (Legal)
    //                                   var userName;
    //                                   var _name;
    //                                   var $price;
    //                                   var totalMarks;
    //                                   var first_name;


    // // Q2 (Illegal - commented)


    // // var 1name;
    // // var full name;
    // // var alert;
    // // var my-name;


    // // Q3
    // document.write("<h3>Rules for naming JS variables</h3>");
    // document.write("Variable names can only contain letters, numbers, $ and _.<br>");
    // document.write("Variables must begin with a letter, $ or _.<br>");
    // document.write("Variable names are case sensitive.<br>");
    // document.write("Variable names should not be JS keywords.<br><br>");






    // //
    // // CHAPTER 5 : MATH EXPRESSIONS
    // //


    // // Q1
    // var num1 = 5;
    // var num2 = 3;
    // document.write("Sum of " + num1 + " and " + num2 + " is " + (num1 + num2) + "<br>");


    // // Q2
    // document.write("Subtraction: " + (num1 - num2) + "<br>");
    // document.write("Multiplication: " + (num1 * num2) + "<br>");
    // document.write("Division: " + (num1 / num2) + "<br>");
    // document.write("Modulus: " + (num1 % num2) + "<br><br>");


    // // Q3
    // var number;
    // document.write("Value after declaration is: " + number + "<br>");
    // number = 5;
    // document.write("Initial value: " + number + "<br>");
    // number++;
    // document.write("After increment: " + number + "<br>");
    // number += 7;
    // document.write("After addition: " + number + "<br>");
    // number--;
    // document.write("After decrement: " + number + "<br>");
    // document.write("Remainder is: " + (number % 3) + "<br><br>");


    // // Q4
    // var ticketPrice = 600;
    // document.write("Total cost of 5 tickets is " + (ticketPrice * 5) + " PKR<br><br>");


    // // Q5
    // document.write("<h3>Table of 4</h3>");
    // for (var i = 1; i <= 10; i++) {
    //     document.write("4 x " + i + " = " + (4 * i) + "<br>");
    // }






    // //
    // // CHAPTER 6-9 : MATH EXPRESSIONS
    // //


    // // Q1
    // var a = 10;
    // document.write("<br>The value of a is: " + a + "<br>");
    // document.write("The value of ++a is: " + (++a) + "<br>");
    // document.write("Now a is: " + a + "<br>");
    // document.write("The value of a++ is: " + (a++) + "<br>");
    // document.write("Now a is: " + a + "<br><br>");


    // // Q2
    // var b = 2, c = 1;
    // var result = --b - --c + ++c + c--;
    // document.write("Result is: " + result + "<br><br>");


    // // Q3
    // var user = prompt("Enter your name");
    // alert("Welcome " + user);


    // // Q4
    // var table = prompt("Enter table number", 5);
    // document.write("<h3>Table of " + table + "</h3>");
    // for (var j = 1; j <= 10; j++) {
    //     document.write(table + " x " + j + " = " + (table * j) + "<br>");
    // }


    // // Q5
    // var sub1 = +prompt("Enter Subject 1 marks");
    // var sub2 = +prompt("Enter Subject 2 marks");
    // var sub3 = +prompt("Enter Subject 3 marks");


    // var total = 300;
    // var obtained = sub1 + sub2 + sub3;
    // var percentage = (obtained / total) * 100;


    // document.write("<br>Total Marks: " + total);
    // document.write("<br>Obtained Marks: " + obtained);
    // document.write("<br>Percentage: " + percentage + "%");






   // ============================================
// ALL CHAPTERS (9–16) IN ONE FILE
// ALL CODE IN COMMENTS (UNCOMMENT TO RUN)
// ============================================



// ============================================
// CHAPTER 9-11 : USER INPUT & CONDITIONAL STATEMENT
// ============================================


// Q1
// var city = prompt("Enter your city");
// if (city === "Karachi") {
//     alert("Welcome to city of lights");
// }


// Q2
// var gender = prompt("Enter your gender");
// if (gender === "male") {
//     alert("Good Morning Sir");
// } else if (gender === "female") {
//     alert("Good Morning Ma’am");
// }


// Q3
// var color = prompt("Enter signal color");
// if (color === "red") {
//     alert("Must Stop");
// } else if (color === "yellow") {
//     alert("Ready to move");
// } else if (color === "green") {
//     alert("Move now");
// }


// Q4
// var fuel = prompt("Enter remaining fuel");
// if (fuel < 0.25) {
//     alert("Please refill the fuel in your car");
// }


// Q5
// var a = 4;
// if (++a === 5){
//     alert("given condition for variable a is true");
// }

// var b = 82;
// if (b++ === 83){
//     alert("given condition for variable b is true");
// }

// var c = 12;
// if (c++ === 13){
//     alert("condition 1 is true");
// }
// if (c === 13){
//     alert("condition 2 is true");
// }
// if (++c < 14){
//     alert("condition 3 is true");
// }
// if(c === 14){
//     alert("condition 4 is true");
// }


// Q6
// var m1 = +prompt("Enter marks 1");
// var m2 = +prompt("Enter marks 2");
// var m3 = +prompt("Enter marks 3");
// var total = +prompt("Enter total marks");

// var obtained = m1 + m2 + m3;
// var percent = (obtained / total) * 100;

// document.write("Total: " + total + "<br>");
// document.write("Obtained: " + obtained + "<br>");
// document.write("Percentage: " + percent + "%<br>");


// Q7
// var secret = 7;
// var guess = +prompt("Guess number");
// if (guess === secret) {
//     alert("Bingo! Correct answer");
// } else if (guess + 1 === secret) {
//     alert("Close enough");
// }


// Q8
// var num = +prompt("Enter number");
// if (num % 3 === 0) {
//     alert("Divisible by 3");
// }


// Q9
// var num = +prompt("Enter number");
// if (num % 2 === 0) {
//     alert("Even");
// } else {
//     alert("Odd");
// }


// Q10
// var T = +prompt("Enter temperature");
// if (T > 40) {
//     alert("Too hot");
// } else if (T > 30) {
//     alert("Normal");
// } else if (T > 20) {
//     alert("Cool");
// } else {
//     alert("Very Cool");
// }


// Q11
// var n1 = +prompt("First number");
// var n2 = +prompt("Second number");
// var op = prompt("Enter operation");

// if (op === "+") alert(n1 + n2);
// else if (op === "-") alert(n1 - n2);
// else if (op === "*") alert(n1 * n2);
// else if (op === "/") alert(n1 / n2);
// else if (op === "%") alert(n1 % n2);




// ============================================
// CHAPTER 12-13 : IF ELSE & CONDITIONS
// ============================================


// Q1
// var ch = prompt("Enter character");
// var code = ch.charCodeAt(0);

// if (code >= 48 && code <= 57) alert("Number");
// else if (code >= 65 && code <= 90) alert("Uppercase");
// else if (code >= 97 && code <= 122) alert("Lowercase");


// Q2
// var n1 = +prompt("Enter first number");
// var n2 = +prompt("Enter second number");

// if (n1 > n2) alert("First is larger");
// else if (n2 > n1) alert("Second is larger");
// else alert("Equal");


// Q3
// var num = +prompt("Enter number");
// if (num > 0) alert("Positive");
// else if (num < 0) alert("Negative");
// else alert("Zero");


// Q4
// var ch = prompt("Enter vowel");
// if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
//     alert(true);
// } else {
//     alert(false);
// }


// Q5
// var pass = "12345";
// var user = prompt("Enter password");

// if (!user) alert("Enter password");
// else if (user === pass) alert("Correct");
// else alert("Wrong");


// Q6
// var greeting;
// var hour = 13;

// if (hour < 18) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }


// Q7
// var time = +prompt("Enter time");

// if (time < 1200) alert("Morning");
// else if (time < 1700) alert("Afternoon");
// else if (time < 2100) alert("Evening");
// else alert("Night");




// 
// CHAPTER 14-16 : ARRAYS
// 


// Q1
// var students = [];

// Q2
// var studentsObj = new Array();

// Q3
// var fruits = ["Apple", "Banana", "Mango"];

// Q4
// var numbers = [1, 2, 3];

// Q5
// var bool = [true, false];

// Q6
// var mixed = ["Ali", 25, true];


// Q7
// var edu = ["SSC", "HSC", "BCS", "BS", "MS", "PhD"];
// for (var i = 0; i < edu.length; i++) {
//     document.write(edu[i] + "<br>");
// }


// Q8
// var names = ["Ali", "Sara", "John"];
// var scores = [400, 350, 450];
// var total = 500;

// for (var i = 0; i < names.length; i++) {
//     var percent = (scores[i] / total) * 100;
//     document.write(names[i] + ": " + percent + "%<br>");
// }


// Q9 (Colors)
// var colors = ["Red", "Green", "Blue"];
// document.write(colors);


// Q10 Sort
// var scores = [320, 230, 480, 120];
// scores.sort();
// document.write(scores);


// Q11 Cities
// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta"];
// var selected = cities.slice(0,3);
// document.write(selected);


// Q12 Join
// var arr = ["This", "is", "my", "cat"];
// document.write(arr.join(" "));


// Q13 FIFO
// var fifo = [];
// fifo.push("A");
// fifo.push("B");
// fifo.push("C");
// document.write(fifo.shift());


// Q14 LIFO
// var lifo = [];
// lifo.push("A");
// lifo.push("B");
// lifo.push("C");
// document.write(lifo.pop());


// Q15 Dropdown
// var phones = ["Apple", "Samsung", "Nokia"];
// document.write("<select>");
// for (var i = 0; i < phones.length; i++) {
//     document.write("<option>" + phones[i] + "</option>");
// }
// document.write("</select>");
 

