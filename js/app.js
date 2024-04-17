gsap.registerPlugin(Flip);

const links = document.querySelectorAll(".nav-item a");
const activeNav = document.querySelector(".active-nav");

links.forEach((link) =>{
    link.addEventListener('click', () =>{
        gsap.to(links, {color:"rgb(255, 255, 255)"});

        if(document.activeElement === link){
            gsap.to(link, {color:"rgb(255, 219, 219)"})
        }

    const state = Flip.getState(activeNav);
    link.appendChild(activeNav);
    Flip.from(state, {
        duration: 0.5,
        absolute:true,
    })
    });
})