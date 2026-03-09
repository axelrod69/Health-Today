import '../styles/firstScreen.css'
import Home from "../../shared/components/Home";
import NavBar from "../../shared/components/NavBar";
import Speciality from "../../shared/components/Speciality";
import Schedule from "../../shared/components/Schedule";
import AboutUs from '../../shared/components/AboutUs';
import Footer from '../../shared/components/Footer';

function FirstScreen() {
    return (
        <div className="firstScreen">
            {/* <Carousel /> */}
            <NavBar />
            <Home />
            <Speciality />
            <Schedule />
            <AboutUs />
            <Footer />
        </div>
    );
}

export default FirstScreen