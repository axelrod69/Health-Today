import '../styles/nameCard.css'
import Shape from './Shape';
import '../styles/shape.css'

function NameCard() {
    return (
        <>
            <div className='nameCard'>
                <Shape style={{
                    backgroundColor: 'white',
                    border: '6px solid rgb(125, 71, 245)',
                    // height: '100%',
                    width: '90px',
                    margin: '8px'
                }}/>
                <div className='nameCardSecond'>
                    <h4>Dr. Partha Pratim Paul</h4>
                    <p>Physician</p>
                </div>
            </div>
        </>
    );
}

export default NameCard