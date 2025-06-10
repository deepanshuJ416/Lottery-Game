import { useState } from "react"
import "./LotteryGame.css";
import { genTicket , sum} from "./helper";
export default function LotteryGame(){

let [Ticket,setTicket] = useState(genTicket(3));
let isWinning = sum(Ticket) === 15;
function BuyTicket(){
    setTicket(genTicket(3));
}

return (
        <div>
            <h1>Lottery Game</h1>
                <div className="ticket">
                    <span>{Ticket[0]}</span>
                    <span>{Ticket[1]}</span>
                    <span>{Ticket[2]}</span>
                </div> 
                <br></br>
                <button onClick={BuyTicket}>Buy a New Ticket</button>
                <h3> { isWinning ? "Congrats You Won the lottery" : null }</h3>
        </div>
    )
}