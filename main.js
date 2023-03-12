let lastScollTop='0';
navbar=document.getElementById('navbar');
window.addEventListener('scroll',function(){
    let scrollTop=window.pageYOffset||document
    .documentElement.scrollTop;
    if(scrollTop>lastScollTop){
        navbar.style.top='-100%';
    }
    else{
        navbar.style.top='0';
    }
    lastScollTop=scrollTop;
})

const nav=document.querySelector('nav');
window.addEventListener('scroll',function(){
    nav.classList.toggle('sticky',window.scrollY>0);
})



const icon=document.getElementById('icon');
const menu=document.getElementById('menu');
icon.onclick=function(){
    menu.classList.toggle('active');
    icon.classList.toggle('active');
}