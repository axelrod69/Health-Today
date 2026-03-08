import '../styles/addressCard.css'
import LocationPin from '../../assets/icons/google-maps-icon.svg?react'
import InfoIcon from '../../assets/icons/info-icon.svg?react'
import Dots from './Dots'
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs'
import { useEffect, useState } from 'react'
import MapCard from './MapCard'

function AddressCard({ slides = [], autoPlayMs = 3500, latitude, longitude, address }) {
    const [activeIndex, setActiveIndex] = useState(0)
    
    const [mapCard, showMapCard] = useState(false)

    const count = slides.length
    const current = count > 0 ? slides[activeIndex] : null

    const goPrev = () => {
        if (count <= 1) return
        setActiveIndex((prev) => (prev - 1 + count) % count)
    }

    const goNext = () => {
        if (count <= 1) return
        setActiveIndex((prev) => (prev + 1) % count)
    }

    useEffect(() => {
        if (count <= 1) return
        const id = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % count)
        }, autoPlayMs)

        return () => clearInterval(id)
    }, [count, autoPlayMs])

    return (
        <>
            <div className="addressCard">
                <div className='locationPin' onClick={() => showMapCard(true)}>
                    <LocationPin height={40} width={40} />
                </div>
                <div className='info'>
                    <InfoIcon height={20} width={20} />
                    <p>Check Location On Google Map</p>
                </div>
                <div className='arrowBox'>
                    <BsArrowLeftCircle className='leftArrow' onClick={goPrev} />
                    <BsArrowRightCircle className='rightArrow' onClick={goNext} />
                </div>
                {current ? (
                    <img
                        key={activeIndex}
                        className="addressCardImage"
                        src={current.image}
                        alt={current.alt ?? `Slide ${activeIndex + 1}`}
                    />
                ) : (
                    <div className="addressCardEmpty">No slides</div>
                )}
                <Dots
                    count={count}
                    activeIndex={activeIndex}
                    onSelect={(index) => setActiveIndex(index)}
                />

            </div>

            {mapCard && (
                <MapCard
                    onClose={() => showMapCard(false)}
                    latitude={latitude}
                    longitude={longitude}
                    address={address}
                />
            )}
        </>
    );
}

export default AddressCard