import '../styles/speciality.css'
import ServicesCard from './ServicesCard'
import Button from './Button';
import getScreenSize from '../hooks/useScreenSize'
import { useLocalization } from '../../core/localization/LocalizationProvider';


function Speciality() {
    const { isMobile, isTablet, isLaptop } = getScreenSize()
    const { t } = useLocalization()

    return (
        <>
            <div className="specialityDiv">
                <div className='headerText'>
                    <div className='firstLine'></div>
                    <h2>{t("speciality.ourServices")}</h2>
                    <div className='lastLine'></div>
                </div>
                <h2>{t("speciality.commonSpecialities")}</h2>
                <div className='servicesFlex'>
                    <ServicesCard serviceText={t("speciality.treatmentOne")} />
                    <ServicesCard serviceText={t("speciality.treatmentTwo")} />
                    <ServicesCard serviceText={t("speciality.treatmentThree")} />
                    <ServicesCard serviceText={t("speciality.treatmentFour")} />
                </div>
                <div className='servicesDescription'>
                    <div className='firstDescriptionSection'>
                        <p>{t("speciality.caringForWellBeing")}</p>
                    </div>
                    <div className='secondDescriptionSection'>
                        <p>{t("speciality.weProvideAllAspects")}</p>
                        <div className='secondDescription'>
                            <p>{t("speciality.aspectDescription")}</p>
                        </div>
                        <div className='buttonSection'>
                            <Button label={t("speciality.moreAboutUs")} variant="outline" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Speciality