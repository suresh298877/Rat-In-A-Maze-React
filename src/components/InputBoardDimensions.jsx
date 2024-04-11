import { useRef, useState } from "react";
import "./InputBoardDimensions.css";

function InputBoardDimensions({ setRowsCols }) {
    const rows = useRef()
    const cols = useRef()

    // function handleRowsChange(e) {
    //     setRows(e.target.value);
    // }

    // function handleColschage(e) {
    //     setCols(e.target.value);
    // }

    function handleSubmit(e) {
        e.preventDefault();
        setRowsCols(parseInt(rows.current.value), parseInt(cols.current.value));
    }
    return (
        <div className="boxInput">
            <h1>Input Board Dimensions</h1>
            <form style={{ fontSize: 'xx-large' }} onSubmit={handleSubmit}>
                <label htmlFor="mazeRows">Number of rows : </label>
                <input ref={rows} id="mazeRows" type="number" placeholder="Maze rows" required></input>
                <br />
                <br />
                <label htmlFor="mazeCols">Number of cols : </label>
                <input ref={cols} id="mazeCols" type="number" placeholder="Maze cols" required></input>
                <br />
                <input style={{ marginTop: "20px" }} type="submit" value="Get Maze"></input>
            </form>
        </div>
    )
}

export default InputBoardDimensions;