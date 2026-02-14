import '../styles/speciality.css'
import ServicesCard from './ServicesCard'
import Button from './Button';

function Speciality() {
    return (
        <>
            <div className="specialityDiv">
                <div className='headerText'>
                    <div className='firstLine'></div>
                    <h2>Our Services</h2>
                    <div className='lastLine'></div>
                </div>
                <h2>Common Specialities</h2>
                <div className='servicesFlex'>
                    <ServicesCard serviceText='Treatment 1' />
                    <ServicesCard serviceText='Treatment 1' />
                    <ServicesCard serviceText='Treatment 1' />
                    <ServicesCard serviceText='Treatment 1' />
                </div>
                <div className='servicesDescription'>
                    <div className='firstDescriptionSection'>
                        <p>Caring For The Health And Well Being Of You And You Family.</p>
                    </div>
                    <div className='secondDescriptionSection'>
                        <p>We provide all aspects of medical practice for your whole family, including general check-ups or assisting you with specific injuries.</p>
                        <div className='secondDescription'>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                        <div className='buttonSection'>
                            <Button label="More About Us" variant="outline"/>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Speciality