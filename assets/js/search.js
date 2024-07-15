const searchBtn = document.querySelectorAll('.header__search-btn');
const search = document.querySelector('.search');
const searchCross = document.querySelector('.search__cross');

const searchOpen = () => {
    search.classList.toggle('search_active');
    if(window.screen.availWidth < 1070) {
        document.body.classList.toggle('overflowY-hidden');
    }
}


searchBtn.forEach(btn => btn.addEventListener('click', searchOpen));
searchCross.addEventListener('click', searchOpen);