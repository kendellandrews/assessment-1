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


for (let i = 0; i < password.length; i++){
  if(!isNaN(+password[i])){
}

if (password[i] === password[i].toUpperCase() && isNaN(+ password[i])){
  upperCheck =true
}
}




// console.log(`${passward} ${passward.length}`);
// if (passward.length >=10) {
// console.log('Long enough')
// } else {
//   console.log('too short')
// }
// let getCharacterLength= (passward) 
//   return [passward].length;{
//   console.log(getCharacterLength);
// }