(() => {
    const order3BtnRef = document.querySelector('[data-modal-button3]');
    const order2BtnRef = document.querySelector('[data-modal-button2]');
    const order1BtnRef = document.querySelector('[data-modal-button]');
    const mobileMenuRef = document.querySelector('[data-modal]');
    const closeModalBtn = document.querySelector('[data-modal-close]');
    
     order1BtnRef.addEventListener('click', () => {
            const expanded = order1BtnRef.getAttribute('aria-expanded') === 'true' || false;
                order1BtnRef.classList.toggle('is-open');
                order1BtnRef.setAttribute('aria-expanded', !expanded);
                mobileMenuRef.classList.toggle('is-open');
     });
    
    order2BtnRef.addEventListener('click', () => {
            const expanded = order2BtnRef.getAttribute('aria-expanded') === 'true' || false;
                order2BtnRef.classList.toggle('is-open');
                order2BtnRef.setAttribute('aria-expanded', !expanded);
                mobileMenuRef.classList.toggle('is-open');
    });
    
    order3BtnRef.addEventListener('click', () => {
            const expanded = order3BtnRef.getAttribute('aria-expanded') === 'true' || false;
                order3BtnRef.classList.toggle('is-open');
                order3BtnRef.setAttribute('aria-expanded', !expanded);
                mobileMenuRef.classList.toggle('is-open');
     });
    
    closeModalBtn.addEventListener('click', () => {
            const expanded = closeModalBtn.getAttribute('aria-expanded') === 'true' || false;
                closeModalBtn.classList.toggle('is-open');
                closeModalBtn.setAttribute('aria-expanded', !expanded);
                mobileMenuRef.classList.toggle('is-open');
     });
    
})();