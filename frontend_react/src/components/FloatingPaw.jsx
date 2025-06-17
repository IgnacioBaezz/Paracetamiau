export default function FloatingPaw() {
  const handleClick = () => {
    const encouragements = [
      "¡Tú puedes hacerlo!",
      "¡Un día a la vez!",
      "¡Cuidarte es importante!",
      "¡Sigue así, campeón(a)!",
      "¡Tu bienestar importa!",
      "¡No tienes que ser perfecto(a), tienes que ser tú!",
    ];
    const msg = encouragements[Math.floor(Math.random() * encouragements.length)];
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
  };

  return <div className="floating-paw" onClick={handleClick}>🐾</div>;
}


