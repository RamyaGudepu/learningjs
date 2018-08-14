let myBook = {
    title: '1984',
    author: 'aruna',
    pageCount: 200
}
let otherBook = {
    title: 'A Helpless History',
    author: 'HowardZina',
    pageCount: 700
}
let getSummary = function(book) {
console.log(`${book.title}by${book.author}`)
}
getSummary(myBook)
getSummary(otherBook)