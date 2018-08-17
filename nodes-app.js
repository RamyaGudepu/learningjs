/* 
alert('this is my document')
const p = document.querySelector('p')
p.remove()
const ps = document.querySelectorAll('p')
ps.forEach(function(p){
    p.remove()
})
//add a new element
const newParagraph = document.createElement('p')
newParagraph.textContent = 'this is a new element from Javascript'
document.querySelector('body').appendChild(newParagraph) */

const notes = [{
    title:'my next trip',
    body:'I would like to go to Spain'
},{
    title:'habbits to work on',
    body:'exercise,eating a bit better'
},{
    title:'office modifications',
    body:'get a new seat'
}]
document.querySelector('button').addEventListener('click',function(e){
   e.target.textContent = 'the button was clicked'
})