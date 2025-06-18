export default function BarraProgreso({ completedHabits, totalHabits, messages }) {
  const porcentaje = (completedHabits / totalHabits) * 100;

  return (
    <div className="progress-card pb-2 mb-3">
      <div className="progress-title">Progreso del Día</div>
      <div className="progress-bar">
        <div
          className="progress-bar::before"
          style={{ width: `${porcentaje}%` }}
        />
        <div className="progress-text">{`${completedHabits}/${totalHabits}`}</div>
      </div>
      <div id="progressMessage">{messages[completedHabits]}</div>
    </div>
  );
}