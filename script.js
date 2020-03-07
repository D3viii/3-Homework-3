// Assignment Code
var generateBtn = document.querySelector("#generate");

var letters = ["a,b,c,d,e,f,g,h,i,j,k,l,m,o,p,q,r,s,t,u,v,w,x,y,z"];
var numbers = ["1,2,3,4,5,6,7,8,9,0"];
var characters = ["!,@,#,$,%,&,*"];

var q1 = prompt("do you want letters?")
var q2 = prompt("do you want numbers?")
var q3 = prompt("do you want special characters?")

if(q1){
  alert("letters"[5])
}else{

}

if(q2){

  alert("numbers"[6])

}else{

}

if(q3){

  alert("characters"[4])

}else{

}


function generatePassword() {}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log(password)
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
