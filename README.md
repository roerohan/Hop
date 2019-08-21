# Hop

Late for classes and no buses available? Hop on to one of our cycles!

- Save Time!
- Save Money!
- Save Attendance!
- Travel eco-friendly

# Requirements

- Cycles
- GPS Tracking System
- Station
- OTP Lock
- Mobile Application for Tracking Rides

# Database Structure

## User

- Name
- Phone
- Email
- Reg. No
- Room No.
- Credits
- UPI Key (TBD)
- Cycle-ID (Foreign-Key) (null if not owner)

## Cycle

- Unique ID
- Model Name
- Trips Completed

## Station

- Venue Name
- Location
- Number of Cycles

## Trip

- From Station (Foreign Key)
- To Station (Foreign Key)
- User-ID (Foreign Key)
- Cycle-ID (Foreign Key)
