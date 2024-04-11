import Row from "./Row";
import "./inputboardobstacles.css"

function InputBoardObstacles(props) {
    return (
        <div className="board">
            <h1>Click on the box to mark as obstacle :</h1>
            {props.board.map((row, index) => {
                return <Row setBoard={props.setBoard} board={props.board} key={index} arr={row} rowIndex={index} />;
            })}
        </div>
    )
}


export default InputBoardObstacles;