const slides = document.querySelector(".slides");

// clone first slide and add to end
const firstClone = slides.children[0].cloneNode(true);
slides.appendChild(firstClone);

let index = 0;

setInterval(() => {
    index++;
    slides.style.transition = "0.5s ease";
    slides.style.transform = `translateX(-${index * 900}px)`;
    if(index === slides.children.length - 1){
        setTimeout(() => {
            slides.style.transition = "none";
            index = 0;
            slides.style.transform = `translateX(0px)`;
        }, 500);
    }
}, 3000);