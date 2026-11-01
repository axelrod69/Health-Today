import '../styles/aboutUs.css'
import '../styles/speciality.css'
import '../styles/doctorProfiles.css'
import { useState } from 'react'
import parthaPhoto from '../../assets/images/about-partha.jpeg'
import banyaPhoto from '../../assets/images/about-banya.jpg'
import { useLocalization } from '../../core/localization/LocalizationProvider'

const doctors = [
    { id: 'partha', name: 'common.drParthaPratimPaul', image: parthaPhoto, description: 'about.drParthaPratimPaulTestimonial', position: 'center' },
    { id: 'banya', name: 'common.drBanyaGhoshPaul', image: banyaPhoto, description: 'about.drBanyaGhoshPaulTestimonial', position: '35% center' },
]

function AboutUs() {
    const { t } = useLocalization()
    const [selectedDoctor, setSelectedDoctor] = useState(null)

    return (
        <div id="about" className="aboutUsDiv">
            <div className="aboutUsText">
                <div className="firstLine" />
                <h2>{t('common.aboutUs')}</h2>
                <div className="lastLine" />
            </div>
            <div className="aboutDescription">
                <p>{t('about.aboutDescription')}</p>
            </div>
            <div className="doctorProfiles" data-selected={selectedDoctor ?? 'none'}>
                {doctors.map(doctor => {
                    const expanded = selectedDoctor === doctor.id
                    return (
                        <article key={doctor.id} className="doctorProfile" data-expanded={expanded}>
                            <button type="button" className="doctorProfileSelect"
                                aria-expanded={expanded}
                                aria-controls={`profile-details-${doctor.id}`}
                                onClick={() => setSelectedDoctor(expanded ? null : doctor.id)}>
                                <img src={doctor.image} alt="" style={{ objectPosition: doctor.position }} />
                                <h3>{t(doctor.name)}</h3>
                            </button>
                            <div className="doctorProfileDetails" id={`profile-details-${doctor.id}`}
                                aria-hidden={!expanded} inert={!expanded}>
                                <div className="doctorProfileDetailsInner">
                                    <h3>{t(doctor.name)}</h3>
                                    <p className="doctorProfileCredentials">{t('common.degree')}</p>
                                    <p>{t(doctor.description)}</p>
                                </div>
                            </div>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default AboutUs
