//   Case converter

// Write a function caseConvert that accepts two arguments. The first is a string, the second is type. If the type is "camelcase" then convert the string to camelcase (each word except the first is capitalized, no spaces). If type is "snakecase" then convert the string to snakecase (each word is separated by a - and all lowercase). As a bonus, accept a string or an array. If it's an array, use .join and proceed accordingly.

var capitalize = function capitalize(string) {
    var lowerString = string.toLowerCase();
    stringArray = lowerString.split(" ");
    var capArray = []
    var finalString = ""
    for (var i = 0; i < stringArray.length; i++) {
        var capString = "";
        var firstLetter = stringArray[i].slice(0, 1);
        firstLetter = firstLetter.toUpperCase();
        capString += firstLetter;
        capString += stringArray[i].slice(1);
        capArray.push(capString);
    }
    finalString = capArray.join(" ");
    return finalString;
};

var caseConvert = function caseConvert(str, conversionType) {
 //Your code here!!
    lowerString = str.toLowerCase();
    var stringArray = lowerString.split(" ");
    var stringArrayLength = stringArray.length;
    if (stringArray[(stringArrayLength - 1)] === "") {
        stringArray = stringArray.slice(0, stringArrayLength-1);
    };
    if (conversionType === "snakecase") {
        var convertedStr = stringArray.join("_");
    } else if (conversionType === "camelcase") { 
        var convertedStr = ""
        convertedStr += stringArray[0];
        for (i = 1; i < stringArrayLength; i++) {
            var capString = capitalize(stringArray[i]);
            convertedStr += capString;
        }
    } else {
        return "Invalid conversion type.";
    }
    return convertedStr;
};


//SnakecaseAssertions
console.assert(caseConvert("hello", "snakecase") === "hello", "string should be returned.");

console.assert(caseConvert("goodbye", "snakecase") === "goodbye", "Return the input string"); 

console.assert(caseConvert("HELLO", "snakecase") === "hello", "String must be lowercase");

console.assert(caseConvert("Hello world", "snakecase") === "hello_world", "Replace space in string with underscore");

console.assert(caseConvert("Hello world ", "snakecase") === "hello_world", "No underscores at the end of string");

//Camelcase assertions
console.assert(caseConvert("Hello world", "camelcase") === "helloWorld", "Don't print underscores and capitalize appropriately");

console.assert(caseConvert("Hannah Glasser", "camelcase") === "hannahGlasser", "Return string in camelcase.");

// Capitalize assertions
console.assert(capitalize("hello") === "Hello", "Capitalize the first letter");

console.assert(capitalize("hello world") === "Hello World", "Capitalize a string");

// Credit Card Validator
// Write a JavaScript program to validate that a credit card number:

// It must have 16 digits, unless it starts with 37 or 34. Then, and only then, it MUST have 15 digits
// It must start with one of the folliowing. Print off "valid" and the type of card
// 6011 = Discover Card
// 37 or 34 = American Express
// 4 = Visa
// 50-55 = MasterCard

