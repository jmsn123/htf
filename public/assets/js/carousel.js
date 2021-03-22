const track = document.querySelector(".carouselTrack")
const leftBtn = document.querySelector(".carouselBtnLeft")
const rightBtn = document.querySelector(".carouselBtnRight")
const slides = Array.from(track.children)
const dotsContainer = document.querySelector(".carouselNav")
const dots = Array.from(dotsContainer.children);

const container = slides[0].getBoundingClientRect().width

const setWidth = (item, i) => {
    item.style.left = container * i + "px";
}
const arrowsPrese = (slide, target, prev, next) => {
    if (target === 0) {
        prev.classList.add("is-hidden")
        next.classList.remove("is-hidden")
        console.log("run12");
    } else if (target === slide.length - 1) {
        next.classList.add("is-hidden")
        prev.classList.remove("is-hidden")

    } else {
        prev.classList.remove("is-hidden")
        next.classList.remove("is-hidden")
        console.log("We are in the else ");
    }
}
slides.forEach(setWidth)
const navButtons = (elem, current, target) => {
    elem.style.transform = `translateX(-${target.style.left})`
    current.classList.remove("currentSlide");
    target.classList.add("currentSlide")
}
const updateDots = (target, current) => {
    current.classList.remove("active")
    target.classList.add("active")
}
leftBtn.addEventListener("click", function(e) {
    const currentSlide = track.querySelector(".currentSlide")
    const currentDot = dotsContainer.querySelector(".active")
    const prev = currentDot.previousElementSibling
    const preSlide = currentSlide.previousElementSibling
    const prevIndex = slides.findIndex(slide => slide === preSlide)
    navButtons(track, currentSlide, preSlide)
    updateDots(prev, currentDot)
    console.log(prevIndex);
    arrowsPrese(slides, prevIndex, leftBtn, rightBtn)
    console.log("run");


})
rightBtn.addEventListener("click", function(e) {
    const currentSlide = track.querySelector(".currentSlide")
    const currentDot = dotsContainer.querySelector(".active")
    const next = currentDot.nextElementSibling
    const slidess = currentSlide.nextElementSibling
    const targetIndex = slides.findIndex(slide => slide === slidess)

    const nextSlide = currentSlide.nextElementSibling
    navButtons(track, currentSlide, nextSlide)
    updateDots(next, currentDot)
    arrowsPrese(slides, targetIndex, leftBtn, rightBtn)

})

dots.forEach((dot, i) => {
    dot.addEventListener("click", e => {
        const target = e.target
        const current = track.querySelector(".currentSlide")
        const currentDot = dotsContainer.querySelector(".active")
        const targetIndex = dots.findIndex(dot => dot == target)
        const targetSlide = slides[targetIndex];
        navButtons(track, current, targetSlide)
        updateDots(target, currentDot)
        arrowsPrese(slides, targetIndex, leftBtn, rightBtn)


    })

})