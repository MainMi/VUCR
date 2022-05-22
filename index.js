let header = document.querySelector('header')
window.addEventListener('scroll' , function() {
    
    header.classList.toggle('scroll', this.pageYOffset > 0)
})

let menuBtn = document.querySelector('.navigationBtn')
let navigation = document.querySelector('.navigation')
menuBtn.addEventListener('click',function() {
    navigation.classList.toggle('clicked')
    menuBtn.classList.toggle('clicked')
    header.classList.toggle('clicked')
})