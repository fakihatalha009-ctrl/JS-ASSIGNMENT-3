// ////////////////////////////
// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

// var firstName=prompt("enter your first name");
// var lastName =prompt("enter your last name");
// var fulName = firstName +""+lastName;
// alert("welcome"+ fulName);

// ////////////////////////////////

// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser


// var fvrtMbl =prompt("enter your favourite model");
// var length =fvrtMbl.length;
// document.writeln(`my favourite mobile modle is ${fvrtMbl}<br>
//     length of string is ${length}`);

// //////////////////////////////////////

// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

// var str = "pakistani";
//  var indexOfN = str.indexOf("n");
//  document.writeln(`string ${str} <br>
//     index of n: ${indexOfN}`);

// ////////////////////////////////////////

// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.


// var str = "hellow world";
//  var indexOfl = str.indexOf("l");
//  document.writeln(`string ${str} <br>
//     index of l: ${indexOfl}`);

// //////////////////////////////////////

// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser

// var str= "Pakistani";
// var index3 = str[3];
// document.writeln(`String : <b> ${str}  </b><br><br> Characterat index 3 is  : <b> ${index3}  </b> `);

// //////////////////////////////////

// 6. Repeat Q1 using string concat() method.

// var fName = prompt("Enter your First Name");
// var lName = prompt("Enter your Last Name");
// var fullName = fName .concat(" ", lName);
// alert("Hello " + fullName);
  
// ////////////////////////////

// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

// var city = "hyderabad";
// var replace = city.replace("hyder","Islam");
// document.writeln(`City : <b> ${city}  </b><br><br> After Replacement  : <b> ${replace}  </b> `);

// ////////////////////////////////////////

// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.

// var message ="Ali and Sami are best friends. They play cricket and football together";
//  var replace = message.replace("and","&");
//  document.writeln(replace);

// //////////////////////////////////////////

// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.


// var str = "472";
// var num = parseInt(str);


//    document.writeln(` Value : ${str} <br><br>`); 
//    document.writeln(` Type :${typeof str } <br><br>`);
//    document.writeln(` Value :${num} <br><br>`); 
    
//    document.writeln(` Type :${typeof num }<br><br>`); 

// /////////////////////////////////

// 10. Write a program that takes user input. Convert and
// show the input in capital letters.

//  document.writeln(` User input :${user } <br><br>`);
//    document.writeln(` Upper case :${user.toUpperCase()} <br><br>`); 

// //////////////////////////

// 11. Write a program that takes user input. Convert and
// show the input in title case.

//  var user = prompt("Enter any word");
//   document.writeln(` User input :${user } <br><br>`);
//   document.writeln(`Title case: ${user.slice(0,1).toUpperCase()}${user.slice(1).toLowerCase()}`);

// ////////////////////////////////////////////

// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

// var num = 35.36;
// var result = num.toString().replace(".", "");
// document.write("<h3>Original Number: " + num + "</h3>");
// document.write("<h3>Result: " + result + "</h3>");

// ///////////////////////////////////////////

// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64



// var username = prompt("Enter your username:");
// var isValid = true;

// for (var i = 0; i < username.length; i++) {
//     var code = username.charCodeAt(i);

//     if (code === 33 || code === 44 || code === 46 || code === 64) {
//         isValid = false;
//         break;
//     }
// }

// if (isValid) {
//     alert("Valid username: " + username);
// } else {
//     alert("Please enter a valid username (no @ . , ! allowed)");
// }

////////////////////////////////////////////

// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example


//  var items =  ["cake", "apple pie","cookie","chips", "patties"]; 
// var user = prompt("Welcome too ABC bakery . what do you want to order sir/ma'am?").toLowerCase();
// var isItemFound = false;

// for (var i = 0; i < items.length; i++) {
//     if (user === items[i]) {
//         isItemFound = true;
//     document.writeln(`${user} is <b>avaible</b> at Index ${i} in our bakery  <br><br>`);
// break;
//     }
 
//     }

// if (isItemFound === false) {
//     document.writeln(` We are sorry ${user} is <b>not avaible</b> in our bakery  <br><br>`); 
// } 




// ///////////////////////////////////////////////////

// 15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

// var password = prompt("Enter your password:");

// var hasAlphabet = false;
// var hasNumber = false;
// var isValid = true;

// // condition c: minimum length
// if (password.length < 6) {
//     isValid = false;
// }

// // condition b: should not start with number
// var firstCode = password.charCodeAt(0);
// if (firstCode >= 48 && firstCode <= 57) {
//     isValid = false;
// }

// // check alphabets and numbers
// for (var i = 0; i < password.length; i++) {
//     var code = password.charCodeAt(i);

//     // A-Z or a-z
//     if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
//         hasAlphabet = true;
//     }

//     // 0-9
//     if (code >= 48 && code <= 57) {
//         hasNumber = true;
//     }
// }

// if (!hasAlphabet || !hasNumber) {
//     isValid = false;
// }

// if (isValid) {
//     alert("Valid Password");
// } else {
//     alert("Please enter a valid password");
// }
  

// //////////////////////////////////

// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

// var university = "University of Karachi"; 
// var split = university.split('');

// for (let i = 0; i < split.length; i++) {
//    document.writeln(split[i] +" <br>")
    
// }


// ////////////////////////////

// 17. Write a program to display the last character of a user
// input.

// var input = prompt("Enter a word");

// var lastChar = input.slice(-1);
// document.writeln(lastChar)

//  document.writeln(` User Input :${input } <br><br>`);
//  document.writeln(` Last Character :${lastChar }`);

// ////////////////////////////////

// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.

// var str = "the quick brown fox jumps over the lazy dog";
// var occurance =[]
// for (let i = 0; i <str.length ; i++) {
//  if (str.slice(i,i+3) == "the") {
//    occurance++;
   
//  }
   
// } 

//  document.writeln(` TEXT :${str} <br><br>`);
//  document.writeln(` There are  ${occurance } occursnce(s) of word "the`);

// ////////////////////////////////////////
