const notes = [{
    title: 'my next trip',
    body: 'i would like to go to spain'
}, {
 title: 'habbits to work on',
 body: 'excercise,eating a bit better'   
}, {
    title: 'office modification',
    body: 'eating a bit better'   
}]
const findNote = function (notes,noteTitle) {
    const index = notes.findIndex(function (note,index){
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
    return notes[index]
}
const note = findNote(notes,'office modification')
console.log(note)