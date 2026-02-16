import '../styles/schedule.css'
import Shape from './Shape';
import Calender from './Calender';

function Schedule() {
    return (
        <>
            <div className='scheduleDiv'>
                <div className='firstScheduleDiv'>
                    <Shape style={{
                        // position: 'absolute',
                        height: '480px',
                        width: '480px',
                        backgroundColor: 'rgba(125, 71, 245, 0.4)',
                        top: '10%',
                        right: '5%'
                    }} />
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