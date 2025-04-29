 
 let navbar = document.querySelector('#header')

 document.addEventListener("scroll", ()=>{
    let scrollTop = window.scrollY

    if (scrollTop > 0){
        navbar.classList.add('rolar')
    } else{
        navbar.classList.remove('rolar')
    }
})

// whatts

const box = document.getElementById('whatsappBox');
const button = document.getElementById('whatsappButton');

button.addEventListener('click', function (e) {
  e.stopPropagation();
  box.style.display = box.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', function (e) {
  if (!box.contains(e.target) && !button.contains(e.target)) {
    box.style.display = 'none';
  }
});