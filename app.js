                            //ASSIGNMENT NO 07
                            
                            //Question no 1
//Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable
//titled fullName. Greet the user using his full name.

var first_name = prompt("Enter your first name:");
var last_name = prompt("Enter your last name:");
var fullname = first_name + " " + last_name;
console.log(fullname);

                            //Question no 2
// Write a program to take a user input about his favorite mobile phone model. Find and display the length of user
// input in your browser.

var mobile_model = prompt("Enter your favourite mobile model:");
console.log("My favourite Mobile is: " + mobile_model);
var length = mobile_model.length;
console.log("Lenght of string is: " + length);
   
    
// }

                            //Question no 3
//Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser .

var word = "pakistani";
var letter = prompt("Input a find letter:");
var flag = "no";
for(var i = 0; i<word.length; i++){
    if(word[i] === letter){
        flag = "yes";
        word  = word.indexOf(letter);
        console.log("STRING IS : PAKISTANI");
        console.log("Index of " + letter + " is " + word)
        break;
    }
}
if(flag === "no"){
    console.log("STRING IS : PAKISTANI")
    console.log("Index of " + letter + " not found ")
}

                            //Question no 4
// Write a program to find the last index of letter “l” in theword “Hello World” and display the result in your browser.

var word = "Hello World";
var letter = prompt("Input a find letter:");
var flag = "no";
for(var i = 0; i<word.length; i++){
    if(word[i] === letter){
        flag = "yes";
        word  = word.lastIndexOf(letter);
        console.log("STRING IS : Hello World");
        console.log("Index of " + letter + " is " + word)
        break;
    }
}
if(flag === "no"){
    console.log("STRING IS : Hello World")
    console.log("Index of " + letter + " not found ")
}

                            //Question no 5
// Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser

var word = "pakistani";
var index = prompt("Input a index Number:");
var flag = "no";
for(var i = 0; i<word.length; i++){
    if(index[i] === index){
        flag = "yes";
        word  = word.charAt(index);
        console.log("STRING IS : PAKISTANI");
        console.log("Index of " + index + " is: " + word)
        break;
    }
}
if(flag === "no"){
    console.log("STRING IS : PAKISTANI")
    console.log("Index of " + index + " not found ")
}

                            //Question no 6
// Repeat Q1 using string concat() method.

var first_name = prompt("Enter your first name:");
var last_name = prompt("Enter your last name:");
var fullname = first_name.concat(last_name)
console.log(fullname);


                            //Question no 7
// Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser

var city = "Hyderabad";
var update_city = city.replace("Hyderabad", "Islamabad");
console.log("City: " + city);
console.log("After replacement: " + update_city);

                            //Question no 8
// Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.

var message = "Ali and Sami are best friends. They play cricket and football together";
var update = message.replace(/and/g,"&");
console.log("Real message: " + message)
console.log("After update " + update)

                            //Question no 9
// Write a program that converts a string “472” to a number 472. Display the values & types in your browser.

var num = "472";
console.log("Value: " + num)
console.log(typeof(num));

console.log("Value: " + num);
console.log(typeof(+num));

                            //Question no 10
//Write a program that takes user input. Convert and show the input in capital letters.

var word = prompt(" input a word:");
word = word.toUpperCase();
console.log(word);

                            //Question no 11
// You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given item is found in the list or not.
// Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability.

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var search = prompt("Enter the value: ");
search = search.toLowerCase();
var flag = false;
for(var i=0; i<A.length;i++){
    if(A[i] === search){
        var index = A.indexOf(search);
        flag = true;
        document.write(A[i] + " is available at index " + index + " in our bakery.");
        break
    }
}
if(flag === false){
    document.write("We are Sorry. " + search + " not available in our bakery. ")
}

                            //Question no 12
// Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

var num = 35.65;
console.log("Number is " + num)
var num1 = num.toString();
var string = num1.replace(".","");
console.log("string is " + string);

                            //Question no 13
// Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

var university = "University of Karachi";
var array = university.split(" ");
console.log(array);
for(var i=0;i<=array.length;i++){
    console.log(array[i]);
}
            //OR
//for(i=0 ; i<=university.length;i++){
    //console.log(university[i])
//}



                            //Question no 14
// You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.


var str = "The quick brown fox jumps over the lazy dog";
var word = "the";
var count = 0;
for(var i = 0; i < str.length; i++){
     if(str.slice(i, i + word.length).toLowerCase() === word){
                 count++
        }
     }
    
 console.log("There are " + count + " occurences of word 'The'");

                            //Question no 15
// Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

var pass = prompt("Enter your password");
var a = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
];
var b = [
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
];
var c = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var isNumber = false;
var isAlpha = false;
var isInvalid = false;

if (c.indexOf(pass[0]) !== -1) {
    console.log("Password should not start with a number")
    console.log("Please Enter correct password")
}
else if(pass.length < 6){
    console.log("Password should be at leasat 6")
}
 else {
  for(var i = 0; i < pass.length; i++){
      if(a.indexOf(pass[i]) !== -1){
        isAlpha = true
      }else if(b.indexOf(pass[i]) !== -1){
        isAlpha = true
      }else if(c.indexOf(pass[i]) !== -1){
        isNumber = true
      }else{
        isInvalid = true
      }
  }
  if(isAlpha && isNumber && !isInvalid){
    console.log("Correct password")
  }else{
    console.log("Password is Wrong / Special charactors are not allowed"); 
    console.log("Please Enter correct password");
}
 }


                            //Question no 16
//Write a program to display the last character of a user input
var input = prompt("Enter a word: ");
var print = input.charAt(input.length-1);
console.log("word is: " + input);
console.log("last character is: " + print);

                            //Question no 17
// Write a program to take user input and store username in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
var name = prompt("Enter a name");
flag= "yes";
for(var i=0; i<name.length; i++){
  if(name[i]==="!" || name[i]==="." || name[i]==="," || name[i]==="@"){
    flag="no";
    console.log("Enter a valid Username");
  }
}
if(flag==="yes"){
  console.log("Welcome " + "" + name);
}

                            //Question no 18
//Write a program that takes user input. Convert and show the input in title case.

var input = prompt("Enter a string: ");
console.log("User input " + input);
var title = input.split("");

title[0] = title[0].toUpperCase();
var titlecase = title.join("");
console.log("Title case: " + titlecase);


