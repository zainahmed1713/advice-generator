const dice = document.querySelector('.dice');
const adviceNumber = document.querySelector('.advice-number');
const advice = document.querySelector('.advice');
const API_URL = 'https://api.adviceslip.com/advice';

dice.addEventListener('click', function() {
    fetch(API_URL, {cache: 'no-cache'})
    .then((response) => response.json())
    .then((response) => {
        let data = response.slip;
        let adviceId = data.id;
        let adviceText = data.advice;

        adviceNumber.innerText = `Advice #${adviceId}`;
        advice.innerText = adviceText;
    });
});