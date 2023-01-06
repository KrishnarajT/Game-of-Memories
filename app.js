// defining an array to take images and names from later on in the code. The dictionary.
const cardArray = [
    {
        name: 'House Stark',
        img: 'images/stark.png',
        slogan: 'Growing',
        slogan: 'Winter is Coming',
    },
    {
        name: 'House Targeryen',
        img: './images/targeryen.png',
        slogan: 'Fire and Blood',
    },
    {
        name: 'House Tyrell',
        img: './images/tyrell.png',
        slogan: 'Growing Stronger',
    },
    {
        name: 'House Grayjoy',
        img: './images/grayjoy.png',
        slogan: 'We do not Sow',
    },
    {
        name: 'House Lannister',
        img: './images/lannister.png',
        slogan: 'Hear me Roar',
    },
    {
        name: 'House Baratheon',
        img: './images/baratheon.png',
        slogan: 'Ours is the Fury',
    },
    {
        name: 'House Stark',
        img: 'images/stark.png',
        slogan: 'Growing',
        slogan: 'Winter is Coming',
    },
    {
        name: 'House Targeryen',
        img: './images/targeryen.png',
        slogan: 'Fire and Blood',
    },
    {
        name: 'House Tyrell',
        img: './images/tyrell.png',
        slogan: 'Growing Stronger',
    },
    {
        name: 'House Grayjoy',
        img: './images/grayjoy.png',
        slogan: 'We do not Sow',
    },
    {
        name: 'House Lannister',
        img: './images/lannister.png',
        slogan: 'Hear me Roar',
    },
    {
        name: 'House Baratheon',
        img: './images/baratheon.png',
        slogan: 'Ours is the Fury',
    },
];
// empty array to store the images that were flipped.
let cardsChosen = [];
let winCount = 0;
let flippedNumber = 0;

// randomizing the card array.
cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector('#grid');
const playAgainButton = document.getElementsByTagName('button')[0];
playAgainButton.addEventListener('click', clearAll);
playAgainButton.addEventListener('mousemove', function (e) {});
playAgainButton.disabled = true;

// create the baord from the randomly assigned values from the array.
// calls the flipcard function upon clicking it.
function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'images/ice king2.png');
        card.setAttribute('data-id', i);
        card.setAttribute('class', 'card');
        card.addEventListener('click', flipCard);
        gridDisplay.append(card);
    }
}

// function to then assign the image to the card, and if you have flipped 2, then check for a match.
function flipCard() {
    flippedNumber++;
    const cardId = this.getAttribute('data-id');
    document.getElementById('comment').innerHTML = cardArray[cardId].name;
    document.getElementById('slogan').innerHTML =
        '"' + cardArray[cardId].slogan + '"';
    this.classList.toggle('flippit');
    if (flippedNumber <= 2) {
        cardsChosen.push(this);
        this.setAttribute('src', cardArray[cardId].img);
        if (cardsChosen.length === 2) {
            setTimeout(checkMatch, 500);
        }
    }
}

// function to assign the images to white, if they match.
function checkMatch() {
    // get all the images in the grid from the webpage.
    cards = document.querySelectorAll('#grid img');
    console.log('Checking for match.');

    const optionOneId = cardsChosen[0].getAttribute('data-id');
    const optionTwoId = cardsChosen[1].getAttribute('data-id');

    // if their names match, then tell that you found a match, and then change colors.
    if (
        cardsChosen[0].getAttribute('src') == cardsChosen[1].getAttribute('src') &&
        optionOneId != optionTwoId
    ) {
        document.getElementById('comment').innerHTML = 'you Found a Match';
        // make the cards white if they match.
        cards[optionOneId].setAttribute('src', 'images/white.png');
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].setAttribute('src', 'images/white.png');
        cards[optionTwoId].removeEventListener('click', flipCard);
        winCount++;
    } else {
        cards[optionOneId].setAttribute('src', 'images/ice king2.png');
        cards[optionTwoId].setAttribute('src', 'images/ice king2.png');
    }
    flippedNumber = 0;

    if (winCount == 6) {
        document.getElementById('comment').innerHTML =
            'you Win, Click the Dragon to Play Again';
        playAgainButton.disabled = false;
    }
    cardsChosen[0].classList.toggle('flippit');
    cardsChosen[1].classList.toggle('flippit');

    cardsChosen = [];
}
function clearAll() {
    // erase everything and make it ready for the next run
    cardsChosen = [];
    winCount = 0;
    flippedNumber = 0;

    // Randomize again
    cardArray.sort(() => 0.5 - Math.random());
    // fix some attributes for the grid div.
    gridDisplay.childNodes.forEach((element, i) => {
        element.setAttribute('src', './images/ice king2.png');
        element.addEventListener('click', flipCard);
    });
}

createBoard();
