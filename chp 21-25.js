    //
    // CHAPTER 21-25 : STRING METHODS
    //

    // Q1
    var firstName = prompt("Enter your first name");
    var lastName = prompt("Enter your last name");
    var fullName = firstName + " " + lastName;
    alert("Hello " + fullName);


    // Q2
    var favMobile = prompt("Enter your favorite mobile phone model");
    var length = favMobile.length;
    alert("My favorite phone is: " + favMobile + "\nLength of string: " + length);


    // Q3
    var word = "Pakistani";
    var index = word.indexOf("n");
    alert("String: " + word + "\nIndex of 'n': " + index);


    // Q4
    var word = "Hello World";
    var lastIndex = word.lastIndexOf("l");
    alert("String: " + word + "\nLast index of 'l': " + lastIndex);


    // Q5
    var word = "Pakistani";
    var char = word.charAt(3);
    alert("String: " + word + "\nCharacter at index 3: " + char);


    // Q6
    var firstName = prompt("Enter first name");
    var lastName = prompt("Enter last name");
    var fullName = firstName.concat(" ", lastName);
    alert("Hello " + fullName);


    // Q7
    var city = "Hyderabad";
    var newCity = city.replace("Hyder", "Islam");
    alert("City: " + city + "\nAfter replacement: " + newCity);


    // Q8
    var message = "Ali and Sami are best friends. They play cricket and football together.";
    var newMessage = message.replace(/and/g, "&");
    alert(newMessage);


    // Q9
    var str = "472";
    var num = Number(str);
    alert("Value: " + str + "\nType: " + typeof str +
          "\nValue: " + num + "\nType: " + typeof num);


    // Q10
    var userInput = prompt("Enter text");
    var upper = userInput.toUpperCase();
    alert(upper);


    // Q11
    var userInput = prompt("Enter text");
    var titleCase = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();
    alert(titleCase);


    // Q12
    var num = 35.36;
    var str = num.toString().replace(".", "");
    alert("Number: " + num + "\nResult: " + str);


    // Q13
    var username = prompt("Enter username");
    if (username.includes("@") || username.includes(".") || username.includes(",") || username.includes("!")) {
        alert("Please enter a valid username");
    } else {
        alert("Username is valid");
    }


    // Q14
    var items = ["cake", "apple pie", "cookie", "chips", "patties"];
    var search = prompt("Welcome! What do you want?").toLowerCase();

    if (items.includes(search)) {
        alert(search + " is available");
    } else {
        alert(search + " is not available");
    }


    // Q15
    var password = prompt("Enter password");

    if (password.length < 6) {
        alert("Password must be at least 6 characters");
    } else if (!isNaN(password[0])) {
        alert("Password should not start with a number");
    } else {
        alert("Valid password");
    }


    // Q16
    var university = "University of Karachi";
    var arr = university.split("");
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }


    // Q17
    var userInput = prompt("Enter text");
    var lastChar = userInput.charAt(userInput.length - 1);
    alert("Last character: " + lastChar);


    // Q18
    var text = "The quick brown fox jumps over the lazy dog";
    var count = (text.toLowerCase().match(/the/g) || []).length;
    alert("Occurrences of 'the': " + count);