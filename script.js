const body= document.body
const slides=document.querySelectorAll('.slider')
const leftBtn= document.getElementById('left')
const rightBtn=document.getElementById('right')

let activesSlider = 0

rightBtn.addEventListener('click',()=>{

    activesSlider++

    if(activesSlider > slides.length - 1){
        activesSlider = 0
    }

    setBgToBoady()
    setActiveSlide()

})

leftBtn.addEventListener('click',()=>{

    activesSlider--

    if(activesSlider < 0){
        activesSlider = slides.length - 1
    }

    setBgToBoady()
    setActiveSlide()

})


setBgToBoady()

function setBgToBoady(){
    body.style.backgroundImage = slides[activesSlider].style.backgroundImage
}

function setActiveSlide(){
    slides.forEach(slider =>
        slider.classList.remove('active'))
        slides[activesSlider].classList.add('active')
}