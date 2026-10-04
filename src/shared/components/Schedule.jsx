import '../styles/schedule.css'
import AddressCard from './AddressCard';
import Calender from './Calender';
import shonaliExterior from '../../assets/images/shonali-shibir-exterior.jpeg'
import galaxyEntrance from '../../assets/images/maharaja-galaxy-entrance.jpeg'
import galaxyReception from '../../assets/images/maharaja-galaxy-reception.jpeg'
import galaxyConsultation from '../../assets/images/maharaja-galaxy-consultation.jpg'
import milanExterior from '../../assets/images/milan-sangha-exterior.jpeg'
import milanInterior from '../../assets/images/milan-sangha-interior.jpeg'
import milanConsultation from '../../assets/images/milan-sangha-consultation.jpeg'
import carouselImages from '../../data/carouselImages.json'
import NameCard from './NameCard';
import parthaPortrait from '../../assets/dr-partha-pratim-paul.png';
import banyaPortrait from '../../assets/dr-banya-ghosh-paul.png';
import getScreenSize from '../hooks/useScreenSize'
import { useLocalization } from '../../core/localization/LocalizationProvider';

function Schedule() {
    // Resolve carousel data keys to bundled images.
    const slideKeyToImage = {
        milanExterior,
        milanInterior,
        milanConsultation,
        galaxyEntrance,
        galaxyReception,
        galaxyConsultation,
        shonaliExterior,
    }

    const { isMobile, isTablet } = getScreenSize()
    const { t } = useLocalization()



    const slidesRoot = carouselImages?.slides?.[0] ?? {}
    const groups = [
        { key: 'slideOne', title: 'Slide One', slides: slidesRoot.slideOne ?? [], latitude: 22.643464807575757, longitude: 88.42530199591306, address: t("schedule.addressOne") },
        { key: 'slideTwo', title: 'Slide Two', slides: slidesRoot.slideTwo ?? [], latitude: 22.643357899125526, longitude: 88.42439026561632, address: t("schedule.addressTwo") },
        { key: 'slideThree', title: 'Slide Three', slides: slidesRoot.slideThree ?? [], latitude: 22.643837, longitude: 88.427671, address: t("schedule.addressThree") },
    ].map((group) => ({
        ...group,
        slides: group.slides.map((s) => ({
            image: slideKeyToImage[s.src] ?? shonaliExterior,
            alt: s.alt ?? group.title,
        })),
    }))

    return (
        <>
            <div id="schedule" className='schedule'>
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
                        image={parthaPortrait}
                        phoneNumber={t("common.drParthaPratimPaulNo")} style={{
                        height: isMobile ? 'auto' : isTablet ? '14vw' :  '120px',
                        width: 'auto',
                        // top: '40%',
                        // left: '21%',
                        zIndex: '100'
                    }}/>
                        <NameCard name={t("common.drBanyaGhoshPaul")}
                        image={banyaPortrait}
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
