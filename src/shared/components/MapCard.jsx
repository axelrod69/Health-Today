import '../styles/mapCard.css'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'

function MapCard({ onClose, latitude, longitude, address }) {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        // googleMapsApiKey: 'AIzaSyAGqgvRbLuHcf4lwSJFQEXM_vjYbGeAgYY'

        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY
    })

    const containerStyle = {
        width: "100%",
        height: "100%"
    }

    const coOrdinates = {
        lat: latitude,
        lng: longitude
    }

    return (
        <>
            <div className='mapCardOverlay' onClick={onClose}>
                <div
                    className='mapCard'
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className='mapCardHeader'>
                        <span className='mapCardTitle'>Address</span>
                        <button
                            type='button'
                            className='mapCardClose'
                            onClick={onClose}
                        >
                            ✕
                        </button>
                    </div>
                    <div>
                        {address}
                    </div>
                    <div className='mapCardBody'>
                        {isLoaded ? (
                            <GoogleMap mapContainerStyle={containerStyle} center={coOrdinates} zoom={20}>
                                <Marker position={coOrdinates} />
                            </GoogleMap>
                        ) : (
                            <div className='mapLoading'>Loading...</div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default MapCard

