const d = document; 
let animado = d.querySelectorAll(".animado"); 

function mostrarScroll() {
    let scrollTop = d.documentElement.scrollTop; 
    for (let i = 0; i < animado.length; i++){
        let alturaAnimado = animado[i].offsetTop; 
        if(alturaAnimado - 700 < scrollTop) {
            animado[i].style.opacity = 1; 
            animado[i].classList.add("mostrarArriba");
        }
    }
}

window.addEventListener('scroll', mostrarScroll); 