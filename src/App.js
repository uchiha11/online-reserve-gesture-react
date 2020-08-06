import React, {useState} from "react"
import "./App.css"

import RoomSelector from "./components/RoomSelector"
import SeatAvailability from "./components/SeatAvailability"
import SeatMatrix from "./components/SeatMatrix"
import SeatCalculator from "./components/SeatCalculator"

import RoomContext from './contexts/RoomContext'

const App = () => {

	const [rooms, EditRooms] = useState({
		roomNames: {
			"Parking": 10,
			"meeting room": 8,
			"developer side": 10,
		},
		totalSeats: 0,
		maximumSeats: 8,
		seatNumbers: []
	})

	return (
		<div className="main container">
			<RoomContext.Provider value={{ rooms, changeState: EditRooms }}>
				<div>
					<h2 style={{color: "black", font:" Brown-Pro-Bold"}}> WELCOME TO LOGITECH </h2>
				</div>
				<RoomSelector />
				<SeatMatrix />
				<SeatAvailability />
				<SeatCalculator />
			</RoomContext.Provider>
		</div>
	)
}

export default App
