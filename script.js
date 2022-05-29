let mobileNavBtn = document.getElementById('mobile-nav-btn');

mobileNavBtn.addEventListener('click', function show_sidebar() {
    let sideBar = document.getElementById('sidebar');
    sideBar.style.display = 'block';
});

let crossSidebar = document.getElementById('cross-sidebar');
crossSidebar.addEventListener('click', function close_sidebar() {
    let sideBar = document.getElementById('sidebar');
    sideBar.style.display = 'none';
});

let contact = document.getElementById('contact-btn');
contact.addEventListener('click', function blink() {
    let about = document.getElementById('about2');
    about.style.border = '1px solid black';
    about.style.boxShadow = '5px 10px black';
    const timeout = setTimeout(() => {
        about.style.border = 'none';
        about.style.boxShadow = 'none';
    }, 2000);
});

let project = document.getElementById('project-btn');
project.addEventListener('click', function blink() {
    let about = document.getElementById('about4');
    about.style.border = '1px solid black';
    about.style.boxShadow = '5px 10px black';
    const timeout = setTimeout(() => {
        about.style.border = 'none';
        about.style.boxShadow = 'none';
    }, 2000);
});