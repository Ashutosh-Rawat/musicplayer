const options_btn = document.querySelector('.queue-options-btn');
options_btn.addEventListener('click', () => {
    const more_options = options_btn.querySelector('.queue-more-options')
    if(more_options.classList.contains('d-hidden')) {
        more_options.classList.remove('d-hidden');
    }
    else {
        more_options.classList.add('d-hidden');
    }
})