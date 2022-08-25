//Write a conditional statement that checks if the password meets the following constraints:

// At least 10 characters long
// Contains at least one letter and one number
// If the password meets the constraint, console log a success message.

// If the password fails the constraint, console log a failure message.

// Test out your conditional by changing the value of your password variable and running your file!

let password ='Abcdefg123'
let numCheck = false
let letterCheck = false
let upperCheck = false
let lengthCheck = false


for (let i = 0; i < password.length; i++){
  if(!isNaN(+password[i])){
    numCheck = true
}

if (password[i] === password[i].toUpperCase() && isNaN(+password[i])){
  upperCheck = true
}
}

if (password.length >=10 && password.length <= 20){
  lengthCheck = true
}

if(/[a-zA-Z].test(password)/){
  letterCheck = true
}

if(lengthCheck && numCheck && upperCheck && letterCheck){
  console.log('Meets Requirements')
} else { 
  console.log('Doesnt Meet')
}
