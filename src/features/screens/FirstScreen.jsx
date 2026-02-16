import Home from "../../shared/components/Home";
import NavBar from "../../shared/components/NavBar";
import Speciality from "../../shared/components/Speciality";
import Schedule from "../../shared/components/Schedule";
import '../styles/firstScreen.css'

function FirstScreen() {
    return (
        <div className="firstScreen">
            <NavBar />
            <Home />
            <Speciality />
            <Schedule />
        </div>
    );
}

export default FirstScreen