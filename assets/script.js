// Assignment Code



//care your vars
var userlength;
var isNum;
var isLower;
var isCap;
var isChar;

//all the different letters and characters for password
let masterArr = "";
let numArr = "1234567890";
let capArr = "ABCDEGHHIJKLMNOPQRSTUVWXYZ";
let lowerArr = "abcdefghijklmnopqrstuvwxyz";
let charArr = "~`!@#$%^&*()_-+=<>{[}]:;',.?|/";



//the different comments that will pop up to generate password
function generatePassword(){
    let genpassword = "";
    console.log("works");
    userlength=prompt("Length");
    isNum= confirm("Number?");
    isLower=confirm("Lower Case?");
    isCap=confirm("Capital Case?");
    isChar=confirm("Special Character?");

    //if statement for lowercase letters
    if(isLower==true){
      
        masterArr = masterArr.concat(lowerArr);
    }

    //if statement for numbers
    if(isNum==true){
       
        masterArr = masterArr.concat(numArr);
    }

    //if statement for capital letters
    if(isCap==true){
        
        masterArr = masterArr.concat(capArr);
    }

    //if statement for special characters
    if(isChar==true){
     
        masterArr = masterArr.concat(charArr);
    }
//error message for if nothing was chosen 
    if(masterArr === ""){
        alert("ERROR, choose correct password length and at least one option to generate password");
        masterArr = " ";
    }




        for ( let index = 0; index < userlength; index++) {

        let passwordArr = Math.floor(Math.random() * masterArr.length - 1);
        genpassword += masterArr.charAt(passwordArr);

        


    }
    


return genpassword;
}


var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {

    //return password
  var mypassword = generatePassword();
  //displays the pw on the html
console.log(mypassword)


  var mypasswordText = document.querySelector("#password");
console.log(mypasswordText)
  mypasswordText.value = mypassword;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);