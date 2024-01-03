document.addEventListener("DOMContentLoaded", function () {
  var navCategories = document.querySelectorAll('nav a');
  var sections = document.querySelectorAll('section');

  var observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navCategories.forEach(link => link.classList.remove('active'));

        var correspondingLink = document.querySelector(`nav a[href="#${entry.target.id}"]`);
        if (correspondingLink) {
          correspondingLink.classList.add('active');
        }
      }
    });
  }, { threshold: 0.4 });
  sections.forEach(section => observer.observe(section));

  // Smooth scrolling when clicking on navigation links
  navCategories.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      // Remove the 'active' class from all navigation links
      navCategories.forEach(link => {
        link.classList.remove('active');
      });

      // Add the 'active' class to the clicked link
      this.classList.add('active');

      // Scroll to the target section
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth', block: "start"
      });
    });
  });


  var age = document.getElementById('age');
  age.innerHTML = age.innerHTML.replace("X", getAge())
});

function getAge() {
  var today = new Date();
  var age = today.getFullYear() - 2003;
  if (today.getMonth() < 8 || today.getMonth() == 8 && today.getDate() < 2)
    age--;
  return age;

}


