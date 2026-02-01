import '../styles/button.css'

function Button({ icon, label, functionality }) {
    return (
        <>
            <button className="buttonClass" onClick={functionality}>{icon ? (<div>
                <span>{icon}</span>
                <span>{label}</span>
            </div>) : (<span>{label}</span>)}</button>
        </>
    );
}

export default Button