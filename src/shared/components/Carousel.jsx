import '../styles/carousel.css'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'
import carouselData from '../../data/carousel.json'
import slide1 from '../../assets/images/5080895.jpg'
import slide2 from '../../assets/images/6071562.jpg'
import slide3 from '../../assets/images/7704972.jpg'

const imageMap = {
    slide1,
    slide2,
    slide3
}

function Carousel() {
    const [slide, setSlide] = useState(0)

    return (
        <>
            <div className='carousel'>
                <BsArrowLeftCircleFill className='arrow arrow-left'/>
                {carouselData.slides.map((slide, index) => {
                    return <img className={slide === index ? "slide" : "slide slide-hidden"} key={index} src={imageMap[slide.src]} alt={slide.alt} />
                })}
                <BsArrowRightCircleFill className='arrow arrow-right'/>
                <span className='indicators'>
                    {carouselData.slides.map((_, index) => {
                        return <button className='indicator' key={index} onClick={null}></button>
                    })}
                </span>
            </div>
        </>
    );
}

export default Carousel