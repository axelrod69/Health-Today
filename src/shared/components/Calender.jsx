import '../styles/calender.css'
import CalenderIcon from '../../assets/icons/calendar-icon.svg?react'
import { useEffect, useState } from 'react';

function Calender() {
    const [timings, setTimings] = useState([])

    const schedule = [
        { "day": "Monday", "timeMorning": "9:30 AM - 02:30 PM", "timeEvening": "06:00 PM - 10:00 PM" },
        { "day": "Tuesday", "timeMorning": "9:30 AM - 02:30 PM", "timeEvening": "06:00 PM - 10:00 PM" },
        { "day": "Wednesday", "timeMorning": "9:30 AM - 02:30 PM", "timeEvening": "06:00 PM - 10:00 PM" },
        { "day": "Thursday", "timeMorning": "9:30 AM - 02:30 PM", "timeEvening": "06:00 PM - 10:00 PM" },
        { "day": "Friday", "timeMorning": "9:30 AM - 02:30 PM", "timeEvening": "06:00 PM - 10:00 PM" },
        { "day": "Saturday", "timeMorning": "", "timeEvening": "06:00 PM - 10:00 PM" },
        { "day": "Sunday", "timeMorning": "9:30 AM - 02:30 PM", "timeEvening": "" },
    ];

    useEffect(() => {
        setTimings(schedule)
    }, [])

    return (
        <>
            <div className='calenderDiv'>
                <h2>Timings</h2>
                <div className='timings'>
                    {timings.map((value) => (
                        <div>
                            <div>
                                <div><CalenderIcon className="calenderIcon" height={40} width={40} /></div>
                                <div>{value['day']}</div>
                            </div>
                            <div>
                                <div>{!value['timeMorning'] ? '-' : value['timeMorning']}</div>
                                <div>{!value['timeEvening'] ? '-' : value['timeEvening']}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Calender