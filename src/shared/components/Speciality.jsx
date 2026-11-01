import '../styles/speciality.css'
import ServicesCard from './ServicesCard'
import Button from './Button';
import childCare from '../../assets/images/service-child-care-realistic.png'
import physiotherapy from '../../assets/images/service-physiotherapy-realistic.png'
import motherCare from '../../assets/images/service-mother-care-realistic.png'
import mentalHealth from '../../assets/images/service-mental-health-realistic.png'
import { useLocalization } from '../../core/localization/LocalizationProvider';


function Speciality() {
    const { t } = useLocalization()

    return (
        <>
            <div id="services" className="specialityDiv">
                <div className='headerText'>
                    <div className='firstLine'></div>
                    <h2>{t("speciality.ourServices")}</h2>
                    <div className='lastLine'></div>
                </div>
                <h2>{t("speciality.commonSpecialities")}</h2>
                <div className='servicesFlex'>
                    <ServicesCard image={childCare} serviceText={t("speciality.treatmentOne")} />
                    <ServicesCard image={physiotherapy} serviceText={t("speciality.treatmentTwo")} />
                    <ServicesCard image={motherCare} serviceText={t("speciality.treatmentThree")} />
                    <ServicesCard image={mentalHealth} serviceText={t("speciality.treatmentFour")} />
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
                            <Button label={t("common.moreAboutUs")} variant="outline" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Speciality
