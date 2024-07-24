const dropdown = document.querySelector('.sort-dropdown');
const dropdownContent = document.querySelector('.sort-dropdown__content');

if(dropdown) {
    dropdown.addEventListener('click', function() {
        dropdownContent.style.display = dropdownContent.style.display === 'flex' ? 'none' : 'flex';
    });
}

document.addEventListener('click', function(event) {
    if (!event.target.closest('.sort-dropdown') && dropdownContent ) {
        dropdownContent.style.display = 'none';
    }
});

window.onscroll = () => scrollFunction();

function scrollFunction() {
    if ((document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) && window.screen.availWidth < 1070) {
        if(document.querySelector('.btn-scroll-top')) {
            document.querySelector('.btn-scroll-top').style.display = 'flex';
            document.querySelector('.btn-scroll-top').onclick = function scrollToTop() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }    
        }
    } else {
        if(document.querySelector('.btn-scroll-top')) {
            document.querySelector('.btn-scroll-top').style.display = 'none';
        }
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

if(filterBtn) {
    filterBtn.addEventListener('click', openFilter); 
}
if(filterCrossBtn) {
    filterCrossBtn.addEventListener('click', openFilter); 
}

if (window.screen.availWidth < 1070 && filterBtnMobile) {
    filterBtnMobile.style.display = 'flex';
    filterBtnMobile.addEventListener('click', openFilter); 
}

window.addEventListener('resize', () => {
    if (window.screen.availWidth < 1070 && filterBtnMobile) {
        filterBtnMobile.style.display = 'flex';
        filterBtnMobile.addEventListener('click', openFilter); 
    } else if (filterBtnMobile) {
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

        paramLinks.forEach( link => {
            const svg = link.querySelector('svg');
            svg.classList.remove('minus');
        })

        const svg = this.querySelector('svg');
        
        const filterParam = this.nextElementSibling;
        
        if(filterParam.classList.contains('open')) {
            filterParam.classList.remove('open');
            svg.classList.remove('minus');
        } else {
            filterParam.classList.add('open');
            svg.classList.add('minus');
        }
    });
});

const decreaseItems = document.getElementById('decreaseItems');
const defaultItems = document.getElementById('defaultItems');

if(decreaseItems) {
    decreaseItems.addEventListener('click', () => {
        document.querySelector('.decrease-btn').classList.add('active');
        document.querySelector('.default-btn').classList.remove('active');
        document.querySelector('.catalog-product__column').style.gridTemplateColumns = 'repeat(3, 1fr)';
        document.querySelectorAll('.catalog-product-card').forEach(e => { e.style.maxWidth = '550px' });
        document.querySelectorAll('.catalog-product-card__img-block ').forEach(e => { e.style.height = '795px' });
    });
}

if(defaultItems) {
    defaultItems.addEventListener('click', () => {
        document.querySelector('.default-btn').classList.add('active');
        document.querySelector('.decrease-btn').classList.remove('active');
        document.querySelector('.catalog-product__column').style.gridTemplateColumns = '';
        document.querySelectorAll('.catalog-product-card').forEach(e => { e.style.maxWidth = '' });
        document.querySelectorAll('.catalog-product-card__img-block ').forEach(e => { e.style.height = '' });
    });
}

const description = document.querySelector('.description');
const descriptionBtn = document.querySelector('.product__about-btn');
const descriptionCrossBtn = document.querySelector('.description__cross');

const openDescription = () => {
    document.querySelector('main').classList.toggle('overlay');
    document.querySelector('footer').classList.toggle('overlay');
    description.classList.toggle('description_active');
};

if(descriptionBtn) {
    descriptionBtn.addEventListener('click', openDescription); 
}

if(descriptionCrossBtn) {
    descriptionCrossBtn.addEventListener('click', openDescription); 
}

const faqQuestion = document.querySelectorAll('.faq__question');

faqQuestion.forEach(function(link, index) {
    link.addEventListener('click', function(event) {

        const svg = this.querySelector('svg');
        const faqAnswer = this.nextElementSibling;

        if(faqAnswer.classList.contains('open')) {
            faqAnswer.classList.remove('open');
            svg.classList.remove('rotate');
        } else {
            faqAnswer.classList.add('open');
            svg.classList.add('rotate');
        }
    });
});

const manufacterVideoBtn = document.querySelector('.video-btn');
const video = document.getElementById('video');

if(manufacterVideoBtn && video) {
    let isPlaying = false;

    manufacterVideoBtn.addEventListener('click', () => {
        if (isPlaying) {
            video.pause();
            isPlaying = false;
        } else {
            video.play();
            isPlaying = true;
        }
    });
}

const producRadioBtns = document.querySelectorAll('.product__radio-btns span');
if(producRadioBtns.length > 0) {
    producRadioBtns.forEach(span => {
        span.addEventListener('click', function() {
            const radioColor = window.getComputedStyle(span).getPropertyValue('--radio-color');
            
            let images = '';

            if (window.screen.availWidth > 1070) {
                images = document.querySelectorAll('.product__imgs img');
            } else {
                images = document.querySelectorAll('.swiper-slide img');
            }

            switch(radioColor) {
                case 'rgba(9, 15, 151, 1)':
                    images.forEach(img => img.src = `./assets/img/33.png`);
                    break;
                case 'rgba(239, 205, 152, 1)':
                    images.forEach(img => img.src = `./assets/img/R6 1.png`);
                    break;
                case 'rgba(255, 255, 255, 1)':
                    images.forEach(img => img.src = `./assets/img/R5 1.png`);
                    break;
                case 'rgba(0, 0, 0, 1)':
                    images.forEach(img => img.src = `./assets/img/image 2.png`);
                    break;
            }
        });
    });
}
