import '../styles/servicesCard.css'
import Shape from './Shape'
import getScreenSize from '../hooks/useScreenSize'

function ServicesCard({ image, serviceText }) {
    const { isMobile, isTablet, isLaptop } = getScreenSize()

    return (
        <>
            <div className="serviceCard">
                <Shape style={{
                    backgroundColor: 'var(--color-surface)',
                    border: '4px solid var(--color-brand)',
                    height: isMobile ? '20vw' : isTablet ? '20vw' : '140px',
                    width: isMobile ? '22vw' : isTablet ? '20vw' : '140px',
                    margin: '8px'
                }} />
                <p>{serviceText ?? 'Default'}</p>
            </div>
        </>
    );
}

export default ServicesCard