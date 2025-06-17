// Estilos generales
import "../styles/styles.css";
import "../styles/variables.css";
import "../styles/backgrounds.css";
import "../styles/DiarioHome.css";
import "../styles/DiarioContenido.css";

// Componentes
import Navbar from "../components/Navbar";
import BotonesMenu from "../components/BotonesMenu";
import Calendario from "../components/Calendario";
import BarraProgreso from "../components/BarraProgreso";
import Emociones from "../components/Emociones";
import Habitos from "../components/Habitos";
import FloatingPaw from "../components/FloatingPaw";


const DiarioContenido = () => {
// React y lógica
import { useState, useEffect } from "react";
import confetti from "canvas-confetti";


//Diario contenido
const DiarioContenido = () => {
  const [habits, setHabits] = useState({
    water: false,
    exercise: false,
    sleep: false,
  });
  const [nota, setNota] = useState("");
  const [selectedMood, setSelectedMood] = useState(null);
  const [activeDay, setActiveDay] = useState(18);

  const totalHabits = 3;
  const completedHabits = Object.values(habits).filter(Boolean).length;

  const messages = [
    "¡Comienza tu día saludable!",
    "¡Buen comienzo! Sigue así",
    "¡Casi lo logras! Un paso más",
    "¡Felicitaciones! Día perfecto 🎉",
  ];

  useEffect(() => {
    if (completedHabits === totalHabits) {
      for (let i = 0; i < 80; i++) {
        confetti({
          particleCount: 1,
          angle: Math.random() * 360,
          spread: 60,
          origin: { x: Math.random(), y: Math.random() - 0.2 },
          colors: ["#ff6f61", "#ffa29a", "#ffc8c3", "#c3e8ea", "#9acbd0", "#47bfcc"],
        });
      }
      if (navigator.vibrate) navigator.vibrate([200, 100, 200]);
    }
  }, [completedHabits]);
  return (
    <>
      <Navbar titulo="Diario Bienestar" mostrarLogout={true} />
      <main className="container-fluid">
        <div className="position-relative">
          <BotonesMenu />
          <div className="col-10">
            <div className="row justify-content-around mt-5 ms-5">
              {/* Columna 1: Calendario y Progreso */}
              <div className="col-12 col-md-6 ">
                <Calendario activeDay={activeDay} setActiveDay={setActiveDay} />
                <BarraProgreso
                  completedHabits={completedHabits}
                  totalHabits={totalHabits}
                  messages={messages}
                />
              </div>

              {/* Columna 2: Emociones y Hábitos */}
              <div className="col-10 col-md-5">
                <Emociones
                  nota={nota}
                  setNota={setNota}
                  selectedMood={selectedMood}
                  setSelectedMood={setSelectedMood}
                />
                
                <Habitos habits={habits} setHabits={setHabits} />
              </div>
            </div>
          </div>

          <FloatingPaw />
        </div>
      </main>
    </>
  );
};
export default DiarioContenido;
