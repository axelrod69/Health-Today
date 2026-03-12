import '../styles/nameCard.css'
import Shape from './Shape';
import '../styles/shape.css'
import { BsTelephone } from 'react-icons/bs';
import getScreenSize from '../hooks/useScreenSize'

function NameCard({ name, phoneNumber, style }) {
    const { isMobile, isTablet, isLaptop } = getScreenSize()

    return (
        <>
            <div className='nameCard' style={style}>
                {!isMobile && <Shape style={{
                    backgroundColor: 'white',
                    border: '6px solid rgb(125, 71, 245)',
                    // height: '100%',
                    width: isMobile ? '12vw' : isTablet ? '10vw' : '90px',
                    margin: isMobile ? '1vw' : isTablet ? '1vw' : '8px'
                }} />}
                <div className='nameCardSecond'>
                    <h4>{name}</h4>
                    {phoneNumber == null ? <p>Physician</p> : <div className='phoneNumber'>
                        <BsTelephone />
                        <p>{phoneNumber}</p>
                    </div>}
                </div>
            </div>
        </>
    );
}

export default NameCard