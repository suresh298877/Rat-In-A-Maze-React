import { GiSeatedMouse, GiCheeseWedge } from "react-icons/gi";
function AnswerBoard(props) {
    return (
        <div style={{ display: 'inline-block', margin: '5px' }}>
            {props.board.map((row, index) => {
                return (
                    <div>
                        {
                            row.map((ele, idx) => {
                                return (
                                    <div style={{ height: props.height, width: props.width, backgroundColor: ele == 1 || props.board.length - 1 == index && props.board[0].length - 1 == idx ? 'green' : props.board[index][idx] == 'X' ? 'red' : 'orange', display: "inline-block" }}>
                                        {index == 0 && idx == 0 ? <span><GiSeatedMouse /></span> : props.board.length - 1 == index && props.board[0].length - 1 == idx ? <GiCheeseWedge /> : ele}
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            })}
        </div>
    )
}
export default AnswerBoard;