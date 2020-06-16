import { ranks, suits } from './constants';
import Card from './card';
import Hand from './hand';


class Deck {

    constructor() {
        this.cards = [];
        this.fill();
    }

    fill() {
        const fillRanks = ranks;
        delete fillRanks.JOKER;
        for (const suit in suits) {
            for (const rank in fillRanks) {
                this.addCard(new Card(rank, suit));
            }
          }

    }

    addCard(card) {
        this.cards.push(card);
    }

    getCard() {
        return this.cards.pop();
    }
    
    shuffle() {
        this.cards.forEach((card, index) => {
            const target = Math.floor(Math.random() * this.cards.length);
            const temp = this.cards[target];
            this.cards[index] = temp;
            this.cards[target] = card;
        });
    }

    deal(numCards) {
        const hand = new Hand();
        for (let card = 1; card <= numCards; card++) {
            hand.addCard(this.getCard());
        }
        return hand;
    }
}

const ShuffledDeck = new Deck;
ShuffledDeck.shuffle();

export { ShuffledDeck }; 

export default Deck;