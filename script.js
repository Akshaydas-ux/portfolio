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


const counters = document.querySelectorAll(".counter");

const countObserver = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

const counter = entry.target;
const target = +counter.dataset.target;

let count = 0;

const updateCount = () => {

const increment = target / 50;

if(count < target){

count += increment;
counter.innerText = Math.ceil(count);

requestAnimationFrame(updateCount);

}else{

counter.innerText = target + "+";

}

};

updateCount();

countObserver.unobserve(counter);

}

});

},{threshold:0.5});

counters.forEach(counter => {
countObserver.observe(counter);
});


function hideLoader() {
    const loader = document.getElementById("loader");

    if(loader){
        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 600);
    }
}

window.addEventListener("load", hideLoader);

setTimeout(hideLoader, 3000);

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");

document.querySelectorAll(".project-card img").forEach(img => {

img.addEventListener("click", () => {

modal.style.display = "flex";
modalImg.src = img.src;

});

});

document.querySelector(".close-modal").addEventListener("click", () => {

modal.style.display = "none";

});

modal.addEventListener("click",(e)=>{

if(e.target === modal){
modal.style.display = "none";
}

});

const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

scrollBtn.style.display="block";

}else{

scrollBtn.style.display="none";

}

});

scrollBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});
