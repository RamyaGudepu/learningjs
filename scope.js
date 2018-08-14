//lexical scope (static scope)
//global scope ->defined outside of all code blocks
//local scope ->defined inside a code block

let varOne = 'varOne'//global scope

if(true){
    console.log(varOne)
    let varTwo = 'varTwo'//local scope
    console.log(varTwo)
    if(true){
        let varFour = 'varFour'//local scope
    }
} 
if (true) {
    let varThree = 'varThree'//local scope
}
