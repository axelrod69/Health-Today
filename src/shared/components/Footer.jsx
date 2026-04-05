import '../styles/footer.css'
import '../styles/navBar.css'
import MedicalIcon from '../../assets/icons/medical.svg?react'
import getScreenSize from '../hooks/useScreenSize'
import { useLocalization } from '../../core/localization/LocalizationProvider';

function Footer() {
    const { isMobile, isTablet, isLaptop } = getScreenSize()
    const { t } = useLocalization()

    return (
        <>
            <div className='footer'>
                <div className='footerBody'>
                    <div>
                        <div className='iconDiv'>
                            <MedicalIcon width={isMobile ? 40 : 60} height={isMobile ? 40 : 60} />
                            <div className='h2Div'>
                                <h2>{t("common.healthToday")}</h2>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2>{t("footer.quickLinks")}</h2>
                        <p>{t("footer.ourServices")}</p>
                        <p>{t("footer.appointment")}</p>
                        <p>{t("common.aboutUs")}</p>
                    </div>
                    <div>
                        <h2>{t("footer.designedByAxelrodStudios")}</h2>
                        <p>{t("common.moreAboutUs")}</p>
                    </div>
                </div>
                <div className='footNote'>
                    <p>{t("footer.privacyPolicy")}</p>
                </div>
            </div>
        </>
    );
}

export default Footer