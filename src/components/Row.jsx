import Square from "./Square";

function Row(props) {
    return (
        <>
            {
                props.arr.map((item, index) => <Square setBoard={props.setBoard} board={props.board} rowIndex={props.rowIndex} colIndex={index} item={item} key={index} />)
            }
            <br />
        </>
    )
}

export default Row;
