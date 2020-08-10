//Remove Blanks
//Create a function that, given a string, returns all of that string’s contents, but without blanks. 
//If given the string " Pl ayTha tF u nkyM usi c ", return "PlayThatFunkyMusic".

console.log('#1 - Remove Blanks');
function removeBlanks(words1){
    console.log('Initial Input:', words1)
    return words1.split(" ").join("");
}
var words = removeBlanks(" Pl ayTha tF u nkyM usi c ");
console.log('End Result:', words)

console.log('------------------------------------');


//Get Digits
//Create a JavaScript function that given a string, returns the integer made from the string’s digits. 
//Given "0s1a3y5w7h9a2t4?6!8?0", the function should return the number 1357924680.

console.log('#2 - Get Digits');
function getDigits(string1){

}


console.log('------------------------------------');


//Acronyms
//Create a function that, given a string, returns the string’s acronym (first letters only, capitalized). 
//Given " there's no free lunch - gotta pay yer way. ", return "TNFL-GPYW". 
//Given "Live from New York, it's Saturday Night!", return "LFNYISN".

console.log('#3 - Acronyms');
function acronyms(string1){
    console.log(string1);
    var words = string1.split(" ");
    var somestring = "";
    for(var i = 0; i < words.length; i++){
        if(words[i][0]){
            somestring = somestring + words[i][0];
        }
    }
    return somestring.toUpperCase()
}
var firstLetters = acronyms("Live from New York, it's Saturday Night!");
console.log(firstLetters);
console.log('------------------------------------');

//Count Non-Spaces
//Accept a string and return the number of non-space characters found in the string. 
//For example, given "Honey pie, you are driving me crazy", return 29 (not 35).

console.log('#4 - Count Non-Spaces')
function nonSpaces(string){
    var stringLength = string.split(" ").join("").length
    console.log(stringLength)
}
nonSpaces("Honey pie, you are driving me crazy")
console.log('------------------------------------');


//Remove Shorter Strings
//Given a string array and value (length), remove any strings shorter than the length from the array.

console.log('#5 - Remove Shorter Strings')
function removeString(arr, value){
    console.log(arr)
    for(var i = arr.length-1; i >+ 0; i--){
        if(arr[i].length < value){
            for(var j = i; j<arr.length-1; j++){
                temp = arr[i+1];
                arr[i+1]= arr[i];
                arr[i] = temp;
            }
            arr.pop()
        }
    }

    return arr;
}
console.log(removeString(['Hello', 'World', 'Here', 'I', 'Come', 'Scrumptious', 'Have a very great day'], 2))


console.log('------------------------------------');

