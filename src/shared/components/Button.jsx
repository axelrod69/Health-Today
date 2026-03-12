import '../styles/button.css'
import getScreenSize from '../hooks/useScreenSize'

function Button({ icon, label, functionality, variant }) {
    const { isMobile, isTablet, isLaptop } = getScreenSize()
    
    return (
        <>
            <button className={`buttonClass ${variant} `} onClick={functionality}>{icon ? (<div>
                <span>{icon}</span>
                <span>{label}</span>
            </div>) : (<span>{label}</span>)}</button>
        </>
    );
}

export default Button