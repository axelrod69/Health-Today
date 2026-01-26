import '../styles/navBar.css'
import MedicalIcon from '../../assets/icons/medical.svg?react'
import DropDownIcon from '../../assets/icons/dropdown-icon.svg?react'

function NavBar() {
    return (
        <>
            <div className="navBar">
                <div className='iconDiv'>
                    <MedicalIcon width={60} height={60} />
                    <div className='h2Div'>
                        <h2>Health Today</h2>
                    </div>
                </div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Appointment</li>
                </ul>
                <div className='languageDropdown'>
                    Change Language
                    <DropDownIcon width={30} height={30} />
                    <div className='dropDownContent'>
                        <ul>
                            <li>English</li>
                            <li>Hindi</li>
                            <li>Bengali</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NavBar