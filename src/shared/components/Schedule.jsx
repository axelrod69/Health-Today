import '../styles/schedule.css'
import AddressCard from './AddressCard';
import Calender from './Calender';
import ImageOne from '../../assets/images/5080895.jpg'
import ImageTwo from '../../assets/images/6071562.jpg'
import ImageThree from '../../assets/images/7704972.jpg'
import ImageFour from '../../assets/images/7718492.jpg'
import ImageFive from '../../assets/images/8974630.jpg'
import ImageSix from '../../assets/images/9569880.jpg'
import carouselImages from '../../data/carouselImages.json'
import NameCard from './NameCard';
import { BsTelephone, BsTelephoneX } from 'react-icons/bs';

function Schedule() {
    // Map the JSON src keys ("slide1"..."slide9") to real imported images.
    // You currently have 6 image files, so slide7..9 reuse slide1..3.
    const slideKeyToImage = {
        slide1: ImageOne,
        slide2: ImageTwo,
        slide3: ImageThree,
        slide4: ImageFour,
        slide5: ImageFive,
        slide6: ImageSix,
        slide7: ImageOne,
        slide8: ImageTwo,
        slide9: ImageThree,
    }



    const slidesRoot = carouselImages?.slides?.[0] ?? {}
    const groups = [
        { key: 'slideOne', title: 'Slide One', slides: slidesRoot.slideOne ?? [], latitude: 22.643464807575757, longitude: 88.42530199591306, address: "K.C Ghosh Memorial Homoeo Hall, Sapui Para, Rajbari, Dum Dum, Kolkata, West Bengal 700028" },
        { key: 'slideTwo', title: 'Slide Two', slides: slidesRoot.slideTwo ?? [], latitude: 22.643357899125526, longitude: 88.42439026561632, address: "R.K Paul Memorial Homoeo Hall, 47, PK Guha Road, Dum Dum, Kolkata, West Bengal 700028" },
        { key: 'slideThree', title: 'Slide Three', slides: slidesRoot.slideThree ?? [], latitude: 22.643837, longitude: 88.427671, address: "B.B Paul Memoril Homoeo Hall, 29, Italgacha Road, Ward No-6, P.O Italgacha, Kolkata, West Bengal 700079" },
    ].map((group) => ({
        ...group,
        slides: group.slides.map((s) => ({
            image: slideKeyToImage[s.src] ?? ImageOne,
            alt: s.alt ?? group.title,
        })),
    }))

    return (
        <>
            <div className='schedule'>
                <div className='scheduleDiv'>
                    <div className='firstScheduleDiv'>

                        {
                            groups.map((group) => (
                                <AddressCard
                                    key={group.key}
                                    slides={group.slides}
                                    autoPlayMs={3200}
                                    latitude={group.latitude}
                                    longitude={group.longitude}
                                    address={group.address}
                                />
                            ))
                        }
                    </div>
                    <div className='secondScheduleDiv'>
                        <p>A great system application for hospital center & health care</p>
                        <div className='secondParagraph'>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </div>
                        <Calender />
                    </div>
                </div>
                <div className='appointment'>
                    <p>For Appointment, Call on the below numbers:</p>
                    <div className='numberDiv'>
                        <NameCard name={'Dr. Partha Pratim Paul'}
                        phoneNumber={'+919330954566'}/>
                        <NameCard name={'Dr. Banya Ghosh Paul'}
                        phoneNumber={'+919433302899'}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Schedule