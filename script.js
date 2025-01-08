
const hamburger = document.querySelector('.hamburger');
const link = document.querySelector('.link')
const productTab = document.querySelector('.tabset')
const catalogue = document.querySelectorAll('.catalogue');
const percard = document.querySelectorAll('.percard')




hamburger.addEventListener('click', () =>{
    if(link.style.display === "none"){
        link.style.display = 'block';
    } else{
        link.style.display = "none"
    }
})

  