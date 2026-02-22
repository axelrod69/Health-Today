import '../styles/addressCard.css'
import LocationPin from '../../assets/icons/google-maps-icon.svg?react'
import InfoIcon from '../../assets/icons/info-icon.svg?react'

function AddressCard() {
    return (
        <>
            <div className="addressCard">
                <div className='locationPin'>
                    <LocationPin height={40} width={40} />
                </div>
                <div className='info'>
                    <InfoIcon height={20} width={20}/>
                    <p>Check Location On Google Map</p>
                </div>
            </div>
        </>
    );
}

export default AddressCard