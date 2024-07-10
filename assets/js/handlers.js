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
    if ((document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) && window.screen.availWidth < 1070) {
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
}

const filter = document.querySelector('.filter');
const filterBtn = document.querySelector('.catalog-category__filter-btn');
const filterBtnMobile = document.querySelector('.filter-btn');
const filterCrossBtn = document.querySelector('.filter__cross');
const openFilter = () => {
    if (window.screen.availWidth < 1070) {
        document.body.classList.toggle('overflowY-hidden');
    }
    document.querySelector('main').classList.toggle('overlay');
    document.querySelector('footer').classList.toggle('overlay');
    filter.classList.toggle('filter_active');
};

filterBtn.addEventListener('click', openFilter); 
filterCrossBtn.addEventListener('click', openFilter); 

if (window.screen.availWidth < 1070) {
    filterBtnMobile.style.display = 'flex';
    filterBtnMobile.addEventListener('click', openFilter); 
}

window.addEventListener('resize', () => {
    if (window.screen.availWidth < 1070) {
        filterBtnMobile.style.display = 'flex';
        filterBtnMobile.addEventListener('click', openFilter); 
    } else {
         document.querySelector('.filter-btn').style.display = 'none';
    }
})

const paramLinks = document.querySelectorAll('.param__link');
const filterParams = document.querySelectorAll('.filter__param');

paramLinks.forEach(function(link, index) {
    link.addEventListener('click', function(event) {
        event.preventDefault();

        filterParams.forEach(function(param, paramIndex) {
            if (paramIndex !== index && param.classList.contains('open')) {
                param.classList.remove('open');
            }
        });

        const filterParam = this.nextElementSibling;

        if(filterParam.classList.contains('open')) {
            filterParam.classList.remove('open');
        } else {
            filterParam.classList.add('open');
        }
    });
});

const decreaseItems = document.getElementById('decreaseItems');
const defaultItems = document.getElementById('defaultItems');

decreaseItems.addEventListener('click', () => {
    document.querySelector('.decrease-btn').classList.add('active');
    document.querySelector('.default-btn').classList.remove('active');
    document.querySelector('.catalog-product__column').style.gridTemplateColumns = 'repeat(3, 1fr)';
    document.querySelectorAll('.catalog-product-card').forEach(e => { e.style.maxWidth = '550px' });
    document.querySelectorAll('.catalog-product-card__img-block ').forEach(e => { e.style.height = '795px' });
});

defaultItems.addEventListener('click', () => {
    document.querySelector('.default-btn').classList.add('active');
    document.querySelector('.decrease-btn').classList.remove('active');
    document.querySelector('.catalog-product__column').style.gridTemplateColumns = '';
    document.querySelectorAll('.catalog-product-card').forEach(e => { e.style.maxWidth = '' });
    document.querySelectorAll('.catalog-product-card__img-block ').forEach(e => { e.style.height = '' });
});
