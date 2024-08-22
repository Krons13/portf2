function testWebP(callback) {var webP = new Image();webP.onload = webP.onerror = function () { callback(webP.height == 2); }; webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";}testWebP(function (support) {if (support == true) { document.querySelector('body').classList.add('webp'); }else{ document.querySelector('body').classList.add('no-webp'); }});


function navbarFunc() {
   const toggleButton = document.querySelector('.toggle-menu')
const navBar = document.querySelector('.nav-bar')

toggleButton.addEventListener('click', function () {
    navBar.classList.toggle('toggle')
}) 
}

navbarFunc() 

function changeIcon() {
    const icons = document.querySelectorAll('.product__icon')

icons.forEach(icon => {
    icon.addEventListener('click', () => {
        icon.classList.toggle('delete')
        if(icon.classList.contains('delete')) {
            icon.innerHTML = '&minus;'
        } else {
            icon.innerHTML = '&plus;'
        }
    })
})
}
changeIcon()

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

})

function scrollToTop () {
    const topArrow = document.querySelector('.top')

    window.addEventListener('scroll', () => {
        if(window.pageYOffset > window.innerHeight) {
            topArrow.style.opacity = '1'
        } else {
            topArrow.style.opacity = '0'
        }
    })

    topArrow.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    })
}
scrollToTop()

