import '../styles/aboutUs.css'
import '../styles/speciality.css'
import '../styles/doctorProfiles.css'
import { useState } from 'react'
import parthaPhoto from '../../assets/images/about-partha.jpeg'
import banyaPhoto from '../../assets/images/about-banya.jpg'
import { useLocalization } from '../../core/localization/LocalizationProvider'

const doctors = [
    { id: 'partha', name: 'common.drParthaPratimPaul', image: parthaPhoto, description: 'about.drParthaPratimPaulTestimonial', position: 'center', credentials: ['BHMS(Cal)', 'Reg No - 25425(WBHMC)', 'Ex-house Physician, MBH Medical College and Hospital'] },
    { id: 'banya', name: 'common.drBanyaGhoshPaul', image: banyaPhoto, description: 'about.drBanyaGhoshPaulTestimonial', position: '35% center', credentials: ['BHMS(Cal)', 'Reg No - 25486(WBHMC)', 'Ex-house Physician, Mahesh Bhattacharyya Homoeopathic Medical College and Hospital'] },
]

function DoctorCredentials({ lines }) {
    return <span className="doctorProfileCredentials">
        {lines.map(line => <span key={line}>{line}</span>)}
    </span>
}

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
                                aria-label={t(doctor.name)}
                                aria-controls={`profile-details-${doctor.id}`}
                                onClick={() => setSelectedDoctor(expanded ? null : doctor.id)}>
                                <img src={doctor.image} alt="" style={{ objectPosition: doctor.position }} />
                                <span className="doctorProfileCaption">
                                    <span className="doctorProfileCaptionInner">
                                        <span className="doctorProfileName">{t(doctor.name)}</span>
                                        <DoctorCredentials lines={doctor.credentials} />
                                    </span>
                                </span>
                            </button>
                            <div className="doctorProfileDetails" id={`profile-details-${doctor.id}`}
                                aria-hidden={!expanded} inert={!expanded}>
                                <div className="doctorProfileDetailsInner">
                                    <h3>{t(doctor.name)}</h3>
                                    <DoctorCredentials lines={doctor.credentials} />
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
