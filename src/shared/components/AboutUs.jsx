import '../styles/aboutUs.css'
import '../styles/speciality.css'
import PictureCard from './PictureCard';
import getScreenSize from '../hooks/useScreenSize'
import { useLocalization } from '../../core/localization/LocalizationProvider';

function AboutUs() {
    const { isMobile, isTablet, isLaptop } = getScreenSize()
    const { t } = useLocalization()

    const DoctorTestimonialsMobile = (
        <>
            <div className='doctorTestimonials'>
                <div>
                    <div>
                        <PictureCard />
                        <h2>{t("common.drParthaPratimPaul")}</h2>
                    </div>

                    <div>
                        <p>{t("about.drParthaPratimPaulTestimonial")}</p>
                        <div className='degreeOne'>
                            <p>{t("common.degree")}</p>
                        </div>

                    </div>
                </div>
                <div>
                    <div>
                        <PictureCard style={{}} />
                        <h2>{t("common.drBanyaGhoshPaul")}</h2>
                    </div>

                    <div>
                        <p>{t("about.drBanyaGhoshPaulTestimonial")}</p>
                        <div className='credentials'>
                            <div className='degreeTwo'>
                                <p>{t("common.degree")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

    return (
        <>
            <div className='aboutUsDiv'>
                <div className='aboutUsText'>
                    <div className='firstLine'></div>
                    <h2>{t("common.aboutUs")}</h2>
                    <div className='lastLine'></div>
                </div>
                <div className='aboutDescription'>
                    <p>{t("about.aboutDescription")}</p>
                </div>
                {(isMobile || isTablet) ? DoctorTestimonialsMobile : <div className='doctorTestimonials'>
                    <div>
                        <PictureCard />
                        <div>
                            <h2>{t("common.drParthaPratimPaul")}</h2>
                            <p>{t("about.drParthaPratimPaulTestimonial")}</p>
                            <div className='credentials'>
                                <div className='degree'>
                                    <p>{t("common.degree")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <PictureCard style={{
                            marginLeft: "30px",
                            marginRight: "0"
                        }} />
                        <div>
                            <h2>{t("common.drBanyaGhoshPaul")}</h2>
                            <p>{t("about.drBanyaGhoshPaulTestimonial")}</p>
                            <div className='credentials'>
                                <div className='degree'>
                                    <p>{t("common.degree")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}
            </div>
        </>
    );
}

export default AboutUs