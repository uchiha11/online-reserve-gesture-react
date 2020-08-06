import React, { useContext } from "react"
import RoomContext from "../contexts/RoomContext"
import "./styles/Seat.css"

const Header = () => {

	const { rooms } = useContext(RoomContext)
	const roomData = useContext(RoomContext)

	const GenerateOptions = () => {
		const roomObject = rooms.roomNames
		return Object.keys(roomObject).map((room, key) => {
			return <option value={room} key={key}>{room}</option>
		})
	}

	const roomSwitchHandler = (e) => {
		// const newPrice = rooms.roomNames[e.target.value]
		roomData.changeState({...rooms});
	}

	return (
		<div className="container" style={{ textAlign: "center" }}>
			<select className="room-selector" onChange={roomSwitchHandler}>
				{GenerateOptions()}
			</select>
		</div>
	)
}

export default Header
