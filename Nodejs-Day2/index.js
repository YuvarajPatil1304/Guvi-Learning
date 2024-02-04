const express = require('express')
const app = express()
const port = 3000

const booking = {
    "customer": "Cust1",
    "booking_Date": "31/01/2024",
    "start_Time": "10:00pm",
    "end_Time": "10:00pm",
    "booking_ID": "1",
    "room_Id": "1",
    "status": "Booked",
    "booked_On": "31/01/2024"
}

const customer = {
    "name": "Cust1",
    "booking": [ 
        {
            "customer": "Cust1",
            "bookingDate": "31/01/2024",
            "startTime": "10:00pm",
            "endTime": "10:00pm",
            "bookingID": "1",
            "roomId": "1",
            "status": "booked",
            "booked_On": "31/01/2024"
        }
    ] 
}

const room = {
    "room_Id":"1",
    "seats_Available":"10",
    "amenities":"TV,AC,BED",
    "price_Per_hr":"200"
}

app.get('/', (req, res) => {
  res.send('Nodejs Day2')
})
app.get('/booking', (req, res) => {
    res.json({data: booking, error: null})
})
app.get('/customer', (req, res) => {
    res.json({data: customer, error: null})
})
app.get('/room', (req, res) => {
    res.json({data: room, error: null})
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})