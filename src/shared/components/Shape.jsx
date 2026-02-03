import '../styles/shape.css'

function Shape({ style }) {
    return (
        <>
            <div className='shapeDiv'
                style={style}
            ></div>
        </>
    );
}

export default Shape