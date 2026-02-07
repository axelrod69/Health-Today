import '../styles/home.css'
import Button from './Button'
import NameCard from './NameCard';
import Shape from './Shape'
import useIsMobile from '../hooks/useIsMobile'

function Home() {
    const isMobile = useIsMobile()

    const Content = (
        <>
            <div className='textBlock'>
                <h1>Better care for your health</h1>
                <p>The health and well-being of our patients will always be our priority. We follow the best practices for cleanliness</p>
            </div>
            <div className='buttonBloc'>
                <Button label="View our services" />
                <Button label="Emergency" />
            </div>
        </>
    )

    return (
        <>
            <div className="home">
                <div className="firstSection">
                    {!isMobile && Content}
                    {isMobile && <NameCard />}
                </div>
                <div className="secondSection">
                    {isMobile && Content}
                    {!isMobile && <NameCard />}
                </div>
                <Shape style={{
                    position: 'absolute',
                    height: '580px',
                    width: '600px',
                    backgroundColor: 'rgba(125, 71, 245, 0.4)',
                    top: '10%',
                    right: '5%'
                }} />
            </div>
        </>
    );
}

export default Home