const todos = ['note 1',12,'note 3']
todos.splice(2,1)
todos.push('Buy Coffee')
todos.shift()
console.log(`you have ${todos.length}todos`)
todos.forEach(function(todo,index){
 const num = index + 1
 console.log(`${index + 1}. ${todo}`)   
})