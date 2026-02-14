import '../styles/button.css'

function Button({ icon, label, functionality, variant }) {
    return (
        <>
            <button className={`buttonClass ${variant}`} onClick={functionality}>{icon ? (<div>
                <span>{icon}</span>
                <span>{label}</span>
            </div>) : (<span>{label}</span>)}</button>
        </>
    );
}

export default Button