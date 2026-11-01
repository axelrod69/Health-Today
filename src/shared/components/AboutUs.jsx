import '../styles/aboutUs.css'
import '../styles/speciality.css'
import PictureCard from './PictureCard';
import parthaPhoto from '../../assets/images/about-partha.jpeg';
import banyaPhoto from '../../assets/images/about-banya.jpg';
import getScreenSize from '../hooks/useScreenSize'
import { useLocalization } from '../../core/localization/LocalizationProvider';

function AboutUs() {
    const { isMobile, isTablet } = getScreenSize()
    const { t } = useLocalization()

    const DoctorTestimonialsMobile = (
        <>
            <div className='doctorTestimonials'>
                <div>
                    <div>
                        <PictureCard image={parthaPhoto} alt={t("common.drParthaPratimPaul")} />
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
                        <PictureCard image={banyaPhoto} alt={t("common.drBanyaGhoshPaul")} objectPosition="35% center" />
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
            <div id="about" className='aboutUsDiv'>
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
                        <PictureCard image={parthaPhoto} alt={t("common.drParthaPratimPaul")} />
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
                        <PictureCard image={banyaPhoto} alt={t("common.drBanyaGhoshPaul")} objectPosition="35% center" style={{
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
