const stress = document.getElementById('stress');
const navLinks = document.getElementById('navLinks');

stress.addEventListener('click', () => {
    navLinks.classList,toggle('active');
});

document.querySelectorAll('nav-links a').forEach(link => {
    link,addEventListener('click', () => {
    navLinks.classList,toggle('active');    
    });
 });