class Hand {
    
    constructor()
    {
        this.cards = [];
    }

    addCard(card) {
        this.cards.push(card);
    }

    show() {
        return this.cards.map(card => `${card.name}`).join(", "); 
    }

}

export default Hand;