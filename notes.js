const notes = ['note 1',12,'note 3']
notes.pop()
notes.push('my new note')
console.log(notes.shift())
notes.unshift('my firstnote')
notes.splice(1,1,'this is my second new item')
notes[2] = 'this the now the new note'
notes.forEach(function(){
 console.log('testing 123')
})
console.log(notes.length)
console.log(notes)