//function - input,code,output
let greetUser = function(){
  console.log('welcome user!')  
}
greetUser()

let square = function(num) {
let result = num + num
return result
}
let value = square(3)
let othervalue=square(3)
console.log(value)
console.log(othervalue)
//temp-conversion
let convertFahrenheitToCelsius = function(fahrenheit) {
    let celsius = (fahrenheit - 32)*5/9
    return celsius
}
let tempOne = convertFahrenheitToCelsius(32)
let tempTwo = convertFahrenheitToCelsius(68)
console.log(tempOne)
console.log(tempTwo)