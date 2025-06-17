import { createApiInstance } from "../api/axiosConfig.js";

export default function Emociones({ nota, setNota, selectedMood, setSelectedMood }) {
  const handleMoodClick = async (mood) => {
    const api = createApiInstance("http://localhost:8000/api");
    setSelectedMood(mood);

    try {
      await api.post("/emociones/entradas/", {
        emocion: mood,
        nota: nota,
        momento: "mañana",
      });
    } catch (error) {
      console.error(error);
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
      />
      <div className="mood-icons">
        {[
          { id: "feliz", img: "feliz.svg" },
          { id: "calmado", img: "Calma.svg" },
          { id: "neutral", img: "Neutral.svg" },
          { id: "triste", img: "Tristeza.svg" },
          { id: "ansioso", img: "Ansiedad.svg" },
          { id: "enojado", img: "Enojo.svg" },
        ].map(({ id, img }) => (
          <div
            key={id}
            className={`mood-icon ${selectedMood === id ? "active" : ""}`}
            onClick={() => handleMoodClick(id)}
          >
            <img src={`../src/assets/img/${img}`} alt={id} width="40px" />
          </div>
        ))}
      </div>
    </div>
  );
}
