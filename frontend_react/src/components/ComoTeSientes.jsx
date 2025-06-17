import { useState, useEffect } from "react";
import { createApiInstance } from "../api/axiosConfig.js"; 

export default function ComoTeSientes() {
  const [nota, setNota] = useState("");
  const [selectedMood, setSelectedMood] = useState(null);

  const handleMoodClick = async (mood) => {
    const api = createApiInstance("http://localhost:8000/api"); 

    setSelectedMood(mood);

    try {
      const response = await api.post("/emociones/entradas/", {
        emocion: mood,
        nota: nota,
        momento: "mañana", 
      });
      console.log("Emoción guardada con éxito:", response.data);
    } catch (error) {
      console.error("Error al guardar la emoción:", error);
    }
  };

  return (
    <div className="mood-section">
      <div className="mood-title">¿Cómo te sientes hoy?</div>
      <textarea
        className="form-control"
        rows="3"
        value={nota}
        onChange={(e) => setNota(e.target.value)}
        placeholder="Escribe cómo te sientes, luego selecciona el emoji..." 
      />
      <div className="mood-icons">
        {[
          { id: "feliz", img: "feliz.svg", alt: "Gato feliz" },
          { id: "calmado", img: "Calma.svg", alt: "Gato calmado" },
          { id: "neutral", img: "Neutral.svg", alt: "Gato neutral" },
          { id: "triste", img: "Tristeza.svg", alt: "Gato triste" },
          { id: "ansioso", img: "Ansiedad.svg", alt: "Gato ansioso" },
          { id: "enojado", img: "Enojo.svg", alt: "Gato enojado" },
        ].map(({ id, img, alt }) => (
          <div
            key={id}
            className={`mood-icon ${selectedMood === id ? "active" : ""}`}
            onClick={() => handleMoodClick(id)}
          >
            <img src={`../src/assets/img/${img}`} alt={alt} width="40px" />
          </div>
        ))}
      </div>
    </div>
  );
}