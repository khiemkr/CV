const nav = document.querySelector('.header')
let topofNav = nav.offsetTop;
function scrollHeader(){
    if(window.scrollY >= topofNav)
    {
      nav.classList.add('open');  
    }
    if(window.scrollY === 0){
        nav.classList.remove('open');
    }
    // console.log(window.scrollY)
}
window.addEventListener('scroll',scrollHeader);

//follow project
const trigger = document.querySelectorAll('.project_link');
const highlight = document.createElement('div');
  highlight.classList.add('highlight');
  document.body.appendChild(highlight);

function hightlight (){
    const position = this.getBoundingClientRect()
    const temp = {
        width: position.width,
        height: position.height,
        top: position.top + window.scrollY,
        left: position.left + window.scrollX,
    }
    console.log(temp);
    highlight.style.width = `${temp.width}px`;
    highlight.style.height = `${temp.height}px`;
    highlight.style.transform = `translate(${temp.left}px, ${temp.top}px)`;

}
function removehightlight(){
    // highlight.classList.toggle('highlight');
}

trigger.forEach(e => e.addEventListener('mouseenter',hightlight))
trigger.forEach(a => a.addEventListener('mouseleave',removehightlight))
// active tab

const active = document.querySelectorAll('.header_nav-link');
const line = document.querySelector('.line');

line.style.left = active.offsetLeft + "px";
line.style.width = active.offsetWidth + "px";
function activenav (){
    console.log(line.style.left)
    this.classList.add('.line')
}
active.forEach(e => e.addEventListener('mouseenter',activenav))
// show header mobile

const navmobile = document.querySelector('.header_icon');
const header_nav = document.querySelector('.header_nav');

function shownav(){
    console.log(this);
    console.log(header_nav)
    header_nav.classList.toggle('open');
}




navmobile.addEventListener('click',shownav);
