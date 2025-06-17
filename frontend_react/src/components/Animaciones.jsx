import { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import "../styles/DiarioContenido.css";

export default function Animaciones() {
  const [habits, setHabits] = useState({
    water: false,
    exercise: false,
    sleep: false,
  });

  const totalHabits = 3;
  const completedHabits = Object.values(habits).filter(Boolean).length;
  const [activeDay, setActiveDay] = useState(18);

  const messages = [
    "¡Comienza tu día saludable!",
    "¡Buen comienzo! Sigue así",
    "¡Casi lo logras! Un paso más",
    "¡Felicitaciones! Día perfecto 🎉",
  ];

  useEffect(() => {
    if (completedHabits === totalHabits) {
      celebrate();
    }
  }, [completedHabits]);

  const toggleHabit = (habitKey) => {
    setHabits((prev) => ({
      ...prev,
      [habitKey]: !prev[habitKey],
    }));
  };

  const handleDayClick = (index) => {
    setActiveDay(index);
  };

  const celebrate = () => {
    for (let i = 0; i < 80; i++) {
      confetti({
        particleCount: 1,
        angle: Math.random() * 360,
        spread: 60,
        origin: { x: Math.random(), y: Math.random() - 0.2 },
        colors: [
          "#ff6f61",
          "#ffa29a",
          "#ffc8c3",
          "#c3e8ea",
          "#9acbd0",
          "#47bfcc",
        ],
      });
    }
    if (navigator.vibrate) navigator.vibrate([200, 100, 200]);
  };

  return (
    <>
      <div className="row align-items-center">
        {/* Calendario */}
        <div className="col-10 col-md-5">
          <div className="calendar-card">
            <div className="calendar-title">Calendario de bienestar</div>
            <div className="calendar-grid">
              {["D", "L", "M", "MI", "J", "V", "S"].map((d) => (
                <div className="calendar-day-header" key={d}>
                  {d}
                </div>
              ))}
              {[
                ...["29", "30", "31"].map((d) => ({ day: d, other: true })),
                ...Array.from({ length: 31 }, (_, i) => ({ day: i + 1 })),
                ...["1", "2"].map((d) => ({ day: d, other: true })),
              ].map((obj, idx) => (
                <div
                  key={idx}
                  className={`calendar-day ${obj.other ? "other-month" : ""} ${
                    activeDay === idx ? "active" : ""
                  }`}
                  onClick={() => handleDayClick(idx)}
                >
                  {obj.day}
                </div>
              ))}
            </div>
          </div>

          {/* Progreso */}
          <div className="progress-card pb-2 mb-3">
            <div className="progress-title">Progreso del Día</div>
            <div className="progress-bar">
              <div
                className="progress-bar::before"
                style={{
                  width: `${(completedHabits / totalHabits) * 100}%`,
                }}
              />
              <div className="progress-text">{`${completedHabits}/${totalHabits}`}</div>
            </div>
            <div id="progressMessage">{messages[completedHabits]}</div>
          </div>
        </div>

        {/* Sección de emociones y hábitos */}
        {/* Eliminamos toda la sección de Emociones de aquí */}
        <div className="col-10 col-md-5">
          {/* Hábitos */}
          <div className="habits-section mb-5">
            <div className="habits-section mb-5">
              {[
                {
                  key: "water",
                  text: "¿Ya bebí agua?",
                  icon: "vaso-vector.svg",
                },
                {
                  key: "exercise",
                  text: "¿Ya hice ejercicio?",
                  icon: "pesa-vector.svg",
                },
                {
                  key: "sleep",
                  text: "¿Dormi 8 horas?",
                  icon: "dormir-vector.svg",
                },
              ].map(({ key, text, icon }) => (
                <div
                  key={key}
                  className={`habit-item ${key}`}
                  onClick={() => toggleHabit(key)}
                >
                  <div className="habit-icon">
                    <img
                      src={`../src/assets/img/${icon}`}
                      alt={text}
                      width={40}
                    />
                  </div>
                  <div className="habit-text">{text}</div>
                  <div
                    className={`habit-toggle ${habits[key] ? "active" : ""}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Icono flotante */}
      <div
        className="floating-paw"
        onClick={() => {
          const encouragements = [
            "¡Tú puedes hacerlo!",
            "¡Un día a la vez!",
            "¡Cuidarte es importante!",
            "¡Sigue así, campeón(a)!",
            "¡Tu bienestar importa!",
            "¡No tienes que ser perfecto(a), tienes que ser tú!",
          ];
          const msg =
            encouragements[Math.floor(Math.random() * encouragements.length)];
          const div = document.createElement("div");
          div.style.cssText = `
            position: fixed;
            margin-bottom: 10px;
            bottom: 90px;
            right: 20px;
            background: var(--color2);
            color: white;
            padding: 10px 15px;
            border-radius: 20px;
            font-size: 0.9rem;
            z-index: 1001;
            animation: fadeInOut 3s ease;
            box-shadow: 0 5px 15px rgba(255,111,97,0.4);
          `;
          div.textContent = msg;
          document.body.appendChild(div);
          setTimeout(() => document.body.removeChild(div), 1000);
        }}
      >
        🐾
      </div>
    </>
  );
}