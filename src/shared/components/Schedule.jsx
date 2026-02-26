import '../styles/schedule.css'
import AddressCard from './AddressCard';
import Calender from './Calender';
import ImageOne from '../../assets/images/5080895.jpg'
import ImageTwo from '../../assets/images/6071562.jpg'
import ImageThree from '../../assets/images/7704972.jpg'

function Schedule() {
    return (
        <>
            <div className='scheduleDiv'>
                <div className='firstScheduleDiv'>
                    <AddressCard image={ImageOne} />
                    <AddressCard image={ImageTwo} />
                    <AddressCard image={ImageThree} />
                </div>
                <div className='secondScheduleDiv'>
                    <p>A great system application for hospital center & health care</p>
                    <div className='secondParagraph'>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                    <Calender />
                </div>
            </div>
        </>
    );
}

export default Schedule