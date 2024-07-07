const burgerButton = document.querySelector('.header__burger');
const mobileNav = document.querySelector('.mobile-nav');
const crossButton = document.querySelector('.mobile-nav__cross');
const mobileNavData = document.querySelector('.mobile__nav');
const mobileNavDataLinks = document.querySelectorAll('.mobile__nav a');
const headerNavBottomMobileNav = document.querySelector('.header__nav-bottom_mobile-nav');
const partnerBlock = document.querySelector('.mobile__nav.partner');
const mobileHistory = document.querySelector('.mobile__history');
const historyBurger = [];

const icon = document.createElement('img');
icon.setAttribute('src', './assets/img/favicon/arrow.svg');

const burgerMenu = () => {
    mobileNav.classList.toggle('mobile-nav_active');
    historyBurger.length = 0;

    setTimeout(() => {
        // document.querySelector('.btn-scroll-top').classList.toggle('display-none');
        document.body.classList.toggle('overflowY-hidden');
        crossButton.classList.toggle('display-none');
    }, 300);
}

mobileNavDataLinks.forEach(link => {
    const linkGroup = link.getAttribute('data-main-link');
    link.addEventListener('click', function(event) {
        // для вложенности
        if(historyBurger.length) {
            const lastElemet = historyBurger.pop();
            const mobileNavColumn = document.querySelector('.mobile-nav__column');
        
            for (let i = 0; i < mobileNavColumn.children.length; i++) {
                if(i === 0) continue;
                mobileNavColumn.children[i].classList.add('display-none');
            }
    
            if(lastElemet == 1) {
                catalogNavigationColumnMobileNav.style.cssText = 'display: inline !important';
                headerNavBottomMobileNav.classList.add('display-none');
            }
    
            const historyResponse = document.querySelector(`[data-response="${+lastElemet - 1}"]`);
            if(historyResponse?.classList.contains('display-none')) {
                historyResponse.classList.remove('display-none');
                historyResponse.style.display = 'flex';
            }
    
            return;
        }

        mobileNavData.style.display = 'none';
        const data = document.querySelector(`.${linkGroup}`);
        if(data) {
            data.style.display = 'block';
            mobileHistory.append(icon);
            mobileHistory.append(link.textContent);
        }
    })
})

mobileHistory.addEventListener('click', () => {
    if(!historyBurger.length) {
        document.querySelectorAll('.mobile-nav__column nav').forEach(e => e.style.display = 'none');

        mobileNavData.style.display = '';
        mobileHistory.innerHTML = '';
    } 
})
// можно доделать для вложенности ссылок
document.querySelectorAll('.mb-link').forEach( link => {
    link.addEventListener('click', function(event) {
        const dataCatalog = link.getAttribute('data-catalog');
        
        if(dataCatalog) {
            historyBurger.push(dataCatalog)

            catalogNavigationColumnMobileNav.style.display = 'none';

            const mobileNavColumn = document.querySelector('.mobile-nav__column');
    
            for (let i = 0; i < mobileNavColumn.children.length; i++) {
                if(i === 0) continue;
                mobileNavColumn.children[i].classList.add('display-none');
            }

            document.querySelector(`[data-response="${dataCatalog}"]`).classList.remove('display-none');
            document.querySelector(`[data-response="${dataCatalog}"]`).style.display = 'flex';

            event.preventDefault();
        } else {
            return true;  
        }
    }) 
});

burgerButton.addEventListener('click', burgerMenu);
crossButton.addEventListener('click', burgerMenu);
