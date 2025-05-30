import "../styles/Racha.css";

const Racha = () => {
    return (
        <>
        {/* Racha Start */}
        <div className="streak-wrapper pt-3 ">
            <p className="streak-title">
            ¡Llevas <span id="streak-count">2</span> días de Racha!
            </p>
            <div className="streak-days">
            <div className="day completed">✔</div>
            <div className="day completed">✔</div>
            <div className="day">🔒︎</div>
            <div className="day">🔒︎</div>
            <div className="day">🔒︎</div>
            <div className="day">🔒︎</div>
            <div className="day">🔒︎</div>
            </div>
        </div>
        {/* Racha End */}
        </>
)}
export default Racha;