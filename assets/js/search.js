const searchBtn = document.querySelector('.header__search-btn');
const search = document.querySelector('.search');


const searchOpen = () => {
    search.classList.toggle('search_active');
}


searchBtn.addEventListener('click', searchOpen);
