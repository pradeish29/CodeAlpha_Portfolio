let menu = document.querySelector('#menu');
let navbar= document.querySelector('.navbar');

function calculate(){
    menu.classList.toggle('fa-solid fa-xmark');
    navbar.classList.toggle('active'); 
}
window.onscroll=()=>{
    sections.forEach(sec =>{
        let top= window.screenY;
        let offset = sec.offsetTop-100;
        let height = sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top>= offset && top < offset+height){
            navlinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id+']').classList.add('active');
            });
        }

    });
}
