// URL="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";

// function googleTranslateElementInit(){
//     new google.translate.TranslateElement(
//         {pageLanguage: 'en'},
//         'google_translate-element'
//     );
// }

// function googleTranslateElementInit() {
//     new google.translate.TranslateElement({
//         pageLanguage: 'en', // Set the default language
//         layout: google.translate.TranslateElement.InlineLayout.SIMPLE // Choose layout style
//     }, 'google_translate_element');
// }

const checkbox =
document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});

let availableKeywords = [
    'Kenyan coffee',
    'Bean Bliss',
    'Why to cooperate with us',
    'Seed to Cup',
    'Connect with customers',
    'connect with farmers',
    'Financing',
    'Contact us',
];

const resultBox = document.querySelector(".resultBox");
const inputBox = document.getElementById("inputBox");

inputBox.onkeyup = function() {
    let result = [];
    let input = inputBox.value;
    if(input.length){
        result = availableKeywords.filter((keyword)=>{
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);

    if(!result.length){
        resultBox.innerHTML = '';
    }
}

function display(result){
    const content = result.map((list)=>{
        return "<li onclick=selectInput(this)>" + list + "</li>";
    });
    resultBox.innerHTML = "<ul>" + content.join(' ') + "</ul>";
}

function selectInput(list){
    inputBox.value = list.innerHTML;
    resultBox.innerHTML = '';
}