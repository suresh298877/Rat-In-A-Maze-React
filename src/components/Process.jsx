import AnswerBoard from "./AnswerBoard";

function Process(props) {
    return (
        <div style={{ backgroundColor: 'black', textAlign: 'center' }}>
            {props.board.map((b) => {
                return (
                    <>
                        <AnswerBoard height={'25px'} width={'25px'} board={b} />
                    </>
                )
            })}
        </div>
    )
}
export default Process;