import '../styles/pictureCard.css'

function PictureCard({ image, alt = '', style, objectPosition = 'center' }) {
    return (
        <>
            <div className='pictureCard' style={style}>
                {image && <img src={image} alt={alt} style={{ objectPosition }} />}
            </div>
        </>
    );
}

export default PictureCard
