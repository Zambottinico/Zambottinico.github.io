


$(document).ready(function() {
    // Cerrar el menú al hacer clic en un enlace
    $('.navbar-nav a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });
});



const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        const id = entry.target.getAttribute("id");
        const menuLink = document.querySelector(`.menu a[href="#${id}"]`)

            if (entry.isIntersecting) {
            menuLink.classList.add("active");
        }else{
            menuLink.classList. remove("active");
        }


    })
},{rootMargin:"-70% 0px -25% 0px"})
const menuLinks =document.querySelectorAll(`.menu a[href^="#"]`);    


menuLinks.forEach(menuLink=>{
    const hash = menuLink.getAttribute("href");
    const target =document.querySelector(hash);
    if (target) {
     observer.observe(target);
    }
})


//animaciones


console.log("no hagas click 100 veces en el logo");

const logo = document.getElementById("logo");

let puntos =0;
logo.addEventListener("click",()=>{
    puntos++;
    if (puntos==5) {
        console.log("no hagas eso")
    }
    if (puntos==20) {
        console.log("Te dije que no lo hagas!");
    }
    if (puntos==50) {
        console.log("%cENSERIO TE PIDO QUE NO SIGAS!", "color: red");
    }
    if (puntos==70) {
        console.log("%c AUN ESTAS A TIEMPO DE FRENAR", "color: red;font-size:20px");
    }
 
    if (puntos==100) {
        console.log("%c Κυριολεκτικά μόλις έχασες 100 κλικ από τη ζωή σου","color:green")
    }
})

