// Booking Start Date
// Sonder wants to help guests plan their stay
// by finding check -in and check - out dates that accommodate a desired length of stay.

// Sonder determines availability based on existing bookings,
//   serialized as colon - separated pairs of integers.
// The first integer is a check -in date, and the second is a check - out date.
// Each integer represents an offset since Jan 1, 2019.
// E.g. '0:1' represents a booking where the check -in date is Jan 1st 2019,
//   and the check - out date is Jan 2nd 2019.

// Directions
// Implement a method, booking_start_date(string bookings, int stay_length, int current_date)
// that will return the first day that can accommodate a booking of length stay_length.

//   Examples:
// Input: bookings: '0:2 3:5 7:14', stay_length: 1, current_date: 4
// Output: 5
// Input: bookings: '0:3 3:6 7:14', stay_length: 2, current_date: 4
// Output: 14
// Input: bookings: '0:2 5:6 7:14', stay_length: 1, current_date: 3
// Output: 3

// Rules:
// Input is well - formed
// Bookings will not overlap
// Bookings are sorted in order of check -in date
// Only dates later than or equal to current date should be returned

let bookings = '0:2 3:5 7:14';
let stayLength = 2;
let currentDate = 4;

function bookingStartDate(bookings, stayLength, currentDate) {
  bookings = bookings.split(' ');
  const hash = {};
  let result = null;
  let lastDate;

  for (let i = 0; i < bookings.length; i++) {
    let checkIn = Number(bookings[i].split(':')[0]);
    let checkOut = Number(bookings[i].split(':')[1]);
    
    for (let j = checkIn; j < checkOut; i++) {
      if (currentDate < j) return null;
    }
  }

  return result;
 }

 // if (currentDate >= checkIn || currentDate )
 // checkIn === currentDate
 // checkIn < 0 return null