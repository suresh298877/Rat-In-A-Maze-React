import { useState } from "react";
import "./square.css"
function Square(props) {
    // console.log(props.board);
    function handleOnClick() {
        let new_array = props.board.map((arr, index) => {
            if (props.rowIndex == index) {
                return arr.map((ele, i) => {
                    if (props.colIndex == i) {
                        return "X";
                    } else {
                        return ele;
                    }
                })
            } else {
                return arr;
            }
        });
        props.setBoard(new_array);
    }

    if (props.board[props.rowIndex][props.colIndex] == 1) {
        setGreen(true);
    }
    return (
        <div style={{ display: 'inline-block' }}>
            <div style={{ backgroundColor: props.board[props.rowIndex][props.colIndex] == 'X' ? 'red' : '' }} onClick={handleOnClick} kay={props.index} className="square"><span className="square-text">{props.board[props.rowIndex][props.colIndex]}</span></div>
        </div>
    )
}

export default Square;

// {props.item == 'O' ? '' : 'X'}