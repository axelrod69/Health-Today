import '../styles/home.css'
import Button from './Button'
import Shape from './Shape'

function Home() {
    return (
        <>
            <div className="home">
                <div className="firstSection">
                    <div className='textBlock'>
                        <h1>Better care for your health</h1>
                        <p>The health and well-being of our patients will always be our priority. We follow the best practices for cleanliness</p>
                    </div>
                    <div className='buttonBloc'>
                        <Button label="View our services" />
                        <Button label="Emergency" />
                    </div>
                </div>
                <div className="secondSection">
                </div>
                <Shape />
            </div>
        </>
    );
}

export default Home