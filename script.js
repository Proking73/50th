h = document.querySelector(".happy");
d = document.querySelector(".gold");
b = document.querySelector(".birthday");
a = document.querySelector("header::after");

document.addEventListener('scroll', () => {
    //if variable animation computed style
    var reveals = document.querySelectorAll(".reveal")
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
});