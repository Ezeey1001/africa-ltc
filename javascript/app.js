// Change Navbar Style Onscroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
})


// For Active Links

const pathName = window.location.pathname;

const pageName = pathName.split("/").pop();

if(pageName === "index.html"){
    document.querySelector(".home").classList.add("activeLink")
}
if(pageName === "index.html"){
    document.querySelector(".about").classList.add("activeLink")
}
if(pageName === "index.html"){
    document.querySelector(".services").classList.add("activeLink")
}
if(pageName === "index.html"){
    document.querySelector(".news").classList.add("activeLink")
}
if(pageName === "index.html"){
    document.querySelector(".contact").classList.add("activeLink")
}



//Faqs Js

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

         //change icon

         const icon = faq.querySelector('.faq-icon i');

         if(icon.className === "fa-solid fa-plus") {

            icon.className = "fa-solid fa-minus"
         } else{
            icon.className = "fa-solid fa-plus";
         }
    })

   
})

//show/hide nav menu

const menu = document.querySelector(".nav-menu");
const menuBtn = document.querySelector("#open-menu");
const closeBtn = document.querySelector("#close-menu");

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

//close nav menu

const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav)

