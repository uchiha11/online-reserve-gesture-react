import React from "react"
import Seat from './Seat'

const SeatAvailability = () => {
	return (<div>
		<div className="row">
			Unoccupied : <Seat seatColor="seat-grey" />
			Occupied : <Seat seatColor="seat-black" />
		</div>
		<div className="row">
		Booked: <Seat seatColor="seat-red" />
		</div>
		</div>

	)
}

export default SeatAvailability
