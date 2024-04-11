import "./header.css"
import { GiSeatedMouse } from "react-icons/gi";
import { GiMaze } from "react-icons/gi";



function Header() {
    return (
        <div className="header">
            <p className="title-text"><GiSeatedMouse /><span>Rat In A Maze</span><GiMaze /></p>
        </div>
    )
}

export default Header;