// filter able project gallery
window.addEventListener('load', () => {
    let allTab = document.querySelectorAll('.tab');
    let allProject = document.querySelectorAll('.project');




    // remove tab active
    const removeActive = () => allTab.forEach(tab => {
        tab.classList.remove('tab-active');
    })
    allTab.forEach(tab => {
        // add tab active
        tab.addEventListener('click', (event) => {
            removeActive();
            tab.classList.add('tab-active');
            let filterName = event.target.getAttribute('data-Name');


            allProject.forEach(project => {
                let projectName = project.getAttribute('data-name');
                if ((projectName == filterName) || filterName == 'All') {
                    project.style.display = 'block';
                }
                else {
                    project.style.display = 'none';
                }
            })
        });


    })


});


// swiper js
let swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 20,

    breakpoint: {
        0:
        {
            slidesPerView: 1,
        },
        600:
        {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1024:
        {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

});


// nav scroll
window.addEventListener('scroll', () => {
    let nav = document.querySelector('nav');

    nav.classList.toggle('nav-scroll', window.scrollY > 0);
});

// typed JS
let typed = new Typed('.typed-text', {
    strings: ['Web Developer', 'Apps Developer', 'Mern Developer'],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
    loop: true,

});

// menu js
let menuBar = document.querySelector('.menu-bar');
let menuButton = document.querySelector('menu-button');

menuButton.addEventListener('click', () => {
    menuBar.classList.toggle('hidden');
})