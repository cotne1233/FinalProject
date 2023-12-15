function toggleMenu() {
    document.querySelector('.menu').classList.toggle('show-menu');
  }
  
  function togglePassword() {
    const passwordInput = document.getElementById('password');
    passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
  }

  let buttonmain = document.getElementById("buttonsign")

  function validateForm() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const text = document.getElementById('text').value;
    const checkbox = document.getElementById('checkbox');
  
    if (!/\S+@\S+\.\S+/.test(email)) {
        alert('Invalid email address');
        return;
    }
  
    if (password.length < 6) {
        alert('Password must be at least 6 characters');
        return;
    }
  
    if (!checkbox.checked) {
        alert('Please agree to the terms');
        return;
    }
  
    alert('Form submitted successfully!');
  }

  buttonmain.addEventListener("click", function(){
    validateForm()
  })
  
  function acceptCookies() {
    document.getElementById('cookieNotification').style.display = 'none';
  }
  
  function toggleAccordion(header) {
    const content = header.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  }
  
  function filterFunction() {
    const filterValue = document.getElementById('filterInput').value.toLowerCase();
  }
  let thelink = "https://jsonplaceholder.org/posts"
  let text = document.querySelector(".displaymain")
  let haha = document.getElementById("myForm")
  
  fetch(thelink)
  .then(response => response.json())
  .then(responsejson => {
  
    for (let {slug} of responsejson) {
    console.log(slug);
    let leftnewfact = document.createElement("p")
    leftnewfact.innerText = slug
    text.append(leftnewfact)
    }
  })
  
  let scrolltotop = document.getElementById("scrolltotop")
  
  window.addEventListener("scroll", () => {
    if (window.scrollY < 1800) {
      scrolltotop.style.display = "none"
    } else {
      scrolltotop.style.display = "block"
    }
    });
  
  scrolltotop.addEventListener("click", function(){
    window.scrollTo({top: 0, behavior: 'smooth'});
  })
  
  const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
  
  const result = words.filter((word) => word.length > 6);
  
  console.log(result);
  
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
  