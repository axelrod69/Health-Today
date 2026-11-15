import '../styles/servicesCard.css'
import Shape from './Shape'
import getScreenSize from '../hooks/useScreenSize'

function ServicesCard({ image, serviceText }) {
    const { isMobile, isTablet } = getScreenSize()

    return (
        <>
            <div className="serviceCard">
                <Shape style={{
                    backgroundColor: 'var(--color-surface)',
                    border: '4px solid var(--color-brand)',
                    overflow: 'hidden',
                    flexShrink: 0,
                    height: isMobile ? '20vw' : isTablet ? '20vw' : '140px',
                    width: isMobile ? '20vw' : isTablet ? '20vw' : '140px'
                }}>
                    {image && <img className="serviceCardImage" src={image} alt="" loading="lazy" />}
                </Shape>
                <p>{serviceText ?? 'Default'}</p>
            </div>
        </>
    );
}

export default ServicesCard
