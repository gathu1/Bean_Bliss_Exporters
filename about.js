const checkbox =
document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});

// let availableKeywords = [
//     'Kenyan coffee',
//     'Bean Bliss',
//     'Why to cooperate with us',
//     'Seed to Cup',
//     'Connect with customers',
//     'connect with farmers',
//     'Financing',
//     'Contact us',
// ];

// const resultBox = document.querySelector(".result-box");
// const inputBox = document.getElementById("input-box");

// inputBox.onkeyup = function handleInputKeyUp(){
//     let result = [];
//     let input = inputBox.value;
//     if(input.length){
//         result = availableKeywords.filter((keyword)=>{
//             return keyword.toLowerCase().includes(input.toLowerCase());
//         });
//         console.log(result);
//     }
//     display(result);
//     if(!result.length){
//         resultBox.innerHTML = '';
//     }
// }

// function display(result){
//     const content = result.map((list)=>{
//         return "<li onclick=selectInput(this)>" + "</li>";
//     });

//     resultBox.innerHTML = "<ul>" + content.join('') + "</ul>";
// }

// function selectInput(list){
//     inputBox.value = list.innerHTML;
//     resultBox.innerHTML = '';
// }

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

const resultBox = document.querySelector(".result-box");
const inputBox = document.getElementById("inputBox");

inputBox.onkeyup = function() {
    let result = [];
    let input = inputBox.value;
    if(input.length) {
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
        return "<li>" + list + "</li>";
    });
    resultsBox.innerHTML = "<ul>" + content + "</ul>";
}

function selectInput(list){
    inputBox.value = list.innerHTML;
    resultBox.innerHTML = '';
}