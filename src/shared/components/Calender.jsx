import '../styles/calender.css'
import CalenderIcon from '../../assets/icons/calendar-icon.svg?react'
import Clock from '../../assets/icons/clock.svg?react'
import { useEffect, useState } from 'react';
import getScreenSize from '../hooks/useScreenSize'
import { useLocalization } from '../../core/localization/LocalizationProvider';

function Calender() {
    const [timings, setTimings] = useState([])
    const { isMobile, isTablet, isLaptop } = getScreenSize()
    const { t, locale } = useLocalization()

    const schedule = [
        { "day": t("calender.monday"), "timeMorning": t("calender.openingTime"), "timeEvening": t("calender.closingTime") },
        { "day": t("calender.tuesday"), "timeMorning": t("calender.openingTime"), "timeEvening": t("calender.closingTime") },
        { "day": t("calender.wednesday"), "timeMorning": t("calender.openingTime"), "timeEvening": t("calender.closingTime") },
        { "day": t("calender.thursday"), "timeMorning": t("calender.openingTime"), "timeEvening": t("calender.closingTime") },
        { "day": t("calender.friday"), "timeMorning": t("calender.openingTime"), "timeEvening": t("calender.closingTime") },
        { "day": t("calender.saturday"), "timeMorning": t("calender.closed"), "timeEvening": t("calender.closingTime") },
        { "day": t("calender.sunday"), "timeMorning": t("calender.openingTime"), "timeEvening": t("calender.closed") },
    ];

    useEffect(() => {
        setTimings(schedule)
    }, [locale])

    return (
        <>
            <div className='calenderDiv'>
                <h2>{t("calender.timings")}</h2>
                <div className='timings'>
                    {timings.map((value) => (
                        <div>
                            <div>
                                <div><CalenderIcon height={isMobile ? 40 : 50} width={isMobile ? 40 : 50} /></div>
                                <div>
                                    {value['day']}
                                </div>
                            </div>
                            <div>
                                <div>
                                    <div>
                                        {value['timeMorning']}
                                    </div>
                                    <div>
                                        {value['timeEvening']}
                                    </div>
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