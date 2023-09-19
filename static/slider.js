const slides = document.querySelectorAll(".slide")
const length = slides.length-1
var counter = 0

slides.forEach(
    (slide, index)=>{
        slide.style.left = `${index * 100}%`
    }
)

const goPrev = ()=>{
    counter--;
    slideImage();
}

const goNext = ()=>{
    counter++;
    slideImage();
}

const slideImage = ()=>{
    slides.forEach(
        (slide)=>{
            if(counter > length){
                counter = 0
            }
            if(counter < 0){
                counter = 0
            }
            slide.style.transform = `translateX(-${counter * 100}%)`
        }
    )
}