### Back-End Server Link : 
https://nodejs-task2-6hom.onrender.com

### API's

For creating Room:
POST: https://nodejs-task2-6hom.onrender.com/createRoom

For Getting all the created Rooms:
GET: https://nodejs-task2-6hom.onrender.com/getAllRooms

For creating Booking:
POST: https://nodejs-task2-6hom.onrender.com/createBooking

For Getting all the Bookings
GET: https://nodejs-task2-6hom.onrender.com/getAllBookings

### Details:

For creating room use Body->json and enter details like:

{

    "noSeats": 3,
    "amenities": ["AC", "Geyser"],
    "price": 90

}

For Creating Booking use Body->json and enter details like:

{

    "custName": "Yuvaraj",
    "date": "12/19/2020",
    "startTime": "11:00",
    "endTime": "15:00"

}
