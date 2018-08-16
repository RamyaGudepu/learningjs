const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
},{
title: 'Habbies to work onp',
    body: 'Excercise,Eating a bit better'
},{
    title: 'office modification',
    body: 'eating a bit better' 
}]
const sortNotes = function (notes) {
    notes.sort(function(a,b){
    if(a.title.toLowerCase() <b.title.toLowerCase()){
        return -1
    }
    else if(b.title.toLowerCase()<a.title.toLowerCase()){
        return 1
    }else{
        return 0
    }
    })
}
const findNote = function (notes,noteTitle) {
    return notes.find(function (note,index){
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}
const filteredNotes = notes.filter(function(note,index){
    const isTitleMatch = note.title.toLowerCase().includes('office')
    const isBodyMatch = note.body.toLowerCase().includes('office')
    return isTitleMatch || isBodyMatch
})
/* console.log(filteredNotes)

const note = findNote(notes, 'some other office modifications')
console.log(note) */
sortNotes(notes)
console.log(notes)