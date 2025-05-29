
function expandAccordion(collapseId, sectionId) {
  // Cierra todos los panels
  const allPanels = document.querySelectorAll('.accordion-collapse');
  allPanels.forEach(panel => panel.classList.remove('show'));

  // Colapsa activamente el que corresponde
  const targetPanel = document.getElementById(collapseId);
  if (targetPanel) {
    targetPanel.classList.add('show');
  }

  // Scroll hacia la sección
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
