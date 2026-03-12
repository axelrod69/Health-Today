import '../styles/home.css'
import Button from './Button'
import NameCard from './NameCard';
import Shape from './Shape'
import getScreenSize from '../hooks/useScreenSize'

function Home() {

    const { isMobile, isTablet, isLaptop } = getScreenSize()

    const Content = (
        <>
            <div className='textBlock'>
                <h1>Better care for your health</h1>
                <p>The health and well-being of our patients will always be our priority. We follow the best practices for cleanliness</p>
                {/* <div className='buttonBloc'>
                    <Button label="View our services" variant="primary" />
                    <Button label="Emergency" variant="primary" />
                </div> */}
            </div>
            {/* <div className='buttonBloc'>
                <Button label="View our services" variant="primary" />
                <Button label="Emergency" variant="primary" />
            </div> */}
        </>
    )

    const NameCardContainer = (
        <>
            <div className='nameCardContainer' style={{
                position: 'relative',
                top: '35%'
            }}>
                <div>
                    <NameCard name={'Dr. Partha Pratim Paul'} style={{
                        position: 'relative',
                        height: isMobile ? 'auto' : '12vw',
                        width: 'auto',
                        // top: '40%',
                        // left: '21%',
                        zIndex: '100'
                    }} />
                </div>
                <div>
                    <NameCard name={'Dr. Banya Ghosh Paul'} style={{
                        position: 'relative',
                        height: isMobile ? 'auto' : '12vw',
                        width: 'auto',
                        // top: '24.5%',
                        // right: '22%',
                        zIndex: '100'
                    }} />
                </div>
            </div>
        </>
    )

    return (
        <>
            <div className="home">
                <div className="firstSection">
                    {!isMobile && !isTablet && Content}
                    {(isMobile || isTablet) && NameCardContainer}
                    {(isMobile || isTablet) &&
                        <Shape style={{
                            position: 'absolute',
                            top: isMobile ? '18%' : '10%',
                            height: isMobile ? '44vh' : '90vw',
                            width: isMobile ? '80vw' : '90vw',
                            // height: '80%',
                            // width: '80%',
                            backgroundColor: 'rgba(125, 71, 245, 0.4)'
                        }} />
                    }
                </div>
                <div className="secondSection">
                    {!isMobile && !isTablet && <NameCard
                        name={'Dr. Partha Pratim Paul'}
                        style={{
                            position: 'relative',
                            top: '70%',
                            left: '31%',
                            zIndex: '100'
                        }}
                    />}
                    {!isMobile && !isTablet && <NameCard
                        name={'Dr. Banya Ghosh Paul'}
                        style={{
                            position: 'relative',
                            top: '51.4%',
                            right: '30%',
                            zIndex: '100'
                        }}
                    />}
                    {(isMobile || isTablet) && Content}
                </div>
                {!isMobile && !isTablet && (
                    <Shape style={{
                        position: 'absolute',
                        height: isTablet ? '400px' : '580px',
                        width: isTablet ? '400px' : '600px',
                        backgroundColor: 'rgba(125, 71, 245, 0.4)',
                        top: isTablet ? '0' : '10%',
                        right: isTablet ? '0' : '5%'
                    }} />
                )}
            </div>
        </>
    );
}

export default Home