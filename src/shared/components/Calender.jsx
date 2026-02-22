import '../styles/calender.css'
import CalenderIcon from '../../assets/icons/calendar-icon.svg?react'
import Clock from '../../assets/icons/clock.svg?react'
import Closed from '../../assets/icons/closed.svg?react'
import { useEffect, useState } from 'react';

function Calender() {
    const [timings, setTimings] = useState([])

    const schedule = [
        { "day": "Monday", "timeMorning": "09:30 AM - 02:30 PM", "timeEvening": "06:00 PM - 10:00 PM" },
        { "day": "Tuesday", "timeMorning": "09:30 AM - 02:30 PM", "timeEvening": "06:00 PM - 10:00 PM" },
        { "day": "Wednesday", "timeMorning": "09:30 AM - 02:30 PM", "timeEvening": "06:00 PM - 10:00 PM" },
        { "day": "Thursday", "timeMorning": "09:30 AM - 02:30 PM", "timeEvening": "06:00 PM - 10:00 PM" },
        { "day": "Friday", "timeMorning": "09:30 AM - 02:30 PM", "timeEvening": "06:00 PM - 10:00 PM" },
        { "day": "Saturday", "timeMorning": "Closed", "timeEvening": "06:00 PM - 10:00 PM" },
        { "day": "Sunday", "timeMorning": "09:30 AM - 02:30 PM", "timeEvening": "Closed" },
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
                                <div><CalenderIcon height={50} width={50} /></div>
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
                                    <Clock height={30} width={30}/>
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