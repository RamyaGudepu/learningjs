let gradeCalc = function(score,totalScore) {
let percent = (score / totalScore) * 100
if (percent>=90){
    return `you got a A(${percent}%)`
}
}
let result = gradeCalc(19,20)
console.log(result)