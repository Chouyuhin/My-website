function expandAccordion(header) {
  const accordion = header.closest('.accordion');
  const panel = accordion.querySelector('.panel');
  const chevron = accordion.querySelector('.chevron i');

  const isActive = accordion.classList.contains('active');

  if (isActive) {
    accordion.classList.remove('active');
    panel.style.maxHeight = null;
    chevron.style.transform = 'rotate(0deg)';
  } else {
    accordion.classList.add('active');
    panel.style.maxHeight = panel.scrollHeight + 'px';
    chevron.style.transform = 'rotate(90deg)';
  }
}

// Initialize accordions on page load
document.addEventListener('DOMContentLoaded', function() {
  const activePanels = document.querySelectorAll('.accordion.active');
  activePanels.forEach(accordion => {
    const panel = accordion.querySelector('.panel');
    const chevron = accordion.querySelector('.chevron i');
    if (panel && chevron) {
      panel.style.maxHeight = panel.scrollHeight + 'px';
      chevron.style.transform = 'rotate(90deg)';
    }
  });
});
