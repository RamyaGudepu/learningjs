let restaurant = {
    name: 'ABS',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function(partySize) {
        let seatLeft = this.guestCapacity-this.guestCount
        return partySize <=seatLeft
    }
}
let status = restaurant.checkAvailability(4)
console.log(status)