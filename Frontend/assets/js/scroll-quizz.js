
  document.querySelectorAll('a.nav-link[href^="#"]').forEach(enlace => {
    enlace.addEventListener('click', function (e) {
      e.preventDefault(); // Detener el comportamiento normal

      const idDestino = this.getAttribute("href").substring(1);
      const destino = document.getElementById(idDestino);
      const contenedor = document.getElementById("contenedor-scroll");

      if (destino && contenedor) {
        const offsetTop = destino.offsetTop;

        contenedor.scrollTo({
          top: offsetTop,
          behavior: "smooth"
        });
      }
    });
  });

