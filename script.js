// URL="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";

// function googleTranslateElementInit(){
//     new google.translate.TranslateElement(
//         {pageLanguage: 'en'},
//         'google_translate-element'
//     );
// }

const checkbox =
document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});