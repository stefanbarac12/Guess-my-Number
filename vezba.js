const checkBtn = document.querySelector('.check');
let scoreTxt = document.querySelector('.score');
let highScoreTxt = document.querySelector('.highscore');
const againBtn = document.querySelector('.again');
let msg = document.querySelector('.message');
let number = document.querySelector('.number');


let secretNumber = Math.trunc(Math.random() * 10) + 1;
let score = 20;
let highscore = 0;

const displayMessage = (message) => {
    msg.innerHTML = message;
}

checkBtn.addEventListener('click', () => {
    let guess = Number(document.querySelector('.guess').value);
    // When there is no input
    if (!guess) {
        displayMessage('⛔️ No number!');

    } else if (guess === secretNumber) {
        displayMessage('🎉 Correct Number!');
        number.innerHTML = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';

        if (score > highscore) {
            highscore = score;
            highScoreTxt.innerHTML = highscore;
        }

    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
            score--;
            scoreTxt.innerHTML = score;
        }
        else {
            displayMessage('💥 You lost the game!');
            document.querySelector('body').style.backgroundColor = 'red';
            scoreTxt.innerHTML = 0;
        }
    }
});

againBtn.addEventListener('click', function () {
    scoreTxt.innerHTML = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage('Start guessing...');

    number.innerHTML = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    let guess = document.querySelector('.guess').value = '';
});
