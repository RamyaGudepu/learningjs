let getTip = function(total,tipPercent = .2){
   let percent = tipPercent * 100
    let tip = total+tipPercent
    return `A ${percent}% tip on $${total} would be $${tip}`
}
let tip = getTip(40,50)
console.log(tip)