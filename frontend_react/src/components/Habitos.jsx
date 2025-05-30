import "../styles/DiarioContenido.css";

const Habitos = () => {
    return (
        <>
  {/* Journal Start */}
  <div className="col-8 col-md-4">
    {/* Mood section */}
    <div className="mood-section">
      <div className="mood-title">¿Como te sientes hoy?</div>
      <textarea className="form-control" rows={3} defaultValue={""} />
      <div className="mood-icons">
        <div className="mood-icon" data-mood="happy" title="Feliz">
          {" "}
          <img src="../src/assets/img/feliz.svg" alt="Feliz" width="40px" />
        </div>
        <div className="mood-icon" data-mood="calm" title="Calmado/a">
          {" "}
          <img src="../src/assets/img/Calma.svg" alt="Calma" width="40px" />
        </div>
        <div className="mood-icon" data-mood="neutral" title="Neutral">
          {" "}
          <img src="../src/assets/img/Neutral.svg" alt="Neutral" width="40px" />
        </div>
        <div className="mood-icon" data-mood="sad" title="Triste">
          {" "}
          <img src="../src/assets/img/Tristeza.svg" alt="" width="40px" />
        </div>
        <div className="mood-icon" data-mood="ansious" title="Ansioso/a">
          {" "}
          <img src="../src/assets/img/Ansiedad.svg" alt="" width="40px" />
        </div>
        <div className="mood-icon" data-mood="angry" title="Enojado/a">
          {" "}
          <img src="../src/assets/img/Enojo.svg" alt="" width="40px" />
        </div>
      </div>
    </div>
    {/* Habits start */}
    <div className="habits-section">
      <div className="habit-item water" onclick="toggleHabit(this, 'water')">
        <div className="habit-icon">
          <img src="../src/assets/img/vaso-vector.svg" alt="vaso-agua" />
        </div>
        <div className="habit-text">¿Ya bebí agua?</div>
        <div className="habit-toggle" id="toggle-water" />
      </div>
      <div
        className="habit-item exercise"
        onclick="toggleHabit(this, 'exercise')"
      >
        <div className="habit-icon">
          <img src="../src/assets/img/pesa-vector.svg" alt="pesa" />
        </div>
        <div className="habit-text">¿Ya hice ejercicio?</div>
        <div className="habit-toggle" id="toggle-exercise" />
      </div>
      <div className="habit-item sleep" onclick="toggleHabit(this, 'sleep')">
        <div className="habit-icon">
          <img src="../src/assets/img/dormir-vector.svg" alt="durmiendo" />
        </div>
        <div className="habit-text">¿Dormi 8 horas?</div>
        <div className="habit-toggle" id="toggle-sleep" />
      </div>
    </div>
  </div>

</>

    )
}

export default Habitos;