import { useEffect, useState } from "react";
import { createApiInstance } from "../api/axiosConfig.js";
import { useAuth } from "../../context/AuthContext";

function obtenerMomentoDelDia() {
  const hora = new Date().getHours();
  if (hora >= 6 && hora < 12) return "manana";
  if (hora >= 12 && hora < 18) return "tarde";
  return "noche";
}

export default function Emociones({
  nota,
  setNota,
  selectedMood,
  setSelectedMood,
}) {
  const { user } = useAuth();
  const [yaRegistrado, setYaRegistrado] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const momento = obtenerMomentoDelDia();

  useEffect(() => {
    const api = createApiInstance();
    const verificarRegistro = async () => {
      try {
        const res = await api.get(`/emociones/?momento=${momento}`);
        if (res.data.length > 0) {
          setYaRegistrado(true);
        }
      } catch (error) {
        console.error("Error verificando estado:", error);
      }
    };

    verificarRegistro();
  }, [momento]);

  const handleMoodClick = async (mood) => {
    const api = createApiInstance();
    setSelectedMood(mood);

    try {
      await api.post("/emociones/", {
        emocion: mood,
        nota: nota,
        momento: momento,
      });
      setYaRegistrado(true);
      setMensaje("¡Estado de ánimo registrado!");
      setNota("");
    } catch (error) {
      console.error("Detalle del error:", error.response?.data);
      if (error.response?.status === 400) {
        setMensaje("Ya registraste una emoción en este momento del día.");
        setYaRegistrado(true);
      } else {
        setMensaje("Ocurrió un error al registrar.");
      }
    }
  };

  if (yaRegistrado) {
    return (
      <div className="mood-section text-center">
        <p className="text-green-700 font-semibold">
          Ya registraste tu estado de ánimo para el momento:{" "}
          <strong>{momento}</strong>.
        </p>
        {mensaje && <p className="text-sm text-gray-600 mt-2">{mensaje}</p>}
      </div>
    );
  }

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
          { id: "calma", img: "Calma.svg" },
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
      {mensaje && <p className="text-sm text-center mt-3">{mensaje}</p>}
    </div>
  );
}
