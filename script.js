let changing = document.querySelector(".textchanging-header")
let myslider = new Splide("#mysplide")
myslider.mount()
let titles = [
    'Explore the websites for sales!',
    'we have nutcrackers that crack nuts!',
    'Free shipping on products over 399$!',
    'our nutcrackers are german!',
    'best gifts for friends or anyone!'
];

function newTitle () {
    let i = (Math.random() * titles.length) | 0;
    changing.innerText = titles[i];
}

newTitle()

document.addEventListener('DOMContentLoaded', function() {
    var notification = document.getElementById('cookies-notification');
    var acceptBtn = document.getElementById('accept-btn');
  
    if (!localStorage.getItem('cookiesAccepted')) {
        if (notification) {
            notification.classList.remove('hidden');
        }
    }
  
    if (acceptBtn) {
        acceptBtn.addEventListener('click', function() {
            if (notification) {
                notification.classList.add('hidden');
            }
            localStorage.setItem('cookiesAccepted', true);
        });
    }
  });
  

  const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length > 6);

console.log(result);

let scrolltotop = document.getElementById("scrolltotop")

window.addEventListener("scroll", () => {
  if (window.scrollY < 2000) {
    scrolltotop.style.display = "none"
  } else {
    scrolltotop.style.display = "block"
  }
  });

scrolltotop.addEventListener("click", function(){
  window.scrollTo({top: 0, behavior: 'smooth'});
})

const x = 10
const y = 5
