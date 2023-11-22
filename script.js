document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling when clicking on navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
  
        // Remove the 'active' class from all navigation links
        document.querySelectorAll('nav a').forEach(link => {
          link.classList.remove('active');
        });
  
        // Add the 'active' class to the clicked link
        this.classList.add('active');
  
        // Scroll to the target section
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  });
  
  