// Function to navigate to specific sections
function navigateTo(sectionId) {
  // Hide all sections
  const sections = document.querySelectorAll('.section');
  sections.forEach((section) => {
      section.style.display = 'none'; // Hide all sections
  });

  // Show the selected section
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
      targetSection.style.display = 'block'; // Show the selected section
  }
}