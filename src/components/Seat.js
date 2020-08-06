import React, {useContext} from 'react'
import RoomContext from "../contexts/RoomContext"

import './styles/Seat.css'

const Seat = (props) => {
    const { rooms } = useContext(RoomContext)
    const context = useContext(RoomContext)

    const seatNumber = props.seatno
    const seatStatus = props.seatColor ? props.seatColor : "seat-grey"

    const seatClickHandler = (event, seatNumber) => {
        event.stopPropagation()
        const seatColor = document.querySelector(`.seat-${seatNumber}`).classList
        if (rooms.seatNumbers.includes(seatNumber)) {
            const newRoomSeats = rooms.seatNumbers.filter((seat) => {
                return seat !== seatNumber
            })
            seatColor.remove("seat-black")
            seatColor.add("seat-grey")
            context.changeState({...rooms, seatNumbers: newRoomSeats, totalSeats: rooms.totalSeats-1 })
        } else {
            seatColor.remove("seat-grey")
            seatColor.add("seat-black")
            context.changeState({...rooms, seatNumbers: [...rooms.seatNumbers, seatNumber], totalSeats: rooms.totalSeats+1 })
        }
    }

    return (
        <div className="col-2 col-md-2">
            <div className={`seat seat-${seatNumber} ${seatStatus}`}
                onClick={(e) => seatClickHandler(e,props.seatno)} />
        </div>
    )
}

export default Seat
