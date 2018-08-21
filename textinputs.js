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
const filters = {
    searchText: ''
}
const renderNotes = function (notes,filters){
    const filteredNotes = notes.filter(function (note){
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    document.querySelector('#notes').innerHTML = ''
   filteredNotes.forEach(function (note){
       const noteE1 = document.createElement('p')
       noteE1.textContent = note.title
       document.querySelector('#notes').appendChild(noteE1)
   })
}
renderNotes(notes,filters)
document.querySelector('#search-text').addEventListener('change',function(e){
    filters.searchText = e.target.value
    renderNotes(notes,filters)
})