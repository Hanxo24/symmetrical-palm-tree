document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('.content-section');
    const navLinks = document.querySelectorAll('nav ul li a');

    // Function to show a specific section and hide others
    window.showSection = function (sectionId) {
        sections.forEach(section => {
            section.classList.remove('active');
        });
        const selectedSection = document.getElementById(sectionId);
        if (selectedSection) {
            selectedSection.classList.add('active');
            updateActiveNavLink(sectionId);
        } else {
            console.error(`Section with id "${sectionId}" not found.`);
        }
    };

    // Function to update the active navigation link
    function updateActiveNavLink(sectionId) {
        navLinks.forEach(link => {
            link.removeAttribute('aria-current');
        });
        const activeLink = document.querySelector(`nav ul li a[onclick="showSection('${sectionId}')"]`);
        if (activeLink) {
            activeLink.setAttribute('aria-current', 'page');
        }
    }

    // Show the initial section (e.g., home)
    showSection('home');
});