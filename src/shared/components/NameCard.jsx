import '../styles/nameCard.css'
import Shape from './Shape';
import '../styles/shape.css'
import { BsTelephone } from 'react-icons/bs';

function NameCard({ name, phoneNumber, style }) {
    return (
        <>
            <div className='nameCard' style={style}>
                <Shape style={{
                    backgroundColor: 'white',
                    border: '6px solid rgb(125, 71, 245)',
                    // height: '100%',
                    width: '90px',
                    margin: '8px'
                }} />
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