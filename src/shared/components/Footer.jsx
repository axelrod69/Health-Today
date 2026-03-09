import '../styles/footer.css'
import '../styles/navBar.css'
import MedicalIcon from '../../assets/icons/medical.svg?react'

function Footer() {
    return (
        <>
            <div className='footer'>
                <div className='footerBody'>
                    <div>
                        <div className='iconDiv'>
                            <MedicalIcon width={60} height={60} />
                            <div className='h2Div'>
                                <h2>Health Today</h2>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2>Quick Links</h2>
                        <p>Our Services</p>
                        <p>Appointment</p>
                        <p>About Us</p>
                    </div>
                    <div>
                        <h2>Designed By Axelrod Studios</h2>
                        <p>More About Us</p>
                    </div>
                </div>
                <div className='footNote'>
                    <p>Privacy Policy</p>
                </div>
            </div>
        </>
    );
}

export default Footer