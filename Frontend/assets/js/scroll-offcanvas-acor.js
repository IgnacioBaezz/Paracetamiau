// Función que controla la apertura del panel del acordeón
function expandAccordion(collapseId, sectionId) {
    // 1. Busca todos los paneles del acordeón que pueden estar abiertos
    const allPanels = document.querySelectorAll('.accordion-collapse');
  
    // 2. Cierra todos los paneles removiendo la clase 'show' (que los mantiene abiertos)
    allPanels.forEach(panel => panel.classList.remove('show'));
  
    // 3. Busca el panel específico que debe abrirse (por ejemplo: 'collapseTwo')
    const targetPanel = document.getElementById(collapseId);
  
    // 4. Si se encontró el panel, le agrega la clase 'show' para abrirlo
    if (targetPanel) {
      targetPanel.classList.add('show');
    }
  
    // 5. Busca la sección general del tema (por ejemplo: 'convulsiones') para hacer scroll
    const section = document.getElementById(sectionId);
  
    // 6. Si la sección existe, se hace scroll suave hacia ella
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  
  // Función que se ejecuta cuando se hace clic en el menú del offcanvas móvil
  function handleOffcanvasClick(collapseId, sectionId) {
    // 1. Obtiene la instancia del componente Bootstrap Offcanvas
    const offcanvas = bootstrap.Offcanvas.getInstance(document.getElementById('sidebarMenu'));
  
    // 2. Si existe, lo cierra (es decir, oculta el menú lateral móvil)
    if (offcanvas) {
      offcanvas.hide();
    }
  
    // 3. Espera 300 milisegundos para que el menú termine de cerrarse antes de expandir el acordeón
    // Esto evita conflictos visuales o que el scroll no funcione
    setTimeout(() => {
      expandAccordion(collapseId, sectionId); // Llama a la función anterior
    }, 300);
  }
  