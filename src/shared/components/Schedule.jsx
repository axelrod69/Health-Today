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
import getScreenSize from '../hooks/useScreenSize'
import { useLocalization } from '../../core/localization/LocalizationProvider';

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

    const { isMobile, isTablet, isLaptop } = getScreenSize()
    const { t } = useLocalization()



    const slidesRoot = carouselImages?.slides?.[0] ?? {}
    const groups = [
        { key: 'slideOne', title: 'Slide One', slides: slidesRoot.slideOne ?? [], latitude: 22.643464807575757, longitude: 88.42530199591306, address: t("schedule.addressOne") },
        { key: 'slideTwo', title: 'Slide Two', slides: slidesRoot.slideTwo ?? [], latitude: 22.643357899125526, longitude: 88.42439026561632, address: t("schedule.addressTwo") },
        { key: 'slideThree', title: 'Slide Three', slides: slidesRoot.slideThree ?? [], latitude: 22.643837, longitude: 88.427671, address: t("schedule.addressThree") },
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
                        <p>{t("schedule.greatSystemApplication")}</p>
                        <div className='secondParagraph'>
                            <p>{t("schedule.systemApplicationDescription")}</p>
                        </div>
                        <Calender />
                    </div>
                </div>
                <div className='appointment'>
                    <p>{t("schedule.forAppointment")}</p>
                    <div className='numberDiv'>
                        <NameCard name={t("common.drParthaPratimPaul")}
                        phoneNumber={t("common.drParthaPratimPaulNo")} style={{
                        height: isMobile ? 'auto' : isTablet ? '14vw' :  '120px',
                        width: 'auto',
                        // top: '40%',
                        // left: '21%',
                        zIndex: '100'
                    }}/>
                        <NameCard name={t("common.drBanyaGhoshPaul")}
                        phoneNumber={t("common.drBanyaGhoshPaulNo")} style={{
                        height: isMobile ? 'auto' : isTablet ? '14vw' : '120px',
                        width: 'auto',
                        // top: '40%',
                        // left: '21%',
                        zIndex: '100'
                    }}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Schedule