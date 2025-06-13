import { useEffect, useRef, useState } from "react";
import "./SeccionParacetaMiau.css";
import logo from "../assets/img/logo-app.png"; // logo ParacetaMiau
import Candado from "../assets/img/candado.png"; 

const ContenidoIndex = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true);
    });

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`seccion-index container my-5 ${visible ? "show" : ""}`}
    >
      <div className="row align-items-center">
        <div className="col-md-6 text-center mb-4 mb-md-0">
          <img src={logo} alt="Ilustración educativa" className="img-fluid animated-ilustracion" />
        </div>
        <div className="col-md-6 text-center text-md-start">
          <img src={Candado} alt="Logo ParacetaMiau" className="logo-paracetamiau mb-3" />
          <h2 className="fw-bold">
            Aprende <span className="text-primary">primeros auxilios</span> jugando
          </h2>
          <p className="text-secondary">
            ParacetaMiau es tu app educativa donde niños, jóvenes y familias aprenden a actuar frente a emergencias de manera simple, divertida y responsable.
          </p>
          <a href="#quiz-dia" className="btn btn-outline-primary mt-3">
            ¡Comienza ahora!
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContenidoIndex;
