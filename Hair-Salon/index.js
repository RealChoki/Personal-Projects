const faqs = document.querySelectorAll(".faq")
var counter = 1
setInterval(function(){
  document.getElementById('radio' + counter).checked = true
  counter++
  if(counter > 4){
    counter = 1
  }
}, 5000)

faqs.forEach(faq => {
  faq.addEventListener("click", ()=> {
    faq.classList.toggle("active")
  })
})

const navSlide = () => {
  const burger = document.querySelector('.burger')
  const nav = document.querySelector('.nav-links')
  const navLinks = document.querySelectorAll('.nav-links li')

  burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active')

      navLinks.forEach((link, index) => {
          if (link.style.animation) {
              link.style.animation = ''
          } else {
              link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
          }
      })

      burger.classList.toggle('toggle')
  })
}

navSlide();


