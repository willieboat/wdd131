document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;

const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('mainNav');

menuBtn.addEventListener('click', () => {
    nav.classList.toggle('open');
    menuBtn.textContent = nav.classList.contains('open') ? 'X' : '☰';
});
