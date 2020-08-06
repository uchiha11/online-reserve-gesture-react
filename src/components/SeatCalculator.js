import React, {useContext} from "react"
import RoomContext from "../contexts/RoomContext"
import Button  from "@material-ui/core/Button";

const SeatCalculator = () => {
	const {rooms} = useContext(RoomContext)
	const roomData = useContext(RoomContext)

	return (
		<div>
			<p>Selected {rooms.totalSeats} seats</p>
			<p>Available seats {rooms.maximumSeats - rooms.totalSeats}</p>
			<Button
				variant="contained"
				onClick={() => console.log(rooms)}
			>
				Confirm
			</Button>
		</div>
	)
}

export default SeatCalculator
