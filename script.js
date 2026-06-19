const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{

glow.style.left = e.clientX + "px";
glow.style.top = e.clientY + "px";

});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop - 150;

if(scrollY >= sectionTop){
current = section.getAttribute("id");
}

});

navLinks.forEach(link => {

link.classList.remove("active");

if(link.getAttribute("href").includes(current)){
link.classList.add("active");
}

});

});

const reveals = document.querySelectorAll('.fade-up');

function revealSections() {
  reveals.forEach(item => {
    const top = item.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      item.classList.add('show');
    }
  });
}

window.addEventListener('scroll', revealSections);

revealSections();
