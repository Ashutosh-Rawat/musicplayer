// for showing the option list on music-release--options under latest-release section
// also trying to avoid the inline css using style property in js,
// so rather using class name property
const music_release_arr = Array.from(document.getElementsByClassName('music-release--options'));

music_release_arr.forEach(element => {
  element.addEventListener('click', () => {
    const optionsList = element.querySelector('.music-release--options-list');
    if (optionsList.classList.contains('d-hidden')) {
      optionsList.classList.remove('d-hidden');
    } else {
      optionsList.classList.add('d-hidden');
    }
  });
});



// some scrollbar effects for safari 
var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
if (isSafari) {
    var css = document.createElement('style');
    css.type = 'text/css';
    css.innerHTML = `
        .scroll-behaviour {
            -webkit-overflow-scrolling: touch;
            touch-action: pan-y;
        }
        .scroll-behaviour::-webkit-scrollbar {
            display: none;
        }
    `;
    document.head.appendChild(css);
}
