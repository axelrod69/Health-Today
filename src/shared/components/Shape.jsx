import '../styles/shape.css'

function Shape({ style, children }) {
    return (
        <>
            <div className='shapeDiv'
                style={style}
            >{children}</div>
        </>
    );
}

export default Shape
