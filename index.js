// alert(
//     "Hello Welcome to My Page"
// )
// alert("Error! PLease enter a valid password")
// alert("Welcome to JS Land... \n Happy Coding"
// )
// alert("Welcome to JS Land...")
// alert("Happy Coding \n ")
// alert(
//     "Hello...I can run JS through my web browser's console"
// )
// "chap#2 Assignments start"

// Question#1
// var userName = "";

// var myNAme = "Full Name";

// var title = "Hello Word";
// alert(title)

// Question#2-4
// var name = "jhon doe";
// alert(name)

// var age = "15 years old";
// alert(age)

// var work = "Certified Mobile Application Development";
// alert(work)

// Question#5
// var food = "PIZZA\nPIZZ\nPIZ\nPI\nP";
// alert(food)

// Question#6
// var email = "abc@gmail.com";
// alert(`my email adress  is ${email}`)

// Question#7
//  var book = "A Smarter way to learn JavaScript";
//  alert(`I am trying to learn javascript from the Book ${book}`)

// Question#8
// document.write("Yeah I can write HTML content through javascript")

// Question#9
// var design = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”"
// alert(design)


// CHAP#3
  
// Question#2
// var visitorCount = 14
// alert(`You have visited this site ${visitorCount} times`)

// Question#3
// var birthYear = 2005
// document.write(`my birth year is ${birthYear} /nData type of my decleared variable is number`)

// Question#4
// var visitorName = prompt("enter your name")
// var productTitle =  "T-shirt(s)"
// var quantity = prompt("quantity you want to buy")

// document.write(`${visitorName} order ${quantity} ${productTitle} on XYZ clothing store`)


//  // 1. Declare 3 variables in one statement
//  let variable1, variable2, variable3;

//  // 2. Declare 5 legal & 5 illegal variable names
//  // Legal variable names
//  let myVar, $myVar, _myVar, myVar1, camelCaseVar;

//  // Illegal variable namessx
//  // let 1stVar; // starts with a number
//  // let my-Var; // contains a hyphen
//  // let my Var; // contains a space
//  // let var!; // contains an exclamation mark
//  // let new; // reserved keyword

//  document.write("<p>Variable names can only contain letters, numbers, underscores, and dollar signs. For example $my_1stVariable.</p>");
//  document.write("<p>Variables must begin with a letter, underscore, or dollar sign. For example $name, _name, or name.</p>");
//  document.write("<p>Variable names are case-sensitive.</p>");
//  document.write("<p>Variable names should not be JavaScript reserved keywords.</p>");

// chap 5

// q1

// sum
// var firstNum = 3
// var secNum = 5
// var sum = firstNum + secNum;
// document.write(`sum of ${firstNum} and ${secNum} is ${sum} `)

// subtraction
// var firstNum = 3
// var secNum = 5
// var sum = firstNum - secNum;
// document.write(`sum of ${firstNum} and ${secNum} is ${sum} `)

// multiplication

// var firstNum = 3
// var secNum = 5
// var sum = firstNum * secNum;
// document.write(`sum of ${firstNum} and ${secNum} is ${sum} `)

// division

// var firstNum = 3
// var secNum = 5
// var sum = firstNum / secNum;
// document.write(`sum of ${firstNum} and ${secNum} is ${sum} `)

// moduluis

// var firstNum = 3
// var secNum = 5
// var sum = firstNum % secNum;
// document.write(`sum of ${firstNum} and ${secNum} is ${sum} `)

var num = 
document.write(`value after variable decleare is ${num} <br>` );

// section c
var num = 5
document.write(`Initial value  is ${num}<br>` );
 
num++;
document.write(`Value after incriment is ${num++}<br>`)

num + 7;
document.write(`Value after addition is ${num += 6}<br>`)

num--;
document.write(`Value after decrement is ${num--}<br>`)

var reminder = num % 3
document.write(`The reminder is ${reminder}<br>`)

// document.write(`<h4>Question 04</h4> `)
// var ticketPrice = 600
// var buyTicket = prompt("Quantity of ticket")
// var totalPrice = ticketPrice*buyTicket
// document.write(`Total cost to buy ${buyTicket} Ticket to a movies is ${totalPrice}PKR <br>`)

