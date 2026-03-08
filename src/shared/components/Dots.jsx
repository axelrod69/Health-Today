import '../styles/dots.css'

function Dots({ count = 0, activeIndex = 0, onSelect }) {
    return (
        <>
            <div className='dots'>
                {Array.from({ length: count }).map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        className={`dot ${index === activeIndex ? 'active' : ''}`}
                        aria-label={`Go to slide ${index + 1}`}
                        aria-current={index === activeIndex ? 'true' : 'false'}
                        onClick={() => onSelect?.(index)}
                    />
                ))}
            </div>
        </>
    );
}

export default Dots