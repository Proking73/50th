h_t = document.querySelector(".happy");
d_a = document.querySelector(".gold");
b_t = document.querySelector(".birthday");
a = window.getComputedStyle(document.querySelector(":root")).getPropertyValue('--arrow');
console.log(a)

document.body.addEventListener('scroll', () => {
    //if variable animation computed style
    var reveals = document.querySelectorAll(".reveal");
    document.querySelector("header").addEventListener('animationend', () => {
      document.querySelector(":root").style.setProperty('--a-state', ' paused');
    });

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 200;
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          //reveals[i].classList.remove("active");
        }
      }
});