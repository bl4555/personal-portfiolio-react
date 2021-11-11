import "./Navbar.scss";
import "../../global.scss"

function handleScroll (e) {
    const element = e.target.value;
    switch(element){
        case "home":
            
            break;
        default:
            break;
    }
}

export default function Navbar () {
    return (
        <div className="navbar">
            <ul>
                <li onClick={handleScroll}>home</li>
                <li>whoami?</li>
                <li>siema</li>
            </ul>
        </div>
    )
}