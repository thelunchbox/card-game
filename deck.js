const deal = (deck, handCount, cardCount) => {
  const drawPile = [...deck];
  // const hands = new Array(handCount).fill(() => []);
  const hands = [];
  for (let h = 0; h < handCount; h++) {
    hands.push([]);
  }
  for (let card = 0; card < cardCount; card++) {
    hands.forEach(hand => {
      const c = drawPile.shift();
      hand.push(c);
    });
  }
  return [hands, drawPile];
};

const generateDeck = (suits, values, times = 1) => {
  const deck = [];
  suits.forEach(suit => {
    values.forEach(value => {
      deck.push({ suit, value });
    });
  });
  let response = [];
  for (let i = 0; i < times; i++) {
    response = [...response, ...deck];
  }
  return response;
};

const shuffle = (deck) => [...deck].sort(() => Math.random() - 0.5);

module.exports = {
  deal,
  generateDeck,
  shuffle,
};
