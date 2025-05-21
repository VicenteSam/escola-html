// darkmode
let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')

const enabledarkmode = () => {
  document.body.classList.add('darkmode')
  localStorage.setItem('darkmode', 'active')
}

const disabledarkmode = () => {
  document.body.classList.remove('darkmode')
  localStorage.setItem('darkmode', null)
}

if(darkmode === "active") enabledarkmode()

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem('darkmode')
  darkmode !== "active" ? enabledarkmode() : disabledarkmode()
})

// toast script
const form = document.querySelector('form');
const toastLiveExample = document.getElementById('liveToast');
const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);

form.addEventListener('submit', (event) => {
  event.preventDefault();
  toastBootstrap.show();

  form.reset();
});

// Scroll animation
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.remove('hidden');
      entry.target.classList.add('animate__animated', 'animate__fadeInUp');
      sectionObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.container.hidden').forEach(el => {
  sectionObserver.observe(el);
});
