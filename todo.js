const todos = [{
    text: 'order cat food',
    completed: false
},{
    text: 'clean kitchen',
    completed: true
},{
    text: 'buy food',
    completed: false
},{
    text:'Do Work',
    completed:false
},{
    text: 'Excercise',
    completed:true
}]

/* const p = document.querySelectorAll('p')
p.forEach(function(p){
    if(p.textContent.includes('the')){
        p.remove()
    }
})
 */
const incompleteTodos = todos.filter(function(todo){
    return !todo.completed
})
const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    document.querySelector('body').appendChild(summary)
    todos.forEach(function(todo){
        const p = document.createElement('p')
        p.textContent = todo.text
        document.querySelector('body').appendChild(p)
    })