document.write(`<h4>Question 6 </h4>`)
var celcius = 25 
var celciusIntoF = (celcius*9/5)+32
document.write(`${celcius}C is ${celciusIntoF}F<br>`)
var frenheit = 70 
var frenheitIntoC = (frenheit-32)*5/9
document.write(`${frenheit}F is ${frenheitIntoC}F`)



// document.write(`<h4>Question 7</h4>`)
// var priceOfItem1 = 650
// var quantityOfItem1 = prompt("Quantity of Item 1")
// var priceOfItem2 = 100
// var quantityOfItem2 = prompt("Quantity of Item 2")
// var shippingCharges = 100
// var totalCostOfItem1 =priceOfItem1*quantityOfItem1
// var totalCostOfItem2 = priceOfItem2*quantityOfItem2
// var totalCost = totalCostOfItem1+totalCostOfItem2+shippingCharges
// document.write(`Total cost of your order is ${totalCost}`)

// document.write(`<h4>Question 8</h4>`)
// document.write(`<h2>Marksheet</h2>`)
// var totalMArks = prompt("Enter Total MArks")
// var obtainedMarks = prompt("Your MArks")
// var percentage = (obtainedMarks/totalMArks)*100
// document.write(`Total Marks : ${totalMArks} <br> Obtained Marks : ${obtainedMarks} <br> Precentage : ${percentage}`)


// document.write(`<h4>Question 9</h4>`)
// var saudiRiyal = prompt("Saudi Riyal")
// var oneSaudiInPKr = 28
// var convertSrIntoPkr = saudiRiyal*oneSaudiInPKr
// var dollar = prompt("Dollar")
// var oneDollarInPkr = 104.80
// var convertDollarIntoPkr = dollar*oneDollarInPkr
// var totalCurrency = convertSrIntoPkr + convertDollarIntoPkr
// document.write(`Total Currency in PKR is ${totalCurrency}`)


// document.write(`<h4>Question 10</h4>`)
// var randomNum = (5+5)*10/2
// document.write(`Final Result is ${randomNum}`)


// document.write(`<h4>Question 11</h4>`)
// document.write(`<h2>Age Calculator</h2>`)

// var currentYear = new Date().getFullYear();
// document.write(`Current Year : ${currentYear}<br>`)
// var birthDate = prompt("Enter your birth year")
// document.write(`Birth Year : ${birthDate}<br>`)

// var userAge = currentYear-birthDate
// document.write(`Your Age is :${userAge}`)

// document.write(`<h4>Question 12</h4>`);
// document.write(`<h1>The Geometrizer</h1>`);

// var radiusOfCircle = 20;
// document.write(`Radis of circle is : ${radiusOfCircle}<br>`);
// var circumferenceOfCircle = 2*3.14*radiusOfCircle
// document.write(`Circumference of circle is :${circumferenceOfCircle}<br>`);
// var areaOfCircle = 3.14*(radiusOfCircle*radiusOfCircle);
// document.write(`Area of circle is : ${areaOfCircle}<br>`);

// document.write(`<h4>Question 13</h4>`);
// document.write(`<h1>Life Time Supply Calculator</h1>`);

// var favouriteSnack = prompt("Enter your Favourite Snack Name");
// document.write(`Favourite Snackc:${favouriteSnack}<br>`);

// var currentAge = prompt("Enter your Age");
// document.write(`Current Age :${currentAge}<br>`);

// var estimateAge = prompt("Enter Your Estimste Age");
// document.write(`Estimate Age :${estimateAge}<br>`);

// var amountOfSnackPerDayIntake = prompt("ENter Your Amount Of Snack Intake ");
// document.write(`Amount Of Snack Per Day :${amountOfSnackPerDayIntake}<br>`);

// var remainingYear = estimateAge-currentAge;

// var totalSnackRequired =remainingYear*365*amountOfSnackPerDayIntake;

// document.write(`You will need ${totalSnackRequired} ${favouriteSnack} to last you untill the ripe old age of  ${estimateAge}`);




var requiredTable = prompt("Enter Table Name");
var table = +requiredTable || 5;
document.write(`<h1>Multiplication Table Of ${table}</h1>`);

for (var i =1; i <=10; i++) {
    document.write(`${table} x ${i} = ${table*i} <br>`)
}

