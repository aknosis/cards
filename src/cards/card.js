import { ranks, suits, codes } from './constants';

class Card {

    constructor(rank, suit)
    {
        this.rank = rank;
        this.suit = suit;
    }

    get name() {
        return `${ranks[this.rank]} of ${suits[this.suit]}`;
    }

    get code() {
        const suit = this.suit.substr(0, 1).toUpperCase();
        return `${codes[this.rank]}${suit}`;
    }
}

export default Card;