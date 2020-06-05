const cardsContainer = document.getElementById('cards-container');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const currentEl = document.getElementById('current');
const showBtn = document.getElementById('show');
const hideBtn = document.getElementById('hide');
const questionEl = document.getElementById('question');
const answerEl = document.getElementById('answer');
const addCardBtn = document.getElementById('add-card');
const clearBtn = document.getElementById('clear');
const addContainer = document.getElementById('add-container');

let currentActiveCard = 0;

const cardsEl = [];

const cardsData = [
    {
        question: 'What must a variable begin with?',
        answer: 'A letter, $ or _'
    },
    {
        question: 'What is a variable?',
        answer: 'Container for a piece of data'
    },
    {
        question: 'Example of a Case Sensitive Variable',
        answer: 'thisIsAVariable'
    }
];

function createCards() {
    cardsData.forEach((data, index) => createCard(data, index));
}