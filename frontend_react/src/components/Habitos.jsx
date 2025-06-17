export default function Habitos({ habits, setHabits }) {
  const toggleHabit = (key) => {
    setHabits((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="habits-section mb-5">
      {[
        { key: "water", text: "¿Ya bebí agua?", icon: "vaso-vector.svg" },
        { key: "exercise", text: "¿Ya hice ejercicio?", icon: "pesa-vector.svg" },
        { key: "sleep", text: "¿Dormí 8 horas?", icon: "dormir-vector.svg" },
      ].map(({ key, text, icon }) => (
        <div
          key={key}
          className={`habit-item ${key}`}
          onClick={() => toggleHabit(key)}
        >
          <div className="habit-icon">
            <img src={`../src/assets/img/${icon}`} alt={text} width={40} />
          </div>
          <div className="habit-text">{text}</div>
          <div className={`habit-toggle ${habits[key] ? "active" : ""}`} />
        </div>
      ))}
    </div>
  );
}
