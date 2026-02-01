import Home from "../../shared/components/Home";
import NavBar from "../../shared/components/NavBar";
import '../styles/firstScreen.css'

function FirstScreen() {
    return (
        <div className="firstScreen">
            <NavBar />
            <Home />
        </div>
    );
}

export default FirstScreen