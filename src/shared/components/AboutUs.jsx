import '../styles/aboutUs.css'
import '../styles/speciality.css'
import PictureCard from './PictureCard';

function AboutUs() {
    return (
        <>
            <div className='aboutUsDiv'>
                <div className='aboutUsText'>
                    <div className='firstLine'></div>
                    <h2>About Us</h2>
                    <div className='lastLine'></div>
                </div>
                <div className='aboutDescription'>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div className='doctorTestimonials'>
                    <div>
                        <PictureCard />
                        <div>
                            <h2>Dr. Partha Pratim Paul</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <div className='credentials'>
                                <div className='degree'>
                                    <p>(DEGREE)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <PictureCard style={{
                            marginLeft: "30px",
                            marginRight: "0"
                        }}/>
                        <div>
                            <h2>Dr. Banya Ghosh Paul</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <div className='credentials'>
                                <div className='degree'>
                                    <p>(DEGREE)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutUs