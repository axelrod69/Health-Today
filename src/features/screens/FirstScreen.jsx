import Home from "../../shared/components/Home";
import NavBar from "../../shared/components/NavBar";
import Speciality from "../../shared/components/Speciality";
import '../styles/firstScreen.css'

function FirstScreen() {
    return (
        <div className="firstScreen">
            <NavBar />
            <Home />
            <Speciality />
        </div>
    );
}

export default FirstScreen