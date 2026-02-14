import '../styles/servicesCard.css'
import Shape from './Shape'

function ServicesCard({ image, serviceText }) {
    return (
        <>
            <div className="serviceCard">
                <Shape style={{
                    backgroundColor: 'white',
                    border: '4px solid rgb(125, 71, 245)',
                    height: '140px',
                    width: '140px',
                    margin: '8px'
                }} />
                <p>{serviceText ?? 'Default'}</p>
            </div>
        </>
    );
}

export default ServicesCard