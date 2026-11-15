import '../styles/calender.css'
import CalenderIcon from '../../assets/icons/calendar-icon.svg?react'
import Clock from '../../assets/icons/clock.svg?react'
import { useState } from 'react';
import { doctorTimings } from '../../data/doctorTimings';
import getScreenSize from '../hooks/useScreenSize'
import { useLocalization } from '../../core/localization/LocalizationProvider';

function Calender() {
    const [selectedDoctor, setSelectedDoctor] = useState('partha')
    const { isMobile } = getScreenSize()
    const { t } = useLocalization()
    const doctor = doctorTimings[selectedDoctor]

    const closed = selectedDoctor === 'banya' ? null : t('calender.closed')
    const timings = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'].map(day => {
        const [morning, evening] = doctor.days[day] ?? doctor.weekday
        return {
            key: day,
            day: t(`calender.${day}`),
            timeMorning: morning ?? closed,
            timeEvening: evening ?? closed,
        }
    })

    const handleTabKey = (event, id) => {
        let next
        if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') next = id === 'partha' ? 'banya' : 'partha'
        if (event.key === 'Home') next = 'partha'
        if (event.key === 'End') next = 'banya'
        if (!next) return
        event.preventDefault()
        setSelectedDoctor(next)
        document.getElementById(`timings-tab-${next}`).focus()
    }

    return (
        <>
            <div className='calenderDiv'>
                <h2 id="timings-title">{t("calender.timings")}</h2>
                <div className="doctorTimingTabs" role="tablist" aria-labelledby="timings-title">
                    {Object.entries(doctorTimings).map(([id, value]) => (
                        <button key={id} type="button" role="tab"
                            id={`timings-tab-${id}`}
                            aria-selected={selectedDoctor === id}
                            aria-controls="doctor-timings-panel"
                            tabIndex={selectedDoctor === id ? 0 : -1}
                            onClick={() => setSelectedDoctor(id)}
                            onKeyDown={event => handleTabKey(event, id)}>
                            {t(value.name)}
                        </button>
                    ))}
                </div>
                <div className='timings' id="doctor-timings-panel" role="tabpanel"
                    aria-labelledby={`timings-tab-${selectedDoctor}`} tabIndex={0}>
                    {timings.map((value) => (
                        <div key={value.key}>
                            <div>
                                <div><CalenderIcon height={isMobile ? 40 : 50} width={isMobile ? 40 : 50} /></div>
                                <div>
                                    {value['day']}
                                </div>
                            </div>
                            <div>
                                <div>
                                    {value.timeMorning && <div>{value.timeMorning}</div>}
                                    {value.timeEvening && <div>{value.timeEvening}</div>}
                                </div>
                                <div>
                                    <Clock height={isMobile ? 20 : 30} width={isMobile ? 20 : 30}/>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Calender
