const dropdown = document.querySelector('.sort-dropdown');
const dropdownContent = document.querySelector('.sort-dropdown__content');

dropdown.addEventListener('click', function() {
    dropdownContent.style.display = dropdownContent.style.display === 'flex' ? 'none' : 'flex';
});

document.addEventListener('click', function(event) {
    if (!event.target.closest('.sort-dropdown')) {
        dropdownContent.style.display = 'none';
    }
});

window.onscroll = () => scrollFunction();

function scrollFunction() {
    if ((document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) && window.innerWidth <= 550) {
        document.querySelector('.btn-scroll-top').style.display = 'flex';
        document.querySelector('.btn-scroll-top').onclick = function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }    
    } else {
      document.querySelector('.btn-scroll-top').style.display = 'none';
    }

    // if ((document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) && window.innerWidth <= 550) {
    //     document.querySelector('.btn-scroll-top').style.display = 'flex';
    //     document.querySelector('.btn-scroll-top').onclick = function scrollToTop() {
    //         window.scrollTo({
    //             top: 0,
    //             behavior: 'smooth'
    //         });
    //     }    
    // } else {
    //   document.querySelector('.btn-scroll-top').style.display = 'none';
    // }
}