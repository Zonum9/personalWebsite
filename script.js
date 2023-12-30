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
          behavior: 'smooth',block: "start"

        });
      });
    });
  //   const cardMenu = document.querySelector('.card-menu');
  //   const toggleButton = document.getElementById('toggleButton');

  //   toggleButton.addEventListener('click', function() {
  //       // Toggle the menu by updating its left position
  //       const menuVisible = cardMenu.style.left === '0px';
  //       cardMenu.style.left = menuVisible ? '-250px' : '0';
  //   });

  //   toggleButton.addEventListener('click', function() {
  //     // Toggle the menu by updating its transform property
  //     const menuVisible = cardsMenu.style.transform === 'translateX(0%)';
  //     cardsMenu.style.transform = menuVisible ? 'translateX(-100%)' : 'translateX(0%)';
  // });
  var age= document.getElementById('age');
  age.innerHTML=age.innerHTML.replace("X",getAge())
});
  
//   document.addEventListener('DOMContentLoaded', function() {
//     const cardsMenu = document.querySelector('.cards-menu');a
//     const toggleButton = document.getElementById('toggleButton');

//     toggleButton.addEventListener('click', function() {
//         // Toggle the menu by updating its transform property
//         const menuVisible = cardsMenu.style.transform === 'translateX(0%)';
//         cardsMenu.style.transform = menuVisible ? 'translateX(-100%)' : 'translateX(0%)';
//     });
// });

function getAge(){
  var today = new Date();
  var age  = today.getFullYear() - 2003;  
  if (today.getMonth() <8 || today.getMonth() == 8 && today.getDate()<2)
    age--;
  return age;

}


