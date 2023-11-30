const { deal, generateDeck, shuffle } = require('./deck');

const suits = [
  { color: 'red', symbol: '&hearts;', abbr: 'H' },
  { color: 'black', symbol: '&spades;', abbr: 'S' },
  { color: 'red', symbol: '&diams;', abbr: 'D' },
  { color: 'black', symbol: '&clubs;', abbr: 'C' }
];

const cardValues = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

const deck = generateDeck(suits, cardValues);

const [hands, drawPile] = deal(shuffle(deck), 4, 4);

hands.forEach(hand => {
  console.log(hand.map(c => `${c.value}${c.suit.abbr}`).join(' '));
});
console.log(`${drawPile.length} cards remain`);