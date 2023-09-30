window.addEventListener('load', animation)

function animation(){

    const TL = gsap.timeline({repeat: -1})

    TL 
    .from('.vertical-slider img', {x: 400, autoAlpha: 0, duration: 1, stagger: 1})
    .to('.vertical-slider img', {
        x: -400,
        autoAlpha: 0,
        duration: 1,
        stagger: 1,
        ease: 'cubic-bezier(0.4, 0, 0.6, 1)' // Apply the cubic-bezier easing
    }, 1)

}
