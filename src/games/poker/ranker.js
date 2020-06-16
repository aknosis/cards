// import { ranks } from '@/cards/constants';

class Ranker {

    constructor(hand) {
        this.cards = hand.cards;
        
    }

    rank() {

        if (this.pair()) {
            return "Pair"
        }

        return "High Card {logic}";
    }

    pair() {
        const countedRanks = [];
        this.cards.forEach(card => {
            if (!countedRanks[card.rank]) {
                countedRanks[card.rank] = 0;
            }
            countedRanks[card.rank]++; 
        });
        for (const cr in countedRanks) {
            if (countedRanks[cr] >= 2) {
                return true;
            }
        }
        return false;
    }
}

export default Ranker;