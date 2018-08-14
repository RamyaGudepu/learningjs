//multiple arguments
let add = function(a,b,c) {
return a + b + c
}
let result = add(10,2,3)
console.log(result)
//default arguments
let getScoreTest = function (name = 'anonymous',score = 0) {
    console.log(name)
    console.log(score)
}
getScoreTest()