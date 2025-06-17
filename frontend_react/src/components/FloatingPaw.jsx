import { useRef } from "react";

export default function FloatingPaw() {
  const msgRef = useRef(null);

  const handleClick = () => {
    const encouragements = [
      "¡Tú puedes hacerlo!",
      "¡Un día a la vez!",
      "¡Cuidarte es importante!",
      "¡Sigue así, campeón(a)!",
      "¡Tu bienestar importa!",
      "¡No tienes que ser perfecto(a), tienes que ser tú!",
    ];

    if (msgRef.current) {
      document.body.removeChild(msgRef.current);
      msgRef.current = null;
    }

    const msg = encouragements[Math.floor(Math.random() * encouragements.length)];

    const div = document.createElement("div");
    div.className = "floating-message";
    


    const bottomValue = window.innerWidth <= 768 ? "180px" : "100px";
    div.style.cssText = `
      position: fixed;
      bottom: ${bottomValue};
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

    msgRef.current = div;

    setTimeout(() => {
      if (msgRef.current === div) {
        
      document.body.removeChild(div);
      msgRef.current = null;
    }
  }, 3000);
  };

  return <div className="floating-paw" onClick={handleClick}>🐾</div>;
}


